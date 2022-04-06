import React from "react";
import { Link } from "react-router-dom";
import logoIMG from "../img/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <Link to="/">
          <img src={logoIMG} alt="logo" />
          <span>Taste</span>
        </Link>
      </div>
      <p>Restaurant & BBQ</p>
    </div>
  );
};

export default Logo;
