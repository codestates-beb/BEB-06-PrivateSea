import React from "react";

function Nav(props) {
  return (
    <div className="search_box" >
      <input  className="search_bar" type="text" placeholder="search"  ></input>
      <div className="nav_button" >search</div>
      <div className="nav_button" >Explore</div>
      <div className="nav_button" >Create</div>
      <div className="nav_button" >Mypage</div>
      <div className="nav_button" onClick={() => {props.connectWallet() }} >Wallet</div>
    </div>
  );
}

export default Nav;
