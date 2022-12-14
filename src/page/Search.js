import React from "react";
import "../App.css";

function Search(props) {
  if (props.nftsInfo !== undefined) {
    return (
      <div className="searchBox">
        <div className="search_length" >{props.nftsInfo.length} items</div>
        {props.nftsInfo.map((nft) => (
          <div className="explore_img_box search">
            <div className="overflow_box"> <img className="explore_img" src={nft.url} value={nft.tokenid} /></div>
            <div className="search_name" >{nft.name}</div>
            <div className="search_price">{nft.price}</div>
            <div  className="explore_button" value = {nft._id}  onClick={props.handleBuy}>buy</div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Search;
