import React from "react";
import { FaTwitter } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content typography-text">
          <div className="footer-content-container flex-between">
            <div className="footer-content-left">
              <div className="address flex-between">
                <div>
                  <img
                    src="../../images/iteration-2-images/footer/logo-footer.svg"
                    alt="logo"
                    className="logo"
                  />
                  <ul>
                    <li>
                      <img
                        src="../../images/iteration-2-images/footer/icons/icon-1.png"
                        alt="location"
                      />
                      <p>341 Londonderry Road, Istanbul Türkiye</p>
                    </li>
                    <li>
                      <img
                        src="../../images/iteration-2-images/footer/icons/icon-2.png"
                        alt="mail"
                      />
                      <p>aciktim@teknolojikyemekler.com</p>
                    </li>
                    <li>
                      <img
                        src="../../images/iteration-2-images/footer/icons/icon-3.png"
                        alt="phone"
                      />
                      <p>+90 216 123 45 67</p>
                    </li>
                  </ul>
                </div>
                <div className="menu flex-column">
                  <p className="menu-title">Hot Menu</p>

                  <p>Terminal Pizza</p>
                  <p>5 Kişilik Hackathlon Pizza</p>
                  <p>useEffect Tavuklu Pizza</p>
                  <p>Beyaz Console Frosty</p>
                  <p>Testler Geçti Mutlu Burger</p>
                  <p>Position Absolute Acı Burger</p>
                </div>
              </div>
            </div>
            <div className="footer-content-right">
              <p className="menu-title">Instagram</p>
              <div className="instagram-content">
                <img
                  src="../../images/iteration-2-images/footer/insta/li-0.png"
                  alt="instagram"
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-1.png"
                  alt="instagram"
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-2.png"
                  alt="instagram"
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-3.png"
                  alt="instagram"
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-4.png"
                  alt="instagram"
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-5.png"
                  alt="instagram"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>© 2023 Teknolojik Yemekler. </p>
            <a href="#" className="footer-bottom-twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
