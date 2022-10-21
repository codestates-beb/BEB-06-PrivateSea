/* eslint-disable */

import { React, useState, useEffect } from "react";
import Nav from "../Nav";
import axios from "axios";
import Detail from "./Detail";
import { Route, Routes, BrowserRouter } from "react-router-dom";

/** 륜하
1. 지갑연결 -> useEffect
연결 X -> 주소란에 , 사이트창에 "아직 연결 안 됐습니다" 알림
연결 O -> 주소란에 자기 acount 보임, 사이트창에 자기가 소유한 nft가 보임 
2. 서버에 account값 보내고 정보 받기; 간단하게 보이는 화면 -> 개별 nft 누르면 Detail.js로 이동  
    - nft url
    - nft name
    - nft 가격
3. 소유한 nft에 sell 버튼 달기 
    - sell 버튼 누르렴 "판매가 완료되었습니다" 문구가 뜸 
 */


function Mypage() {

    const [connection, setConnection] = useState(0);
    const [nft, setNft] = useState([]); 


    // 지갑 연결 요청
    axios.get('/address', {
        params: {
            address: 0x1234
        }
    })
    .then(function (res) {
        alert("성공!");
    })
    .catch(function (err) {
        alert("실패");
    })


    // 보유한 nft 가져오도록 요청 
    async function getNFT() {
        await axios
        .post(
            "http://localhost:8080/page/mypage",
            {
            data: {
                url: "https://i.pinimg.com/564x/2d/e7/94/2de7947450488ea0e334017628368710.jpg",
            },
        },
        { withCredentials: true }
        ) 

    nft.map(function(a, i){
        return(
            let copy = [...nft]



            <div className="nft" key={i}>
                onClick={() => { setNft()}}
            </div>
        )
    })
    
    // nftUrl state 쓸 수 없을까?
        //       .then((result) => {
    //         setNftUrl(result.data);
    //         console.log(nftUrl);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }



    return (
        <div>
        <Nav />
        <h1> My Page </h1>

        {/* 상단의 프로필 배경 box하나, 프로필 사진 들어갈 동그라미 box 하나 
            프로필 밑에 지갑 주소 보여줌; 지갑 연결 상태 
            nft 이미지 담을 div; sell 버튼 달기 */}



        </div>
    ); 
}

export default Mypage; 