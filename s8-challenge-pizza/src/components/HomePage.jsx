import React from "react";
import "../css/HomePage.css";
import Header from "./Header";
import MenuSectionHeader from "./MenuSectionHeader";
import FoodTypesOrder from "./FoodTypesOrder";
import MenuSection from "./MenuSection";
import FoodSection from "./FoodSection";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <MenuSectionHeader />
      <div className="main-container">
        <div className="order-area">
          <FoodTypesOrder />
          <MenuSection />
          <FoodSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
