import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-content">
      <footer className="footer">
        <h3>Foolish Developer</h3>

        <p>Join the community</p>
        <i>
          <FontAwesomeIcon icon={faHouseUser} size="2px" />
        </i>
        <i>
          <FontAwesomeIcon icon={faSquareFacebook} size="2px" />
        </i>
        <i>
          <FontAwesomeIcon icon={faSquareGithub} size="2px" />
        </i>
        <p>
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
