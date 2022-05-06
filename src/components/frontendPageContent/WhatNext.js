/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
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
          If you plan on becoming a FullStack Developer, then check out our
          Backend Development Roadmap. Don't forget to give us a Star on our{" "}
          <a
            className="paragraph-links"
            href="http://github.com/Timonwa/techroadmap"
            target="_blank">
            repo
          </a>{" "}
          and tweet a thank you to the{" "}
          <a
            className="paragraph-links"
            href="http://twitter.com/timonwa_"
            target="_blank">
            creator
          </a>{" "}
          of this project.
        </p>

        <p>Happy Coding!</p>
      </ResourceSectionBody>
    </ResourceSection>
  );
};

export default WhatNext;
