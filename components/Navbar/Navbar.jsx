import React, { useState } from "react";
import Link from "next/link";
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilTimes,
  UilApps,
} from "@iconscout/react-unicons";

export default function Navbar() {
  const [show, setShow] = useState();

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            ARIF
          </a>

          <div className={`nav__menu ${show ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list grid" onClick={() => setShow(false)}>
              <li className="nav__item">
                <Link href="/">
                  <a className="nav__link">
                    <UilEstate className="nav__icon" />
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/about">
                  <a className="nav__link">
                    <UilUser className="nav__icon" />
                    About
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/portfolio">
                  <a className="nav__link">
                    <UilFileAlt className="nav__icon" />
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/contact">
                  <a className="nav__link">
                    <UilBriefcaseAlt className="nav__icon" />
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <UilTimes
              className="nav__close"
              onClick={() => setShow(false)}
              id="nav-close"
            />
          </div>

          <div className="nav__btns">
            <div
              className="nav__toggle"
              onClick={() => setShow(true)}
              id="nav-toggle"
            >
              <UilApps />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
