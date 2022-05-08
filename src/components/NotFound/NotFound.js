import React from "react";
import "./NotFound.scss";
import image from "../../assets/404image.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="not-found">
      <div className="image">
        <img src={image} alt="page not found" />
      </div>
      <div className="content">
        <h1>I'm so sorry.</h1>
        <p>
          The page you are looking for has either been moved to another location
          or no longer exists.
        </p>
        <p>
          Please return to our{" "}
          <Link to="/" className="paragraph-links">
            Home page
          </Link>{" "}
          or check out the careers listed in our{" "}
          <Link to="/careers" className="paragraph-links">
            Careers page
          </Link>
          .
        </p>
        <p>Thank you.</p>
      </div>
    </section>
  );
};

export default NotFound;
