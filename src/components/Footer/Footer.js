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
  let date = new Date().getFullYear();
  const copy = "copyright " + date;

  return (
    <footer>
      <div class="footer-wrapper">
        {/*  footer nav links  */}
        <div class="sections">
          <ul class="footer-links">
            <li>
              <Link class="footer-link para-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link class="footer-link para-link" to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link class="footer-link para-link" to="/contribute">
                Contribute
              </Link>
            </li>
          </ul>
        </div>

        {/* attribution */}
        <div class="sections attribution">
          <p>
            <Link class="paragraph-links footer" to="/">
              Tech Roadmap{" "}
            </Link>
            is created by{" "}
            <a
              class="paragraph-links footer"
              target="_blank"
              href="https://twitter.com/timonwa_"
              rel="noreferrer">
              Timonwa
            </a>
          </p>
        </div>

        {/* social links */}
        <div class="sections">
          <ul class="social-links">
            <li>
              <a
                class="social-link para-link"
                target="_blank"
                href="mailto:techcareerroadmap@gmail.com"
                rel="noreferrer">
                <FaEnvelope className="icons" />
              </a>
            </li>
            <li>
              <a
                class="social-link para-link"
                target="_blank"
                href="https://twitter.com/techroadmap_"
                rel="noreferrer">
                <FaTwitter className="icons" />
              </a>
            </li>
            <li>
              <a
                class="social-link para-link"
                target="_blank"
                href="https://github.com/timonwa/techroadmap"
                rel="noreferrer">
                <FaGithub className="icons" />
              </a>
            </li>
          </ul>
        </div>

        {/* website quote */}
        <div class="sections quote">
          <p>
            Roadmaps, articles, and useful resources to help you choose a career
            path, start your journey, and grow in tech.
          </p>
        </div>

        {/* copyright */}
        <div class="sections copyright">
          <p>
            <small>
              <FaRegCopyright className="icons" /> {copy} Tech Roadmap. All
              Rights Reserved.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
