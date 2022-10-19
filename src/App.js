import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import axios from "axios";

function App() {
  //get 요청을 한다.
  //값을 받아온다. => url
  const [searchValue, setSearchValue] = useState(undefined);
  const [nftUrl, setNftUrl] = useState("");

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
      <Nav value={searchValue} onChange={handleSearch} />
    </div>
  );
}

export default App;
