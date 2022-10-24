import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Web3 from "web3";
import Nav from "./Nav";
import Slider from "./common/Carousel";
import Explore from "./page/Explore";
import Mypage from "./page/Mypage";
import Create from "./page/Create";
import Search from "./page/Search";
import Footer from "./page/Footer";

function Main() {
  const [secsion, setSecsion] = useState("main");
  const [searchValue, setSearchValue] = useState(undefined);
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");
  const [nftsInfo, setNftsInfo] = useState(undefined); //[{name,url,owner,theme,price,tokenid},{},{}]
  const [theme, setTheme] = useState(undefined);
  const [detail, setDetail] = useState(false);
  //dummy data
  const [allNfts, setAllNfts] = useState([
    {
      _id: "4567",
      owner: "by Hazel",
      url: "https://i.pinimg.com/564x/dd/a1/db/dda1dbe5970aaa08839cac4f7ce6dcae.jpg",
      name: "Gorila",
      price: "9ETH",
    },
    {
      _id: "1234",
      owner: "by Hazel",
      url: "https://i.pinimg.com/564x/a4/13/97/a41397f4bb6a4e6d4fab08034333974e.jpg",
      name: "Sheep",
      price: "10ETH",
    },
  ]);
  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };

  function handleDetail(status) {
    setDetail(status);
  }

  //nav bar button 클릭 시, 실행되는 function
  function handlePageChange(e) {
    console.log(e.currentTarget.getAttribute("value"));
    setSecsion(e.currentTarget.getAttribute("value"));
    setTheme(undefined);
    setDetail(false);
    //detail을 false로 바꿔야됨
  }

  // search click function
  async function handleSearch(e) {
    console.log(e.currentTarget.getAttribute("value"));
    setSecsion(e.currentTarget.getAttribute("value"));
    setTheme(undefined);
    setDetail(false);

    setSearchValue(e.target.value);
    try {
      await axios
        .get(`http://localhost:8080/search?value=${searchValue}`)
        .then((result) => {
          // {data: [{},{},{},{}]}
          //들어오는 result.data를 for문으로 돌면서 각각의 nft정보를 useState에 넣어둠.
          //그 state 값 Nav 로 props 시켜주기
          let nfts = [];
          const data = result.data.result;
          for (let i = 0; i < data.length; i++) {
            nfts.push(data[i]);
          }

          setNftsInfo(nfts);
          console.log(`nft data들 가져왔다 ${result.data.result}`);
        });
    } catch (err) {
      console.log(err);
    }
  }

  // get all nft function
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

  //첫 화면 렌더 마다 모든 Nft list 가져오기
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

  //state 변경 함수 . Explore.js 에서 theme 변경해주기 위한 function
  function changeSetTheme(change) {
    setTheme(change);
  }

  function handleBuy() {
    //Todo
    //buy click 시 metamask 와 smartcontract 연결되어 구입.
    return alert("Do you want to buy?");
  }

  return (
    <div>
      {/*====== nav bar ======*/}
      <Nav
        value={searchValue}
        onChange={handleSearch}
        connectWallet={connectWallet}
        nftsInfo={nftsInfo}
        handlePageChange={handlePageChange}
        handleSearch={handleSearch}
      />
      <secsion className="section">
        {/*  ====== main page ======*/}
        {secsion === "main" && (
          <div>
            <h1>Explore, collect, and sell NFTs</h1>
            <Slider allNfts={allNfts} /> Todo
          </div>
        )}

        {/*====== explore page ======*/}
        {secsion === "explore" && (
          <Explore
            allNfts={allNfts}
            theme={theme}
            changeSetTheme={changeSetTheme}
            detail={detail}
            handleDetail={handleDetail}
            handleBuy={handleBuy}
          />
        )}

        {/*====== create page ======*/}
        {secsion === "create" && <Create />}

        {/*====== mypage page ======*/}
        {secsion === "mypage" && <Mypage />}

        {/*====== after search page ======*/}
        {secsion === "search" && <Search nftsInfo={nftsInfo} />}
      </secsion>

      {/*====== footer ======*/}
      <Footer />
    </div>
  );
}

export default Main;
