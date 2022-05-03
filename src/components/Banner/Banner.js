import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <>
      <div class="nav-space"></div>
      <header className="banner home-page-banner">
        <div className="banner-wrapper">
          <h1>Tech Career Roadmap</h1>
          <p>
            Roadmaps, articles, and useful resources to help you choose a career
            path, start your journey and grow in tech.
          </p>
        </div>
      </header>
    </>
  );
};

export default Banner;
