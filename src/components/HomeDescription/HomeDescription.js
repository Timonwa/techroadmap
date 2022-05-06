import React from "react";
import { Link } from "react-router-dom";

const HomeDescription = () => {
  return (
    <section className="intro">
      <div className="intro-wrapper">
        <h2 className="heading">Welcome!</h2>
        <div className="intro__body">
          <p>
            Tech Roadmap is a free online resource on careers in the tech
            industry. Anyone who wants to break or transition into the tech
            industry or has already broken into it, can use these resources to
            choose and define their career path and learn about the skills
            needed to build themselves in the chosen career.
          </p>
          <p>
            Here you have access to collections of ebooks, free courses, videos,
            articles, guides, tools, etc on the different careers in tech
            including the no-code jobs. So if you are just starting your career
            or have yet to choose a career path, then you are in the right
            place.
          </p>
          <p>
            You can click on one of the career cards below if you have already
            chosen a career path or go to our{" "}
            <Link className="paragraph-links" to="/careers">
              careers page{" "}
            </Link>
            if you need help in deciding the one to choose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeDescription;
