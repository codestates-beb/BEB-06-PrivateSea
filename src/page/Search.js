import React from "react";
import "../App.css";

function Search(props) {
  if (props.nftsInfo !== undefined) {
    return (
      <div className="searchBox">
        <p>{props.nftsInfo.length} items</p>
        {props.nftsInfo.map((nft) => (
          <div className="searchNft">
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
