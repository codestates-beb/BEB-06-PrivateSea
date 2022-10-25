import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="search_box">
      <div className="nav_bar" >
        <div className="nav_logo" value="main" onClick={props.handlePageChange}>
          P
        </div>

        <input
          className="search_bar"
          type="text"
          placeholder="Search items, collections, and accounts"
          onChange={props.handleTarget}
        ></input>
        <div className="search_button" value="search" onClick={props.handleSearch}>
          
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
          className={"nav_button wallet" + ( props.isConnected ? " on" : ""  ) }
          onClick={() => {
            props.connectWallet();
          }}
        >
          <img style={{ marginTop :"6px" }} alt="Metamask Icon" src="https://media.niftygateway.com/image/upload/v1646231999/AA/metamask-alternative_1_dvrill.svg" height="18" width="20"></img>
        </div>

        {props.isConnected && (
          <div
            className="nav_button"
            value="mypage"
            onClick={props.onLogout}
          >
            logOut
          </div>
        )}

      </div>
    </div>
  );
}

export default Nav;
