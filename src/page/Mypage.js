/* eslint-disable */

import { React, useState, useEffect } from "react";
import axios from "axios";
import Detail from "./Detail";


function Mypage() {

    const [data , setData] = useState([]);

    async function onLoadData() {
        await axios.get('https://testnets-api.opensea.io/api/v1/assets?owner=0xEcd5c913FC8B656dbfe0f2d902E1b0902de025aA&order_direction=desc&offset=0&limit=20&include_orders=false%27')
        .then((response)  => {
            let data = response.data.assets;
            setData(data);
            console.log(data);
        })
        .catch(err => console.error(err))
    };

// map으로 자신이 소유한 nft배열을 가져오되, 갯수 모르므로 ...배열
// 반복할 때 filter로 name, price만 선택해서 가져오기 

// Main에 있는 nft들이 모두 all인 반면, 
// my page의 nft들은 그 allNft에 없을 수 있으므로(몇 개 보이지 않아 보이지 않음) 
// DB에서 요청하여 가져온 data를 사용함.


    // 1. 내가 가진 nft를 모두 가져온다
    const myNft = [...data]

    // 2. nft 중 필요한 내용(name, price)만 보여준다. -> 해야될 부분, 코딩 맞는지 모르겠음 
    myNft.filter((data) => {
        return(
        data.name,
        data.price
        )
    })

    return (
        <div>
        <h1> My Page </h1>

        <div className="container">
            <img src="" /> 
            <p> name </p>
            <p> price </p>
            <button> sell </button>
        </div>

        {detail && <Detail />}

        </div>
    );
    }

export default Mypage;
