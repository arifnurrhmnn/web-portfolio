import React from "react";
import Swiper from "../../public/js/swiper-bundle.min.js";
import {
  UilArrowRight,
  UilAngleRight,
  UilAngleLeft,
} from "@iconscout/react-unicons";

export default function Portfolio() {
  const swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="portfolio__container container swiper-container">
          <div className="swiper-wrapper">
            {/* Portfolio 1 */}
            <div className="portfolio__content grid swiper-slide">
              <img src="/img/portfolio.png" alt="" className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Online Shop Website</h3>
                <p className="portfolio__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* Portfolio 2 */}
            <div className="portfolio__content grid swiper-slide">
              <img src="/img/portfolio.png" alt="" className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Portfolio Website</h3>
                <p className="portfolio__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* Portfolio 3 */}
            <div className="portfolio__content grid swiper-slide">
              <img src="/img/portfolio.png" alt="" className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Wordpress Website</h3>
                <p className="portfolio__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <UilArrowRight className="button__icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-button-next">
            <UilAngleRight className="swiper-portfolio-icon" />
          </div>
          <div className="swiper-button-prev">
            <UilAngleLeft className="swiper-portfolio-icon" />
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
  );
}
