import React from "react";
import styles from "../styles/NotFound.module.scss";
import image from "../public/images/404image.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.image}>
        <Image src={image} placeholder="blur" alt="page not found" />
      </div>
      <div className={styles.content}>
        <h1>I&apos;m so sorry.</h1>
        <p>
          The page you are looking for has either been moved to another location
          or no longer exists.
        </p>
        <p>
          Please return to our{" "}
          <Link href="/">
            <a className="paragraphLinks">Home page</a>
          </Link>{" "}
          or check out the careers listed in our{" "}
          <Link href="/careers">
            <a className="paragraphLinks">Careers page</a>
          </Link>
          .
        </p>
        <p>Thank you.</p>
      </div>
    </section>
  );
};

export default NotFound;
