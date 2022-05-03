import React from "react";
import { Link } from "react-router-dom";
import "./CareersList.scss";

const CareersList = () => {
  const careers = [
    {
      title: "Frontend",
      body: "Curated guide and resources to becoming a frontend developer.",
      comingSoon: false,
      inProgress: false,
      link: "/frontend",
    },
    {
      title: "Backend",
      body: "Curated guide and resources to becoming a backend developer.",
      comingSoon: false,
      inProgress: false,
      link: "/backend",
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
      inProgress: false,
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
    <section className="careers">
      <h2 className="heading">Careers in Tech</h2>

      <div className="careers__cards">
        {careers.map((career) => (
          <div
            key={career.title}
            className={`careers__card-link ${
              career.comingSoon ? "disabled" : ""
            }`}>
            <Link to={career.link}>
              {career.comingSoon && (
                <p className="coming-soon">
                  <span>{`${
                    career.inProgress ? "In Progress" : "Coming Soon"
                  }`}</span>
                </p>
              )}
              <div className="careers__card">
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
