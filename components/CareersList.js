import React from "react";
import styles from "../styles/CareersList.module.scss";
import Link from "next/link";

const CareersList = () => {
  const careers = [
    {
      title: "Frontend",
      body: "Curated step by step guide and free resources to becoming a frontend developer.",
      comingSoon: false,
      inProgress: false,
      link: "/careers/frontend",
    },
    {
      title: "Backend",
      body: "Curated step by step guide and resources to becoming a backend developer.",
      comingSoon: false,
      inProgress: false,
      link: "/careers/backend",
    },
    {
      title: "Technical Writing",
      body: "Curated step by step guide and resources to becoming a technical writer.",
      comingSoon: true,
      inProgress: true,
      link: "/careers/technicalwriting",
    },
  ];
  return (
    <section className={styles.careers}>
      <h2 className="heading">Careers in Tech</h2>

      <div className={styles.careers__cards}>
        {careers.map((career) => (
          <div
            key={career.title}
            className={`${styles.careers__cardLink} ${career.comingSoon} ? ${styles.disabled} : ""`}>
            <Link href={career.link}>
              {career.comingSoon && (
                <p className={styles.comingSoon}>
                  <span>{`${
                    career.inProgress ? "In Progress" : "Coming Soon"
                  }`}</span>
                </p>
              )}
              <div className={styles.careers__card}>
                <h3>{career.title}</h3>
                <p>{career.body}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareersList;
