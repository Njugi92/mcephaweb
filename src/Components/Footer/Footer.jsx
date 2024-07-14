import React from "react";
import "./Footer.css";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} Mcepha & ASSOCIATES. All rights
        reserved.
      </p>
      <ul>
        <li>
          <Linkedin style={{ cursor: "pointer" }} />
        </li>
        <li>
          <Facebook style={{ cursor: "pointer" }} />
        </li>
        <li>Terms of services</li>
        <li>Privacy policy</li>
      </ul>
    </div>
  );
};

export default Footer;
