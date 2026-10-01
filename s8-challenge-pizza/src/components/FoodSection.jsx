import React from "react";
import "../css/FoodSection.css";

const FoodSection = () => {
  return (
    <section className="food-section flex-between">
      <div className="food-item">
        <div className="food-item-area">
          <img
            src="../../images/iteration-2-images/pictures/food-1.png"
            alt="Terminal Pizza"
          />
          <div className="explain">
            <p>Terminal Pizza</p>
            <div className="rating flex-between">
              <p>4.9</p>

              <div className="price flex-between">
                <p>(200)</p>
                <p className="bold">60₺</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-item">
        <div className="food-item-area">
          <img
            src="../../images/iteration-2-images/pictures/food-2.png"
            alt="Position Absolute Acı Pizza"
          />
          <div className="explain">
            <p>Position Absolute Acı Pizza</p>

            <div className="rating flex-between">
              <p>4.9</p>

              <div className="price flex-between">
                <p>(200)</p>
                <p className="bold">60₺</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-item">
        <div className="food-item-area">
          <img
            src="../../images/iteration-2-images/pictures/food-3.png"
            alt="useEffect Tavuklu Burger"
          />
          <div className="explain">
            <p>useEffect Tavuklu Burger</p>
            <div className="rating flex-between">
              <p>4.9</p>
              <div className="price flex-between">
                <p>(200)</p>
                <p className="bold">60₺</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
