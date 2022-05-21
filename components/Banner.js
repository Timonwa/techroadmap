import React from "react";

const Banner = ({ title, quote, image }) => {
  const style = {
    background: `url(${image}) rgba(3, 3, 3, 0.5)`,
    backgroundBlendMode: "overlay",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "400px",
    height: "100vh",
    maxHeight: "400px",
    width: "100%",
    maxWidth: "1440px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "120%",
  };

  return (
    <header style={style} className="banner">
      <div className="banner-wrapper">
        <h1>{title}</h1>
        <p>{quote}</p>
      </div>
    </header>
  );
};

export default Banner;
