import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100 px-3"
      data-cy="success-page"
    >
      <h1 data-cy="success-title">Giriş Başarılı</h1>
      <p className="text-white mt-3">Başarıyla giriş yaptınız.</p>
      <Link to="/" className="btn btn-outline-primary mt-5">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default Success;
