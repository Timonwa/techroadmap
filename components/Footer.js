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
              <Link href="/" className={styles.footerLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/careers" className={styles.footerLink}>
                Careers
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
            <Link href="/" className={styles.paragraphLinks}>
              Developer Roadmap
            </Link>{" "}
            is created by{" "}
            <a
              className={styles.paragraphLinks}
              target="_blank"
              href="https://twitter.com/timonwa_"
              rel="noreferrer">
              Timonwa
            </a>{" "}
            and{" "}
            <a
              className={styles.paragraphLinks}
              target="_blank"
              href="https://github.com/Timonwa/techroadmap/graphs/contributors/"
              rel="noreferrer">
              friends
            </a>
            .
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
                rel="noreferrer">
                <FaEnvelope className={styles.icons} title="Email link" />
              </a>
            </li>
            <li>
              <a
                className={styles.socialLink}
                target="_blank"
                href="https://twitter.com/techroadmap__"
                rel="noreferrer">
                <FaTwitter className={styles.icons} title="Twitter link" />
              </a>
            </li>
            <li>
              <a
                className={styles.socialLink}
                target="_blank"
                href="https://github.com/Timonwa/techroadmap"
                rel="noreferrer">
                <FaGithub className={styles.icons} title="Github link" />
              </a>
            </li>
          </ul>
        </div>

        {/* website quote */}
        <div className={`${styles.sections} ${styles.quote}`}>
          <p>
            Frontend and Backend roadmaps, along with useful resources to help
            you start and grow your career in tech.
          </p>
        </div>

        {/* copyright */}
        <div className={`${styles.sections} ${styles.copyright}`}>
          <p>
            <small>
              Copyright <FaRegCopyright className={styles.icons} />
              {currentYear} Developer Roadmap. All Rights Reserved.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
