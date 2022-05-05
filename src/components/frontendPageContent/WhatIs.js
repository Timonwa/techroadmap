/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled.js";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled.js";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled.js";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled.js";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled.js";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled.js";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled.js";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled.js";

const WhatIs = () => {
  return (
    <ResourceSection>
      <ResourceSectionHeading>
        What is Frontend Development?
      </ResourceSectionHeading>
      <ResourceSectionBody>
        <p>
          Frontend development, also called client-side development, is the
          process of creating the visible part of a website, using HTML, CSS,
          and JavaScript, so that users can view and interact with that website.
        </p>
        <p>
          Learn more about what frontend development is by clicking the links
          below.
        </p>
      </ResourceSectionBody>
      <ResourceSectionLinks>
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.freecodecamp.org/news/front-end-developer-what-is-front-end-development-explained-in-plain-english/">
                What is front end development explained in plain english ~
                FreeCodeCamp
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://skillcrush.com/blog/skills-to-become-a-front-end-developer/">
                Skills to become a front-end developer ~ Skill Crush
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/GJ8jidDdWVg">
                What is front-end? ~ Codecademy
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/qyHyFsT7Hig">
                Frontend Development explained in 2 mins. ~ Mayuko
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default WhatIs;
