import React, { useEffect, useState, Component } from "react";
import "./App.css";
import Slider from "./common/Carousel";
import Explore from "./page/Explore";
import Mypage from "./page/Mypage";
import Create from "./page/Create";
import Nav from "./Nav";
import axios from "axios";
import Web3 from "web3";

function Main() {
  const [secsion, setSecsion] = useState("main");
  const [searchValue, setSearchValue] = useState(undefined);
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");
  const [nftsInfo, setNftsInfo] = useState(undefined); //[{name,url,owner,theme,price,tokenid},{},{}]
  //allNfts => dummy data
  const [allNfts, setAllNfts] = useState([
    {
      url: "https://i.pinimg.com/564x/dd/a1/db/dda1dbe5970aaa08839cac4f7ce6dcae.jpg",
      name: "Gorila",
      price: "9ETH",
    },
  ]);
  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };

  function handlePageChange(e) {
    console.log(e.currentTarget.getAttribute("value"));
    setSecsion(e.currentTarget.getAttribute("value"));
  }

  //사용자 search
  async function handleSearch(e) {
    setSearchValue(e.target.value);
    await axios
      .get(`http://localhost:8080/nft/${searchValue}`)
      .then((result) => {
        // {data: [{},{},{},{}]}
        //들어오는 result.data를 for문으로 돌면서 각각의 nft정보를 useState에 넣어둠.
        //그 state 값 Nav 로 props 시켜주기
        let nfts = [];
        const data = result.data;
        for (let i = 0; i < data.length; i++) {
          nfts.push(data[i]);
        }

        setNftsInfo(nfts);
        console.log(`nft data들 가져왔다 ${result.data}`);
      });
  }

  async function getAllNft() {
    await axios.get("http://localhost:8080/nft").then((result) => {
      let allNft = [];
      const nftData = result.data;
      for (let i = 0; i < nftData.length; i++) {
        allNft.push(nftData[i]);
      }
      setAllNfts(allNft);
    });
  }

  useEffect(() => {
    getAllNft();
  }, []);

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
  }, []);

  return (
    <div>
      <Nav
        value={searchValue}
        onChange={handleSearch}
        connectWallet={connectWallet}
        nftsInfo={nftsInfo}
        handlePageChange={handlePageChange}
      />

      {secsion === "main" && (
        <div>
          {searchValue !== undefined ? (
            <div>
              {nftsInfo.map((nft) => {
                <div>
                  <img src={nft.url} /> {nft.name}
                </div>;
              })}
            </div>
          ) : (
            <div>
              <h1>Explore, collect, and sell NFTs</h1>
              <Slider />
            </div>
          )}
        </div>
      )}

      {secsion === "explore" && <Explore allNfts={allNfts} />}
      {secsion === "create" && <Create />}
      {secsion === "mypage" && <Mypage />}
    </div>
  );
}

export default Main;
