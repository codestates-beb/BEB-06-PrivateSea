import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
      <footer className="footer">
        
        <div className="footer_div" >
        <div className="footer_h1" >Foolish Developer</div>
          <div className="footer_text" >Join the community</div>
          <i className="footer_icon" >
            <FontAwesomeIcon icon={faHouseUser}  />
          </i>
          <i className="footer_icon" >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </i>
          <i className="footer_icon" >
            <FontAwesomeIcon icon={faSquareGithub}  />
          </i>
        </div>

        <div className="footer_div" style={{ fontSize: "12px"}}  >
          <div style={{  marginLeft: "200px" }}>
            <div>The world’s first and largest digital marketplace for crypto</div>
            <div>collectibles and non-fungible tokens (NFTs). Buy, sell, and discover</div>
            <div>exclusive digital items.</div>
          </div> 
        </div> 

      </footer>
  );
}

export default Footer;
