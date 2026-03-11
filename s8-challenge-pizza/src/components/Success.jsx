import React from "react";
import logo from "../../images/iteration-1-images/logo.svg";
import "../css/success.css";
import Footer from "./Footer";
import { SUP_MATERIALS } from "./OrderSupMaterial";
const Success = ({ orderData }) => {
  console.log("--- Sipariş özeti ---", orderData);
  const { size, dough, materials, totalPriceSubMaterials, totalPrice } =
    orderData;
  return (
    <>
      <article className="success-page bg-background pb-5">
        <section
          className="d-flex flex-column justify-content-center align-items-center"
          aria-label="Success Message"
        >
          <img src={logo} alt="logo" className="m-5 " />
          <p className="text-sari font-satisfy fs-1">lezzetin yolda</p>
          <h1 className="font-roboto-condensed  text-white mb-5 success-title">
            SİPARİŞ ALINDI
          </h1>
          <hr className="my-3 w-50 success-divider" />
        </section>
        <section
          className="d-flex flex-column justify-content-center align-items-center"
          aria-label="Success Details"
        >
          <h3 className="text-white font-barlow fw-semibold fs-4 mt-4">
            Position Absolute Acı Pizza
          </h3>
          <div className="detail-wrapper d-flex flex-column justify-content-center align-items-start mt-4 text-white font-barlow fw-normal fs-6">
            <p>
              Boyut: <span className="fw-bold">{size}</span>
            </p>
            <p>
              Hamur: <span className="fw-bold">{dough}</span>
            </p>
            <p>
              Ek Malzemeler:{" "}
              <span className="fw-bold">
                {materials
                  .map(
                    (materialId) =>
                      SUP_MATERIALS.find((m) => m.id === materialId).name,
                  )
                  .join(", ")}
              </span>
            </p>
          </div>
        </section>
        <section className="d-flex flex-column justify-content-center align-items-center mt-4 success-total-price pb-5">
          <div className="total-price  p-5 font-barlow fw-bold sm:w-50 text-white rounded-2 ">
            <h5 className=" fw-semibold section-title fs-5 mb-4">
              {" "}
              Sipariş Toplamı
            </h5>
            <div className="d-flex justify-content-between align-items-center  mb-3  fs-6">
              <span>Seçimler</span>
              <span>{totalPriceSubMaterials}₺</span>
            </div>
            <div className="d-flex justify-content-between align-items-center fs-6">
              <span>Toplam</span>
              <span>{totalPrice}₺</span>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Success;
