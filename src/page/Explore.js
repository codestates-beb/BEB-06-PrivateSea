import axios from "axios";
import { React, useState } from "react";
import Detail from "./Detail";

function Explore(props) {
  //theme 별 nft와 그 정보들이 nftInfo에 저장.
  const [nftInfo, setNftInfo] = useState([
    {
      _id: "1234",
      owner: "by Hazel",
      url: "https://i.pinimg.com/564x/a4/13/97/a41397f4bb6a4e6d4fab08034333974e.jpg",
      name: "Sheep",
      price: "10ETH",
    },
  ]);

  //nft image 클릭 시, _id값 저장
  const [clickedNft, setClickedNft] = useState(0);

  // props.allNfts 를 detail로 넘겨주기 위한 state
  const [allNftsforDetail, setAllnftsforDetail] = useState(props.allNfts);

  //theme value 서버로 보내서, theme에 따라 관련 정보들 받아오는 function
  const getThemeNft = (e) => {
    console.log(e.target.value);

    props.changeSetTheme(e.target.value);

    props.handleDetail(false);
    //theme 별로 요청 ....
    //모든 nft 가져와서 여기서 filter 하기에는 느려질 것 같다는 생각 함.
    // nft/:theme
    //theme 보내면 안옴
    axios
      .get(`http://localhost:8080/nft/${props.theme}`)
      .then((result) => {
        const nfts = [];
        const data = result.data.result;
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          nfts.push(data[i]);
        }
        setNftInfo(nfts);
        console.log(nftInfo);
      })
      .catch((error) => {
        console.log(error);
      });
    //like this.. nftInfo = {data:[{},{},{}...]}
  };

  //imgage 클릭시, nft detail page로 이동
  function handleImageClick(e) {
    const id = e.currentTarget.getAttribute("value");
    setClickedNft(id);
    props.handleDetail(true);
    console.log(id);
  }

  return (
    <div>
      <button onClick={getThemeNft} value="trending">
        {" "}
        trending{" "}
      </button>
      <button onClick={getThemeNft} value="art">
        {" "}
        art{" "}
      </button>
      <button onClick={getThemeNft} value="sport">
        {" "}
        sport{" "}
      </button>
      <button onClick={getThemeNft} value="photography">
        {" "}
        photography{" "}
      </button>

      {/* 사진을 안눌렀으면 그냥 모든 nft list
     사진 눌렀으면 detail component로
     theme button 누르면 관련 nft들 사진으로 filter
 */}

      {!props.detail ? (
        props.theme === undefined ? (
          <div>
            {props.allNfts.map((a) => {
              return (
                <div>
                  <img
                    alt="nft"
                    src={a.url}
                    value={a.tokenid}
                    onClick={handleImageClick}
                  ></img>

                  <div>{a.name}</div>
                  <div>{a.price}</div>
                  <button onClick={props.handleBuy}>buy</button>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {nftInfo.map((nft) => {
              return (
                <div>
                  <img
                    alt="Theme nft"
                    src={nft.url}
                    value={nft.tokenid}
                    onClick={handleImageClick}
                  ></img>
                  <div>{nft.name}</div>
                  <div>{nft.price}</div>
                  <button onClick={props.handleBuy}>buy</button>
                </div>
              );
            })}
          </div>
        )
      ) : (
        <Detail
          clickedNft={clickedNft}
          allNftsforDetail={allNftsforDetail}
          nftInfo={nftInfo}
          handleBuy={props.handleBuy}
        />
      )}
    </div>
  );
}

export default Explore;
