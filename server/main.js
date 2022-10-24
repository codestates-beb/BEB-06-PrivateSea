const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());
const multer = require("multer");
const upload = multer({ dest: "image/" });
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

var db;
MongoClient.connect(
  process.env.DATABASE_URL,
  { useUnifiedTopology: true },
  function (err, client) {
    if (err) {
      return console.log(err);
    }

    app.get("/nft/:theme?", function (req, res) {
      db = client.db("project1");
      let query = {};
      if (req.params.theme) {
        query.theme = req.params.theme;
      }
      db.collection("img_table")
        .find(query)
        .toArray(function (err, result) {
          if (err) return console.log(err);
          console.log(result);
          res.json({ result: result });
        });
    });

    app.patch("/nft/:tokenid/:owner", function (req, res) {
      db = client.db("project1");
      console.log(req.params);
      db.collection("img_table").findOneAndUpdate(
        { tokenid: req.params.tokenid },
        { $set: { owner: req.params.owner } },
        function (err, result) {
          if (err) return console.log(err);
          console.log(result);
          res.json({ result: result });
        }
      );
    });

    app.post("/nft/image", upload.single("image"), function (req, res, next) {
      console.log(req.file);
      console.log(req.body);
      db = client.db("project1");
      const uploaded = {
        owner: req.body.owner,
        name: req.body.name,
        theme: req.body.theme,
        tokenid: req.body.tokenid,
        price: req.body.price,
        url: req.file.filename,
        originalname: req.file.originalname,
      };
      db.collection("img_table").insertOne(uploaded, function (err, result) {
        console.log("저장완료");
        res.json({ result: result });
      });
    });

    app.get("/search", function (req, res) {
      db = client.db("project1");
      console.log(req.query.value);
      const searchCon = [
        {
          $search: {
            index: "nft_search",
            text: {
              query: req.query.value,
              path: ["owner", "tokenid", "name"],
            },
          },
        },
        { $sort: { name: 1 } },
      ];
      db.collection("img_table")
        .aggregate(searchCon)
        .toArray(function (err, result) {
          if (err) return console.log(err);
          console.log(result);
          res.json({ result: result });
        });
    });

    app.use(express.static(path.join(__dirname, "../build")));

    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../build/index.html"));
    });

    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  }
);
