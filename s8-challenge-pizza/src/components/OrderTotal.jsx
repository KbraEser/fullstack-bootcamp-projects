import React from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import axios from "axios";
const NOTES_MAX_LENGTH = 500;
const MIN_QUANTITY = 1;
const MAX_QUANTITY = 10;

const OrderTotal = ({
  quantity,
  setQuantity,
  fullName,
  setFullName,
  notes,
  setNotes,
  totalPriceSubMaterials,
  size,
  dough,
  materials,
  onOrderSuccess,
}) => {
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (Number.isNaN(value) || value < MIN_QUANTITY) {
      toast.warning("En az 1 adet seçebilirsiniz.", {
        toastId: "min-quantity",
      });
      setQuantity(MIN_QUANTITY);
      return;
    }
    if (value > MAX_QUANTITY) {
      toast.warning("En fazla 10 adet seçebilirsiniz.", {
        toastId: "max-quantity",
      });
      setQuantity(MAX_QUANTITY);
      return;
    }
    setQuantity(value);
  };

  const handleDecrement = () => {
    setQuantity((prev) => {
      if (prev <= MIN_QUANTITY) {
        toast.warning("En az 1 adet seçebilirsiniz.", {
          toastId: "min-quantity",
        });
        return prev;
      }
      return prev - 1;
    });
  };

  const handleIncrement = () => {
    setQuantity((prev) => {
      if (prev >= MAX_QUANTITY) {
        toast.warning("En fazla 10 adet seçebilirsiniz.", {
          toastId: "max-quantity",
        });
        return prev;
      }
      return prev + 1;
    });
  };
  const total = totalPriceSubMaterials + 85.5 * quantity;

  const data = {
    quantity,
    fullName,
    notes,
    totalPriceSubMaterials,
    size,
    dough,
    materials,
    totalPrice: total,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      quantity === 0 ||
      fullName.trim().length < 3 ||
      notes === "" ||
      size === "" ||
      dough === "" ||
      materials.length === 0
    ) {
      toast.error("İsim en az 3 karakter olmalı ve tüm bilgileri doldurmalısınız.");
      return;
    }
    axios
      .post("https://reqres.in/api/pizza", data, {
        headers: {
          "x-api-key": import.meta.env.VITE_REQRES_API_KEY,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const siparisOzeti = response.data;
        console.log("--- Sipariş özeti ---", siparisOzeti);
        toast.success("Sipariş verildi. Teşekkür ederiz.");
        onOrderSuccess(siparisOzeti);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
      });
  };

  return (
    <div className="mb-5">
      <section aria-label="Müşteri bilgileri ve sipariş notu">
        <label
          htmlFor="fullName"
          className="font-barlow fw-semibold section-title fs-5 mb-3"
        >
          Ad Soyad
        </label>
        <input
          id="fullName"
          type="text"
          className="form-control text-koyu-gri font-barlow fw-normal fs-6 mb-4"
          placeholder="Adınızı ve soyadınızı yazınız"
          autoComplete="name"
          minLength={3}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label
          htmlFor="notes"
          className="font-barlow fw-semibold section-title fs-5 mb-3"
        >
          Sipariş Notu
        </label>
        <textarea
          id="notes"
          className="form-control text-acik-gri font-barlow fw-normal fs-6 p-3 textarea-placeholder-center"
          rows="2"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          maxLength={NOTES_MAX_LENGTH}
          aria-describedby="notes-hint"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <p id="notes-hint" className="small text-acik-gri mt-1 mb-0">
          En fazla {NOTES_MAX_LENGTH} karakter.
        </p>
      </section>
      <hr className="my-5" />
      <section aria-label="Sipariş toplamı" className="mt-5">
        <div className="d-flex justify-content-between align-items-start siparis-wrapper">
          <div className="button-container">
            <Button
              color="warning"
              className="quantity-btn"
              onClick={handleDecrement}
              type="button"
            >
              -
            </Button>
            <input
              type="number"
              className="quantity-value text-koyu-gri fs-6"
              value={quantity}
              min={MIN_QUANTITY}
              max={MAX_QUANTITY}
              onChange={handleQuantityChange}
            />
            <Button
              color="warning"
              className="quantity-btn"
              onClick={handleIncrement}
              type="button"
            >
              +
            </Button>
          </div>
          <div className="total-price  p-5 font-barlow fw-bold md:w-100">
            <h5 className=" fw-semibold section-title fs-5 mb-3">
              {" "}
              Sipariş Toplamı
            </h5>
            <div className="d-flex justify-content-between align-items-center  mb-3 text-acik-gri fs-6">
              <span>Seçimler</span>
              <span>{totalPriceSubMaterials}₺</span>
            </div>
            <div className="d-flex justify-content-between align-items-center text-kirmizi fs-6">
              <span>Toplam</span>
              <span>{total}₺</span>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end siparis-btn-wrapper">
          <Button
            color="warning"
            className="btn-siparis-ver"
            onClick={handleSubmit}
            // onClick={() => navigate("/success")}
            type="button"
          >
            <span className="font-barlow fw-semibold fs-5 ">SİPARİŞ VER</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OrderTotal;
