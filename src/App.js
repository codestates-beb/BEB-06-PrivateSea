import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import axios from "axios";
import Web3 from 'web3';

function App() {
  //get 요청을 한다.
  //값을 받아온다. => url
  const [searchValue, setSearchValue] = useState(undefined);
  const [nftUrl, setNftUrl] = useState("");
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };

  //search
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
    if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
      try {
          const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
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
        { data: { url: "https://pin.it/1MaWAk8" } },
        { withCredentials: true }
      )
      .then((result) => {
        setNftUrl(result.data);
        console.log(nftUrl);
      });
  }

  return (
    <div>
      <Nav value={searchValue} onChange={handleSearch} connectWallet={connectWallet} />
    </div>
  );
}

export default App;
