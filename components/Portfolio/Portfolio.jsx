import React from "react";
import Swiper from "../../public/js/swiper-bundle.min.js";
import {
  UilArrowRight,
  UilAngleRight,
  UilAngleLeft,
} from "@iconscout/react-unicons";

const data = [
  {
    id: 1,
    image: "/img/portfolio.png",
    title: "Online Shop Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt magni exercitationem?",
  },
  {
    id: 2,
    image: "/img/portfolio.png",
    title: "Company Profile Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt magni exercitationem?",
  },
  {
    id: 3,
    image: "/img/portfolio.png",
    title: "Wordpress Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt magni exercitationem?",
  },
];

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
            {data.map((portfolio) => (
              <div
                key={portfolio.id}
                className="portfolio__content grid swiper-slide"
              >
                <div className="slide-content">
                  <div className="image">
                    <img src={portfolio.image} alt="" className="user-photo" />
                  </div>
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">{portfolio.title}</h3>
                    <p className="portfolio__description">
                      {portfolio.description}
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
            ))}
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
