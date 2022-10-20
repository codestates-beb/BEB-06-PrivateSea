import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="search_box">
      <Link to="/">
        <div className="nav_logo">logo</div>
      </Link>
      <input
        className="search_bar"
        type="text"
        placeholder="Search items, collections, and accounts"
      ></input>
      <div className="nav_button">search</div>
      <Link to="/explore">
        <div className="nav_button">Explore</div>
      </Link>
      <Link to="/create">
        <div className="nav_button">Create</div>
      </Link>
      <Link to="/mypage">
        <div className="nav_button">Mypage</div>
      </Link>

      <div
        className="nav_button"
        onClick={() => {
          props.connectWallet();
        }}
      >
        Wallet
      </div>
    </div>
  );
}

export default Nav;
