/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export const ContributeDescription = () => {
  return (
    <section className="intro">
      <div className="introWrapper">
        <h1 className="heading">Support the Project!</h1>
        <div className="intro__body">
          <p>Thank you for your interest in contributing to this project! 🎉</p>
          <p>
            However, we are no longer accepting contributions to this project.
            But if you find the resources helpful, please consider giving our{" "}
            <a
              className="paragraphLinks"
              target="_blank"
              href="https://github.com/Timonwa/techroadmap">
              GitHub repository
            </a>{" "}
            a star. It would mean a lot to us!
          </p>
          <p>Thank you for your support! 👋</p>
        </div>
      </div>
    </section>
  );
};

export default ContributeDescription;
