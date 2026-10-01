import React from "react";
import "../css/FoodTypesOrder.css";
import { Link } from "react-router-dom";
const FoodTypesOrder = () => {
  return (
    <section className="order-area-content">
      <div className="order-area-content-pizza">
        <img
          src="../../images/iteration-2-images/cta/kart-1.png"
          alt="pizza"
          className="pizza-img"
        />
        <div className="pizza-content flex-column">
          <h2>Özel Lezzetus</h2>
          <p>Position:Absolute Acı Burger</p>
          <button className="order-btn">
            <Link to="/order" className="text-kirmizi text-decoration-none">
              SİPARİŞ VER
            </Link>
          </button>
        </div>
      </div>
      <div className="order-area-content-items flex-column">
        <div className="order-area-content-items-burger">
          <img
            src="../../images/iteration-2-images/cta/kart-2.png"
            alt="burger"
            className="burger-img"
          />
          <div className="burger-content flex-column">
            <h3>Hackathlon Burger Menu</h3>
            <button className="order-btn">
              <Link to="/order" className="text-kirmizi text-decoration-none">
                SİPARİŞ VER
              </Link>
            </button>
          </div>
        </div>
        <div className="order-area-content-items-carriers">
          <img
            src="../../images/iteration-2-images/cta/kart-3.png"
            alt="carriers"
            className="carriers-img"
          />
          <div className="carriers-content flex-column">
            <h3>
              <span>Çoooook</span> hızlı npm gibi kurye
            </h3>
            <button className="order-btn">
              <Link to="/order" className="text-kirmizi text-decoration-none">
                SİPARİŞ VER
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodTypesOrder;
