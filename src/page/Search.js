import React from "react";

function Search(props) {
  if (props.nftsInfo !== undefined) {
    return (
      <div>
        {props.nftsInfo.map((nft) => (
          <div>
            <h1>{nft.name}</h1>
            <img src={nft.url} value={nft.tokenid} />
            <p>{nft.name}</p>
            <p>{nft.price}</p>
            <button onClick={props.handleBuy}>buy</button>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Search;
