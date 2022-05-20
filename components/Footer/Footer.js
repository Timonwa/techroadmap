import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import {
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  //* function to automatically update copyright date
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-wrapper">
        {/*  footer nav links  */}
        <div className="sections">
          <ul className="footer-links">
            <li>
              <Link className="footer-link para-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-link para-link" to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="footer-link para-link" to="/contribute">
                Contribute
              </Link>
            </li>
          </ul>
        </div>

        {/* attribution */}
        <div className="sections attribution">
          <p>
            <Link className="paragraph-links footer" to="/">
              Tech Roadmap{" "}
            </Link>
            is created by{" "}
            <a
              className="paragraph-links footer"
              target="_blank"
              href="https://twitter.com/timonwa_"
              rel="noreferrer">
              Timonwa
            </a>
          </p>
        </div>

        {/* social links */}
        <div className="sections">
          <ul className="social-links">
            <li>
              <a
                className="social-link para-link"
                target="_blank"
                href="mailto:techcareerroadmap@gmail.com"
                rel="noreferrer">
                <FaEnvelope className="icons" />
              </a>
            </li>
            <li>
              <a
                className="social-link para-link"
                target="_blank"
                href="https://twitter.com/techroadmap__"
                rel="noreferrer">
                <FaTwitter className="icons" />
              </a>
            </li>
            <li>
              <a
                className="social-link para-link"
                target="_blank"
                href="https://github.com/timonwa/techroadmap"
                rel="noreferrer">
                <FaGithub className="icons" />
              </a>
            </li>
          </ul>
        </div>

        {/* website quote */}
        <div className="sections quote">
          <p>
            Roadmaps, articles, and useful resources to help you choose a career
            path, start your journey, and grow in tech.
          </p>
        </div>

        {/* copyright */}
        <div className="sections copyright">
          <p>
            <small>
              Copyright <FaRegCopyright className="icons" /> {currentYear} Tech
              Roadmap. All Rights Reserved.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
