import React from "react";

function Search(props) {
  if (props.nftsInfo !== undefined) {
    return (
      <div>
        search Page
        {props.nftsInfo.map((nft) => (
          <div>
            <h1>{nft.name}</h1>
            <img src={nft.url} value={nft._id} />
            <p>{nft.name}</p>
            <p>{nft.price}</p>
            <button>buy</button>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Search;
