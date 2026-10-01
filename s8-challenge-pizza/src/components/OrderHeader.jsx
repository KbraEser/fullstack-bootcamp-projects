import React from "react";
import { Link } from "react-router-dom";

const OrderHeader = () => {
  return (
    <>
      <header>
        <h1 className="bg-background order-header-container d-flex flex-column justify-content-center align-items-center mb-0">
          <img src="../../images/iteration-1-images/logo.svg" alt="logo" />
        </h1>
      </header>
      <div className=" bg-bej">
        <div className="d-flex justify-content-center align-items-center  w-100">
          <img
            src="../../images/iteration-2-images/pictures/form-banner.png"
            alt="order-header-bg"
            className="banner-img"
          />
        </div>
        <div className="order-container mx-auto mt-2 ">
          <Link to="/" className="text-decoration-none text-koyu-gri ">
            Anasayfa-
          </Link>

          <Link to="/order" className="text-decoration-none text-kirmizi">
            Sipariş Oluştur
          </Link>

          <h3 className="header-title font-barlow fw-bold fs-4">
            Position Absolute Acı Pizza
          </h3>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-3">85.50₺</span>
            <div className="d-flex gap-5">
              <span className="fw-normal text-acik-gri">4.9</span>
              <span className="fw-normal text-acik-gri">(200)</span>
            </div>
          </div>

          <p className="text-acik-gri font-barlow fw-normal w-100 mb-5 pb-5">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderHeader;
