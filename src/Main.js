/* eslint-disable */

import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav";
import axios from "axios";
import Web3 from "web3";

function Main() {
  //get 요청을 한다.
  //값을 받아온다. => url
  const [searchValue, setSearchValue] = useState(undefined);
  const [nftUrl, setNftUrl] = useState("");
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };

  //사용자 search
  //item이름,collections 이름, account address (EOA)
  async function handleSearch(e) {
    setSearchValue(e.target.value);
    await axios
      .get(`http://localhost:8080/nft/${searchValue}`)
      .then((result) => {
        //axios({method:get , url:'/nft/${search}'})
        console.log(result.data);
      });
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
    getUrl();
  }, []);

  //처음에 main 에 뿌려주는 Nft list 를 db에 초기값 셋팅하기 위함
  async function getUrl() {
    await axios
      .post(
        "http://localhost:8080/",
        {
          data: {
            url: "https://i.pinimg.com/564x/2d/e7/94/2de7947450488ea0e334017628368710.jpg",
          },
        },
        { withCredentials: true }
      )
      .then((result) => {
        setNftUrl(result.data);
        console.log(nftUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Nav
        value={searchValue}
        onChange={handleSearch}
        connectWallet={connectWallet}
      />

      {/* 삼항연산자로 밑에 내용들 바뀌게... 
        searchValue가 들어왔을 때
          만약에 tokenid,nftname 들어오면 관련 nft
          만약 collections name 들어오면 관련 collection nft
        searchValue가 안들어오면 그냥 메인화면 보이게
      */}
      <h1>Explore, collect, and sell NFTs</h1>
      <img src="https://i.pinimg.com/564x/61/38/7b/61387bc83dcb60df0f34eb93362bd97a.jpg"></img>
      <img src="https://i.pinimg.com/736x/4e/f2/2b/4ef22b0e3db5b76f52e1b73376d6c301.jpg"></img>
      <img src="https://i.pinimg.com/564x/dd/a1/db/dda1dbe5970aaa08839cac4f7ce6dcae.jpg"></img>
    </div>
  );
}

export default Main;
