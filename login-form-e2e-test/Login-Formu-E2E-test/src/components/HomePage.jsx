import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="home-nav">
        <ul className="d-flex justify-content-center align-items-center gap-4 list-unstyled mb-0">
          <li>
            <Link to="/" className="nav-link-custom">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link-custom">
              Giriş Yap
            </Link>
          </li>
        </ul>
      </nav>

      <main className="home-main">
        <h1 className="home-title">Hoş Geldiniz</h1>
      </main>
    </div>
  );
};

export default HomePage;
