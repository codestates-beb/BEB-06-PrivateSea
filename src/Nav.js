import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="search_box">
      <div className="nav_logo" value="main" onClick={props.handlePageChange}>
        Private sea
      </div>

      <input
        className="search_bar"
        type="text"
        placeholder="Search items, collections, and accounts"
      ></input>
      <div className="nav_button" value="search" onClick={props.handleSearch}>
        search
      </div>

      <div
        className="nav_button"
        value="explore"
        onClick={props.handlePageChange}
      >
        Explore
      </div>

      <div
        className="nav_button"
        value="create"
        onClick={props.handlePageChange}
      >
        Create
      </div>

      <div
        className="nav_button"
        value="mypage"
        onClick={props.handlePageChange}
      >
        Mypage
      </div>

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
