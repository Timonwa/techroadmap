import React from "react";

const Banner = ({ title, quote, image }) => {
  const style = {
    background: `url(${image}) rgba(3, 3, 3, 0.5)`,
    "background-blend-mode": "overlay",
    "  background-position": "center",
    "background-size": "cover",
    " background-repeat": "no-repeat",
    "min-height": "400px",
    height: "100vh",
    "max-height": "400px",
    width: "100%",
    "max-width": "1440px",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    color: "white",
    "text-align": "center",
    " font-weight": "600",
    "font-size": " 120%",
  };

  return (
    <>
      <div class="nav-space"></div>
      <header style={style} className="banner">
        <div className="banner-wrapper">
          <h1>{title}</h1>
          <p>{quote}</p>
        </div>
      </header>
    </>
  );
};

export default Banner;
