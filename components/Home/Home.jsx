import React from "react";

import {
  UilLinkedin,
  UilInstagram,
  UilGithub,
  UilEnvelope,
} from "@iconscout/react-unicons";

export default function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a href="#" target="_blank" className="home__social-icon">
                <UilLinkedin />
              </a>
              <a href="#" target="_blank" className="home__social-icon">
                <UilInstagram />
              </a>
              <a href="#" target="_blank" className="home__social-icon">
                <UilGithub />
              </a>
            </div>

            <div className="home__img">
              <svg
                className="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    className="home__blob-img"
                    x="5"
                    y="5"
                    href="/img/profile.png"
                  />
                </g>
              </svg>
            </div>

            <div className="home__data">
              <h1 className="home__title">HI, I'am Arif</h1>
              <h3 className="home__subtitle">Junior Web Developer</h3>
              <p className="home__description">
                I am a web developer and frontend web developer who focuses on
                implementing web design into a responsive web. I'm looking
                forward to collaborating with you.
              </p>
              <a href="#" className="button button--flex">
                <UilEnvelope className="button__icon-email" />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
