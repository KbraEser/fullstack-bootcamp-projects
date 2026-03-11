import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className="home-page flex-column">
      <img
        src="../../images/iteration-1-images/logo.svg"
        alt="logo"
        className="home-page-logo"
      />
      <img
        className="home-bg-mobile"
        src="../../images/iteration-2-images/pictures/form-banner.png"
        alt="Pizza ve lezzet görseli"
      />
      <div className="home-page-content">
        <p>fırsatı kaçırma</p>
        <p>KOD ACIKTIRIR </p>
        <p> PIZZA, DOYURUR</p>
        <button className="home-page-btn" type="button">
          <Link to="/order" className="text-black text-decoration-none">
            ACIKTIM
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Header;
