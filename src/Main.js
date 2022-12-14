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
import abi from "./abi/erc721abi.json";
import DEALABI from "./abi/dealabi.json";

function Main() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [secsion, setSecsion] = useState("main");
  const [searchValue, setSearchValue] = useState(undefined);
  const [nftsInfo, setNftsInfo] = useState(undefined); //[{name,url,owner,theme,price,tokenid},{},{}]
  const [theme, setTheme] = useState(undefined);
  const [detail, setDetail] = useState(false);
  const [searchTarget, setSearchTarget] = useState("");
  const [contractAddress, seta] = useState(
    "0x5b72fBc272367A453CFe3280e345eeE002F70b75"
  );
  const [contractAddress2, seta2] = useState(
    "0x1775059754ca208da1C0962A4876134A476C4bb5"
  );
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

  const handleBuy = async (e) => {
    let tokenid = e.currentTarget.attributes.value.value;
    let price;
    let owner;

    for ( let i = 0; i < allNfts.length; i++ ) {
      let one = allNfts[i];
      if ( one._id == tokenid) {
        price = String(one.price);
        owner = one.owner;
      }
    }

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const currentBalance = await web3.eth.getBalance(accounts[0])

    if(Number(currentBalance) < Number(web3.utils.toWei(price, "ether"))) { 
      alert('NFT를 구매할 ETH가 부족합니다.')
      return;
    }

    console.log(web3.utils.toWei(price, "ether"));
    const contract = new web3.eth.Contract(DEALABI, contractAddress2);
    await contract.methods.deal(owner, accounts[0], tokenid).send({ 
      from: accounts[0],
      gas: 200000,
      gasPrice: web3.utils.toWei("1.5", "gwei"),
      value:web3.utils.toWei(price, "ether")
    });
  }

  const handleSell = async (e) => {

    const nft = e.currentTarget.attributes.value.value;
    const price = nft.price;
    const tokenid = nft.id;

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(abi, contractAddress);

    await contract.methods
    .listing(tokenid, web3.utils.toWei(price, "ether")) // 0.01eth 
    .send({
      from: accounts[0],
      gas: 200000,
      gasPrice: web3.utils.toWei("1.5", "gwei"),
    });


  }

  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    setIsConnected(true);
  };

  const onLogout = () => {
    setIsConnected(false);
    setWeb3(null);
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

  function handleTarget(e) {
    setSearchTarget(e.target.value);
  }
  // search click function
  async function handleSearch(e) {
    console.log(e.currentTarget.getAttribute("value"));
    setSecsion(e.currentTarget.getAttribute("value"));
    setTheme(undefined);
    setDetail(false);

    try {
      await axios
        .get(`http://localhost:8080/search?value=${searchTarget}`)
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
      const nftData = result.data.result;
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
        handleTarget={handleTarget}
        isConnected={isConnected}
        onLogout={onLogout}
      />

      <div style={{ position: "relative" }}>
        <img
          className="background_img"
          src="https://www.niftygateway.com/static/media/default-banner-bg.d9e5b4c4.jpg"
        />
        <div className="background_text">Explore, collect, and sell NFTs</div>
      </div>

      <div className="section">
        {/*  ====== main page ======*/}
        {secsion === "main" && (
          <div>
            <div className="slider_text"></div>
            <Slider allNfts={allNfts} />

            <Footer /> 
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
        {secsion === "create" && <Create account={account} />}

        {/*====== mypage page ======*/}
        {secsion === "mypage" && <Mypage />}

        {/*====== after search page ======*/}

        {secsion === "search" && (
          <Search nftsInfo={nftsInfo} handleBuy={handleBuy} />
        )}
      </div>


      {/*====== footer ======*/}
      {/* <Footer /> */}

    </div>
  );
}

export default Main;
