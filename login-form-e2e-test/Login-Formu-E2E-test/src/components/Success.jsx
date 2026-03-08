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
      <Link to="/login" className="btn btn-outline-primary mt-5">
        Tekrar Giriş Yap
      </Link>
    </div>
  );
};

export default Success;
