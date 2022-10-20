const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const cors = require('cors');
app.use(cors());
require('dotenv').config();

let db;
MongoClient.connect(process.env.DATABASE_URL, { useUnifiedTopology: true }, function(err, client){
    if(err){
        return console.log(err)
    }
    app.get('/nft', function(req, res){
        db = client.db('project1');
        console.log(req.query.value)
        const searchCon = [
            {
                $search: {
                    index: 'nft_search',
                    text: {
                        query: req.query.value,
                        path: ['account', 'tokenId', 'collectionName'],
                    }
                }
            },
            { $sort : {title : 1}}
        ]
        db.collection('img_table').aggregate(searchCon).toArray(function(err, result){
            if(err) return console.log(err)
            console.log(result)
            res.render('검색된 페이지', {img : result})
        })
    })

    app.use(express.static(path.join(__dirname, '../build')))
    
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../build/index.html'))
    })

    app.listen(8080, function(){
        console.log('listening on 8080')
    })
})
//req.prams.id 를 filter 처리한다. (account, tokenId, collectionName)
//데이터베이스에서 받은 정보를 프론트로 보내준다.

//req.prams.id 를 filter 처리한다. (account, tokenId, collectionName)
//데이터베이스에서 받은 정보를 프론트로 보내준다.
