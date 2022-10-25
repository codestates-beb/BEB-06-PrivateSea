/* eslint-disable */

import { React, useState, useEffect } from "react";
import axios from "axios";
import Detail from "./Detail";
import Web3 from "web3";

function Mypage() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    // 컴포넌트가 처음 마운트 되었을 때, web3 객체에 연결
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

  const connectWallect = async () => {
    let account = await window.ethereum.request({
      // 메타마스크 연결된 계정 정보를 받는 JSON_RPC call API
      method: "eth_requestAccounts",
    });

    setAccount(account[0]);
  };

  async function onLoadData() {
    const [data, setData] = useState([]);

    await axios
      .get(
        "https://testnets-api.opensea.io/api/v1/assets?owner=0xEcd5c913FC8B656dbfe0f2d902E1b0902de025aA&order_direction=desc&offset=0&limit=20&include_orders=false%27"
      )
      .then((response) => {
        let data = response.data.assets;
        setData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  // const collection = await fetch(
  //     `${account}`, options,
  // )

  return (
    <div>
      <div className="main_text"> My page </div>
      <button
        className="metaConnect"
        onClick={() => {
          onLoadData();
        }}
      >
        {" "}
        connect To MetamMask
      </button>

      <div> 나의 nft </div>
      <div></div>
    </div>
  );
}

export default Mypage;
