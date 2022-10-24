import React from "react";

//props.allNfts 애들을 filter 처리로 _id 가  clickedNft 인 애들만 남게하고 map 처리
//owner, name, price, url, buy
function Detail(props) {
  const id = props.clickedNft;
  return (
    <div>
      detail page
      {props.allNftsforDetail
        .filter((a) => a.tokenid == id)
        .map((i, a) => {
          return (
            <div key={a}>
              <img src={i.url} />
              <p>{i.owner}</p>
              <p>{i.name}</p>
              <p>{i.price}</p>
              <button onClick={props.handleBuy}>buy</button>
            </div>
          );
        })}
    </div>
  );
}

export default Detail;
