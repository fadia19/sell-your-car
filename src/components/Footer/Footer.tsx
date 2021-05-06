import React from "react";
import logo from "../../assets/Logo.svg";
import socialMedia from "../../assets/Logos.svg";
import "./Footer.scss";

const Footer = (): JSX.Element => {
  return (
    <div className="Footer">
      <div className="Footer__LeftSection">
        <img alt="Logo" src={logo} />
        <h5>
          Buy new and used cars in UAE, shipping and delivery service are
          available, Sell your car at the highest price online with no worries
          visiting cars show rooms.
        </h5>
      </div>
      <div className="Footer__RightSection">
        <h4>
          Follow the first and the largest online auction in UAE and Middle East
        </h4>
        <img alt="Social Media" src={socialMedia} />
      </div>
    </div>
  );
};

export default Footer;
