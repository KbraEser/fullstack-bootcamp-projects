import React from "react";
import "../css/MenuSection.css";

const MenuSectionHeader = () => {
  return (
    <section className="menu-section">
      <nav className="flex-between">
        <a href="#">
          <img src="../../images/iteration-2-images/icons/1.svg" alt="kore" />
          <span className="menu-text">YENİ! Kore</span>
        </a>
        <a href="#">
          <img src="../../images/iteration-2-images/icons/2.svg" alt="pizza" />
          <span className="menu-text">Pizza</span>
        </a>
        <a href="#">
          <img src="../../images/iteration-2-images/icons/3.svg" alt="burger" />
          <span className="menu-text">Burger</span>
        </a>
        <a href="#">
          <img
            src="../../images/iteration-2-images/icons/4.svg"
            alt="kızartmalar"
          />
          <span className="menu-text">Kızartmalar</span>
        </a>
        <a href="#">
          <img
            src="../../images/iteration-2-images/icons/5.svg"
            alt="fast food"
          />
          <span className="menu-text">Fast food</span>
        </a>
        <a href="#">
          <img
            src="../../images/iteration-2-images/icons/6.svg"
            alt="gazlı içecek"
          />
          <span className="menu-text">Gazlı İçecek</span>
        </a>
      </nav>
    </section>
  );
};

export default MenuSectionHeader;
