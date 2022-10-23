const express = require('express');
const app = express();
const test = require("./reactrouter.js")
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

var db;
MongoClient.connect(process.env.DATABASE_URL, { useUnifiedTopology: true }, function(err, client){
    if(err){
        return console.log(err)
    }
   
    app.get('/nft/:theme', function(req, res){
        db = client.db('project1');
        db.collection('img_table').find({theme : req.params.theme}).toArray(function(err, result){
            if(err) return console.log(err);
            console.log(result);
            res.json({result : result});
        })
    })

    app.patch('/nft/:tokenid/:owner', function(req, res){
        db = client.db('project1');
        console.log(req.params)
        db.collection('img_table').findOneAndUpdate({tokenid : req.params.tokenid}, {$set : {owner : req.params.owner}}, function(err, result){
            if(err) return console.log(err)
            console.log(result)
            res.json({result :  result});
        })
    })

    app.get('/nft', function(req, res){
        db = client.db('project1');
        console.log(req.query.value)
        const searchCon = [
            {
                $search: {
                    index: 'nft_search',
                    text: {
                        query: req.query.value,
                        path: ['owner', 'tokenid', 'name'],
                    }
                }
            },
            { $sort : {name : 1}}
        ]
        db.collection('img_table').aggregate(searchCon).toArray(function(err, result){
            if(err) return console.log(err)
            console.log(result)
            res.json({result : result});
        })
    })


    // app.use(express.static(path.join(__dirname, '../build')))
    
    // app.get('*', function(req, res){
    //     res.sendFile(path.join(__dirname, '../build/index.html'))
    // })

    app.listen(8080, function(){
        console.log('listening on 8080')
    })
})
//req.prams.id 를 filter 처리한다. (account, tokenId, collectionName)
//데이터베이스에서 받은 정보를 프론트로 보내준다.

//req.prams.id 를 filter 처리한다. (account, tokenId, collectionName)
//데이터베이스에서 받은 정보를 프론트로 보내준다.
