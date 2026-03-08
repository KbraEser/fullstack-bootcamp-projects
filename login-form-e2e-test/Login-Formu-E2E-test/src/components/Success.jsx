import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="text-center py-5" data-cy="success-page">
      <h1 data-cy="success-title">Giriş Başarılı</h1>
      <p className="text-muted">Başarıyla giriş yaptınız.</p>
      <Link to="/login" className="btn btn-outline-primary">
        Tekrar Giriş Yap
      </Link>
    </div>
  );
};

export default Success;
