import axios from "axios";
import { React, useState, useEffect } from "react";
import Nav from "../Nav";

function Explore(props) {
  const [theme, setTheme] = useState(undefined);
  // 각 theme이름이 state로 들어옴
  const [nftInfo, setNftInfo] = useState([
    {
      url: "https://i.pinimg.com/564x/a4/13/97/a41397f4bb6a4e6d4fab08034333974e.jpg",
      name: "Sheep",
      price: "10ETH",
    },
  ]);
  //[{},{},{}...]
  //예시로  초기 state 값 넣어둠.

  //useEffect 로 theme  => undefined 값으로 변경

  useEffect(() => {
    setTheme(undefined);
  }, []);

  async function getThemeNft(e) {
    console.log(e.target.value);
    setTheme(e);
    //theme 별로 요청 ....
    //모든 nft 가져와서 여기서 filter 하기에는 느려질 것 같다는 생각 함.
    await axios
      .get(`http://localhost:8080/nft/${theme}`)
      .then((result) => {
        const nfts = [];
        const data = result.data;
        for (let i = 0; i < data.length; i++) {
          nfts.push(data[i]);
        }
        setNftInfo(nfts);
      })
      .catch((error) => {
        console.log(error);
      });
    //like this.. nftInfo = {data:[{},{},{}...]}
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

      {/* ==== 첫 Explore page ===== */}
      {theme === undefined && (
        <div>
          {props.allNfts.map((a) => {
            return (
              <div>
                <img src={a.url}></img>
                <div>{a.name}</div>
                <div>{a.price}</div>
                <button>buy</button>
              </div>
            );
          })}
        </div>
      )}

      {/* ==== 테마별 Explore page ==== */}
      {theme !== undefined && (
        <div>
          {nftInfo.map((nft) => {
            return (
              <div>
                <img src={nft.url}></img>
                <div>{nft.name}</div>
                <div>{nft.price}</div>
                <button>buy</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Explore;
