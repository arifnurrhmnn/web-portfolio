import React from "react";
import {
  UilFacebookF,
  UilInstagram,
  UilTwitter,
} from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">ARIF</h1>
              <span className="footer__subtitle">Junior Web Developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              <a href="#" target="_blank" className="footer__social">
                <UilFacebookF />
              </a>
              <a href="#" target="_blank" className="footer__social">
                <UilInstagram />
              </a>
              <a href="#" target="_blank" className="footer__social">
                <UilTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
