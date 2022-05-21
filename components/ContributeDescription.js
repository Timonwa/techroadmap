/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export const ContributeDescription = () => {
  const contributionFormHeading = { fontSize: "1.2rem" };

  const contributingList = {
    listStyleType: "disc",
    marginLeft: "30px",
    marginBottom: "10px",
  };

  const contributionFormList = {
    listStyleType: "decimal",
    marginLeft: "30px",
    marginBottom: "10px",
  };

  return (
    <section className="intro">
      <div className="introWrapper">
        <h1 className="heading">How to contribute to this Project!</h1>
        <div className="intro__body">
          <p>
            I&apos;m so excited to have you contribute to this project. You
            are the real MVP. 🎉
          </p>
          <p>
            There are so many ways in which you can help us grow Tech Roadmap
            into a budding tech community and the no. 1 online resource for tech
            careers and learning. You can do so by
          </p>

          {/* lists of contributions that can be made */}
          <ul style={contributingList}>
            <li>adding a new roadmap,</li>
            <li>editing, or suggesting changes to the existing roadmaps,</li>
            <li>contributing to the content and resources of the website,</li>
            <li>
              fixing grammar mistakes or typos on the contents of the website,
            </li>
            <li>contributing to the UI design of the site,</li>
            <li>refactoring our codebase, etc.</li>
          </ul>

          <p>
            If you want to contribute as a developer, you can do so{" "}
            <a
              className="paragraphLinks"
              target="_blank"
              href="https://github.com/Timonwa/techroadmap">
              here
            </a>
            . If you are a non-developer or do not want to contribute as a
            developer, you can do that by clicking on the links to one of our
            contribution forms below.
          </p>
          <p>
            Do read our{" "}
            <a
              className="paragraphLinks"
              target="_blank"
              href="https://github.com/Timonwa/techroadmap/blob/main/CONTRIBUTING.md">
              contribution guidelines{" "}
            </a>
            and{" "}
            <a
              className="paragraphLinks"
              target="_blank"
              href="https://github.com/Timonwa/techroadmap/blob/main/CODE_OF_CONDUCT.md">
              code of conduct
            </a>{" "}
            first before making any contributions and please give our{" "}
            <a
              className="paragraphLinks"
              target="_blank"
              href="https://github.com/Timonwa/techroadmap">
              Github repo{" "}
            </a>
            a star, it would mean much to us.
          </p>
          <p>See you soon! 👋</p>

          {/* <!-- contribution forms --> */}
          <h2 style={contributionFormHeading}>Contribution forms</h2>
          <ol style={contributionFormList}>
            <li className="contribution-form">
              <a
                href="https://surveyheart.com/form/6223d70e04230d6aacb584eb"
                target="_blank"
                rel="noopener noreferrer">
                Tech Roadmap Contribution Form (Design)
              </a>
            </li>
            <li className="contribution-form">
              <a
                href="https://surveyheart.com/form/6223dce98b49886ad8cd58e5"
                target="_blank"
                rel="noopener noreferrer">
                Tech Roadmap Contribution Form (Roadmaps/Guides)
              </a>
            </li>
            <li className="contribution-form">
              <a
                href="https://surveyheart.com/form/62246725b4851c6aa5a1d3af"
                target="_blank"
                rel="noopener noreferrer">
                Tech Roadmap Contribution Form (Frontend Resource Links)
              </a>
            </li>
            <li className="contribution-form">
              <a
                href="https://surveyheart.com/form/62246ceb8b49886ad8d0b120"
                target="_blank"
                rel="noopener noreferrer">
                Tech Roadmap Contribution Form (Others)
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ContributeDescription;
