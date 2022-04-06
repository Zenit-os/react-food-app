import React from "react";
import bannerIMG from "../img/banner.png";
import Logo from "./Logo";

function Banner({ handleScrollMenu }) {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Smacznie, zdrowo i szybko</h1>
          <p>Tworzymy oryginalne potrawy dzięki własnym przepisom</p>
          <button onClick={handleScrollMenu}>
            Zobacz menu <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
      <img src={bannerIMG} alt="banner" className="header-img" />
    </header>
  );
}

export default Banner;
