/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";

const WhatNext = () => {
  return (
    <ResourceSection id="what-next">
      <ResourceSectionHeading>What Next?</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Pat yourself on the back for making it this far. Do continue to
          practice your skills, build more projects, and apply for jobs.
        </p>
        <p>
          If you plan on becoming a FullStack Developer, then check out our{" "}
          <Link to="/frontend" className="paragraph-links">
            Frontend Development Roadmap
          </Link>
          . If you have any questions, feel free to message us on{" "}
          <a
            className="paragraph-links"
            href="http://twitter.com/techroadmap__"
            target="_blank">
            twitter
          </a>
          . Don't forget to give us a Star on our{" "}
          <a
            className="paragraph-links"
            href="http://github.com/Timonwa/techroadmap"
            target="_blank">
            repo
          </a>{" "}
          too!
        </p>

        <p>Happy Coding!</p>
      </ResourceSectionBody>
    </ResourceSection>
  );
};

export default WhatNext;
