import axios from "axios";
import { application } from "express";
import { React, useState } from "react";
import Nav from "../Nav";

/**

처음에는 trendingNFT 화면 보여주다가 

<Art />, <Sport />, <Photo /> 불려오는 걸로 
각 테마별로 컴포넌트 만들면 

const [art, setArt] = useState(); <- Detail.js에서 재사용 가능하지 않을까?

art.map((a, i) => {
  return 
    <ArtNft art = { art[i]} i={i+1} /> 
    // 각 테마별 nft들이 보여지지 않을까? 데이터는 어떻게 불려올지 모르겠다 
})


 */



function Explore() {

  const [nft, setNft] = useState(undefined); 
  // 각 테마별 useState 만들어서 -> 버튼 클릭하면 입력값 해당테마 nft가 되도록

  const [art, setArt] = useState(0);
  const [sport, setSport] = useState(0);


// 같은 동작, 카테고리만 다름-> 카테고리를 params
// 

  const getArtNFT = function(){
    // axios.get 하면 DB에서 관련 NFT 가져오도록 
    axios
      .get("http://localhost:8080/nft/art/:id") // -> :id 추가해서, 개별 nft 보이도록 
      .then((result) => {
        console.log();
        console.log();
        setNft(result.data)
      });
  }

  const getTrendingNFT = function(){
    // axios.get 하면 DB에서 관련 NFT 가져오도록 
    axios
      .get("http://localhost:8080/nft/trending")
      .then((result) => {
        console.log();
        console.log();
        setNft(result.data)
      });
  }

  const getSportNFT = function(){
    // axios.get 하면 DB에서 관련 NFT 가져오도록 
    axios
      .get("http://localhost:8080/nft/sport")
      .then((result) => {
        console.log();
        setNft(result.data)
      });
  }

  const getPhotoNFT = function(){
    // axios.get 하면 DB에서 관련 NFT 가져오도록 
    axios
      .get("http://localhost:8080/nft/photo")
      .then((result) => {
        console.log();
        setNft(result.data)
      });
  }

  return (

    
    // 각 테마별  서버 연결
    // 각 테마별 버튼 총 4개 만들기: 버튼 누르면 -> 해당 테마 페이지로 이동 

    

    <div>
      <Nav />
      <button onClick={getArtnft}> art </button> 
      <button onClick={()=>{}}> trending </button>

      Explore Page
    </div>
  );
}

export default Explore;
