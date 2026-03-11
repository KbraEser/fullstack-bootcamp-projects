import React from "react";
import "../css/MenuSection.css";

const MenuSection = () => {
  return (
    <>
      <div className="explain-section">
        <p className="explain-section-title">en çok paketlenen menüler</p>
        <p className="explain-section-subtitle">
          Acıktıran Kodlara Doyuran Lezzetler
        </p>
      </div>
      <section className="menu-section">
        <nav id="menu-section-pills" className="flex-between">
          <a href="#">
            <img src="../../images/iteration-2-images/icons/1.svg" alt="kore" />
            <span className="menu-text">Ramen</span>
          </a>
          <a href="#">
            <img
              src="../../images/iteration-2-images/icons/2.svg"
              alt="pizza"
            />
            <span className="menu-text">Pizza</span>
          </a>
          <a href="#">
            <img
              src="../../images/iteration-2-images/icons/3.svg"
              alt="burger"
            />
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
    </>
  );
};

export default MenuSection;
