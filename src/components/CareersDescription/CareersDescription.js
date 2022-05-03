/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const CareersDescription = () => {
  return (
    <>
      {/* <!--* intro --> */}
      <section className="intro">
        <div className="intro-wrapper">
          <h1 className="heading">Begin Your Tech Career Journey!</h1>
          <div className="intro__body">
            <p>
              The technology industry is vast and can be quite frightening for
              one who is not familiar with it. Very often non-technical people
              believe that the word *Tech* is a job title; maybe because we
              refer to people who work in the tech space as tech sis or tech
              bro. But every tech sis or tech bro has a more specific job title
              and their responsibilities differ even within the same company.
            </p>
            <p>
              There are over 20 job titles in the Tech Industry and they can be
              divided into 2 categories; the one that requires you to write code
              and the one that doesn't. You can learn about them by going
              through the resources below.
            </p>
            <p>
              Once you have done that, you should be able to have a basic
              understanding of what the different careers are about, the
              responsibilities of each of them, and the requirements needed to
              go into it. You can then decide on which career path you would
              like to begin with.
            </p>
          </div>
        </div>
      </section>

      {/* <!--* choosing a career --> */}
      <section className="resource-section">
        <h2 className="resource-section__heading">Learn About the Tech Careers</h2>
        <div className="resource-section__links">
          {/* <!-- articles --> */}
          <div className="resource-card">
            <h3 className="resource-card-title">Articles</h3>
            <ul className="resource-card-links">
              <li className="resource-link">
                <a
                  target="_blank"
                  href="https://blog.timonwa.com/you-dont-need-to-write-code-to-become-a-tech-sisbro">
                  21 no-code tech jobs you can do to become a tech sis or tech
                  bro. ~ Timonwa
                </a>
              </li>
              <li className="resource-link">
                <a
                  target="_blank"
                  href="https://skillcrush.com/blog/41-tech-job-titles/">
                  41 Job Titles in Tech. Which One Will be Yours? ~ SkillCrush
                </a>
              </li>
              <li className="resource-link">
                <a
                  target="_blank"
                  href="https://www.business.com/articles/best-careers-tech-geeks/">
                  20 Top Career Paths for Tech Geeks ~ business.com
                </a>
              </li>
              <li className="resource-link">
                <a
                  target="_blank"
                  href="https://www.freecodecamp.org/news/how-to-choose-the-best-tech-career-path-for-you-61c4d5ff9a77/">
                  How to choose the best tech career path for you ~freecodecamp
                </a>
              </li>
              <li className="resource-link">
                <a
                  target="_blank"
                  href="https://edidiongasikpo.com/how-to-kickstart-a-career-in-tech">
                  How to Kickstart a Career in Tech ~ Edidiong Asikpo
                </a>
              </li>
              <li className="resource-link">
                <a
                  target="_blank"
                  href="https://therevealer.hashnode.dev/starting-out-in-tech-in-2022
">
                  Starting Out In Tech In 2022. ~ Emmanuel Aguchukwu
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- videos --> */}
          <div className="resource-card">
            <h3 className="resource-card-title">Videos</h3>
            <ul className="resource-card-links">
              <li className="resource-link">
                <a target="_blank" href="https://youtu.be/PFucqbGqjrI">
                  How to Choose the Right Career in Tech. ~ Hossana Hali
                </a>
              </li>
              <li className="resource-link">
                <a target="_blank" href="https://youtu.be/wbQQ-XGx7s0">
                  How to Find the Right Role for You. ~ Stereotype Breakers
                </a>
              </li>
              <li className="resource-link">
                <a target="_blank" href="https://youtu.be/0_fuiK3b9OA">
                  In Demand Tech Jobs for 2021 Explained (No Coding) ~ Bukola
                </a>
              </li>
              <li className="resource-link">
                <a target="_blank" href="https://youtu.be/c8oLHzW2qFU">
                  7 Non-Coding Tech Jobs that pay $100k + in 2022 ~ Mo Salhan
                </a>
              </li>
              <li className="resource-link">
                <a target="_blank" href="https://youtu.be/29ZJ4lN0PJY">
                  IT or Developer - Which is the Right Career Choice for You? ~
                  I.T Career Questions
                </a>
              </li>
              <li className="resource-link">
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=xuxTJUIi7nQ">
                  The Career Paths in Software Engineering ~ Tiff In Tech
                </a>
              </li>
              <li className="resource-link">
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=07IViT_Ezuc">
                  Career Paths for Software Engineers ~ Engineering With Ustav
                </a>
              </li>
              <li className="resource-link">
                <a target="_blank" href="https://youtu.be/AJsdLnsEFPQ">
                  IT Career Paths ~ NexGenT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersDescription;
