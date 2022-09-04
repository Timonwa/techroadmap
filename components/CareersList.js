import React from "react";
import styles from "../styles/CareersList.module.scss";
import Link from "next/link";

const CareersList = () => {
  const careers = [
    {
      title: "Frontend",
      body: "Curated guide and resources to becoming a frontend developer.",
      comingSoon: false,
      inProgress: false,
      link: "/careers/frontend",
    },
    {
      title: "Backend",
      body: "Curated guide and resources to becoming a backend developer.",
      comingSoon: false,
      inProgress: false,
      link: "/careers/backend",
    },
    {
      title: "Blockchain Developer",
      body: "Curated guide and resources to becoming a blockchain developer.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "Technical Writing",
      body: "Curated guide and resources to becoming a technical writer.",
      comingSoon: true,
      inProgress: true,
      link: "#",
    },
    {
      title: "Ui/Ux Designer",
      body: "Curated guide and resources to becoming a Ui/Ux designer.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "Machine Learning developer",
      body: "Curated guide and resources to becoming a machine learning developer.",
      comingSoon: true,
      inProgress: false,
      link: "#",
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
              <a>
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
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareersList;
