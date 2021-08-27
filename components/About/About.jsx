import React from "react";
import {
  UilFileDownloadAlt,
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt,
} from "@iconscout/react-unicons";

export default function About() {
  const [course, setCourse] = React.useState(true);
  const [work, setWork] = React.useState();

  return (
    <>
      {/* ABOUT */}
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
          <img src="/img/about.png" alt="" />

          <div className="about__data">
            <p className="about__description">
              I'm a web developer, and I'm very passionate and dedicated to my
              work. With experience in creating multiple projects as a web
              developer, I have acquired the skills and knowledge necessary to
              make your project a success. I enjoyed every step of the
              development process, from discussion and collaboration.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">05+</span>
                <span className="about__info-name">
                  Years <br /> experience
                </span>
              </div>
              <div>
                <span className="about__info-title">10+</span>
                <span className="about__info-name">
                  Completed <br /> project
                </span>
              </div>
              <div>
                <span className="about__info-title">03+</span>
                <span className="about__info-name">
                  Completed <br /> worked
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <a href="#" className="button button--flex">
                Download CV
                <UilFileDownloadAlt className="button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATION */}
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal jurney</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={`qualification__button button--flex ${
                course ? "qualification__active" : ""
              }`}
              onClick={() => {
                setCourse(true), setWork(false);
              }}
            >
              <UilGraduationCap className="qualification__icon" />
              Course
            </div>
            <div
              className={`qualification__button button--flex ${
                work ? "qualification__active" : ""
              }`}
              onClick={() => {
                setCourse(false), setWork(true);
              }}
            >
              <UilBriefcaseAlt className="qualification__icon" />
              Work
            </div>
          </div>

          <div className="qualification__sections">
            {/* Qualification content 1 */}
            <div
              className={`qualification__content ${
                course ? "qualification__active" : ""
              }`}
              data-content
              id="course"
            >
              {/* Qualification 1 */}
              <div className="qualification__data left">
                <div>
                  <h3 className="qualification__title">React Js</h3>
                  <span className="qualification__subtitle">Course Sites</span>
                  <div className="qualification__calender">
                    <UilCalendarAlt />
                    2020
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* Qualification 2 */}
              <div className="qualification__data right">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Frontend Developer</h3>
                  <span className="qualification__subtitle">course sites</span>
                  <div className="qualification__calender">
                    <UilCalendarAlt />
                    2019
                  </div>
                </div>
              </div>

              {/* Qualification 3 */}
              <div className="qualification__data left">
                <div>
                  <h3 className="qualification__title">Web Developer</h3>
                  <span className="qualification__subtitle">course sites</span>
                  <div className="qualification__calender">
                    <UilCalendarAlt />
                    2019
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* Qualification 4 */}
              <div className="qualification__data right">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Machine Learning</h3>
                  <span className="qualification__subtitle">course sitesy</span>
                  <div className="qualification__calender">
                    <UilCalendarAlt />
                    2018
                  </div>
                </div>
              </div>
            </div>

            {/* Qualification content 2 */}
            <div
              className={`qualification__content ${
                work ? "qualification__active" : ""
              }`}
              data-content
              id="work"
            >
              {/* Qualification 1 */}
              <div className="qualification__data left">
                <div>
                  <h3 className="qualification__title">
                    Senior Frontend Enginner
                  </h3>
                  <span className="qualification__subtitle">Company Name</span>
                  <div className="qualification__calender">
                    <UilCalendarAlt />
                    2019 - Now
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* Qualification 2 */}
              <div className="qualification__data right">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Software Engginner</h3>
                  <span className="qualification__subtitle">Company Name</span>
                  <div className="qualification__calender">
                    <UilCalendarAlt />
                    2015 - 2019
                  </div>
                </div>
              </div>

              {/* Qualification 3 */}
              <div className="qualification__data left">
                <div>
                  <h3 className="qualification__title">Junior Developer</h3>
                  <span className="qualification__subtitle">Company Name</span>
                  <div className="qualification__calender">
                    <UilCalendarAlt />
                    2013 - 2015
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
