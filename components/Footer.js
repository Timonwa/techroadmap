import React from "react";
import styles from "../styles/Footer.module.scss";
import {
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  //* function to automatically update copyright date
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        {/*  footer nav links  */}
        <div className={styles.sections}>
          <ul className={styles.footerLinks}>
            <li>
            <Link href="/">
                <a className={styles.footerLink}>Home</a>
              </Link>
            </li>
            <li>
            <Link href="/careers">
                <a className={styles.footerLink}>Careers</a>
              </Link>
            </li>
            <li>
              <Link href="/contribute" className={styles.footerLink}>
                Contribute
              </Link>
            </li>
          </ul>
        </div>

        {/* attribution */}
        <div className={styles.sections}>
          <p>
          <Link href="/">
              <a className={styles.paragraphLinks}>Tech Roadmap </a>
            </Link>
            is created by{" "}
            <a
              className={styles.paragraphLinks}
              target="_blank"
              href="https://twitter.com/timonwa_"
              rel="noreferrer"
            >
              Timonwa
            </a>
          </p>
        </div>

        {/* social links */}
        <div className={styles.sections}>
          <ul className={styles.socialLinks}>
            <li>
              <a
                className={styles.socialLink}
                target="_blank"
                href="mailto:techcareerroadmap@gmail.com"
                rel="noreferrer"
              >
                <FaEnvelope className={styles.icons} />
              </a>
            </li>
            <li>
              <a
                className={styles.socialLink}
                target="_blank"
                href="https://twitter.com/techroadmap__"
                rel="noreferrer"
              >
                <FaTwitter className={styles.icons} />
              </a>
            </li>
            <li>
              <a
                className={styles.socialLink}
                target="_blank"
                href="https://github.com/Timonwa/techroadmap"
                rel="noreferrer"
              >
                <FaGithub className={styles.icons} />
              </a>
            </li>
          </ul>
        </div>

        {/* website quote */}
        <div className={`${styles.sections} ${styles.quote}`}>
          <p>
            Roadmaps, articles, and useful resources to help you choose a career
            path, start your journey, and grow in tech.
          </p>
        </div>

        {/* copyright */}
        <div className={`${styles.sections} ${styles.copyright}`}>
          <p>
            <small>
              Copyright <FaRegCopyright className={styles.icons} />
              {currentYear} Tech Roadmap. All Rights Reserved.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
