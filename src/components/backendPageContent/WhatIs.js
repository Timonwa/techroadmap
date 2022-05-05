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
    <ResourceSection id="what-is">
      <ResourceSectionHeading>
        What is Backend Development?
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Backend development, also called server-side development, is the
          process of creating everything that the users don't see and contains
          behind-the-scenes activities that occur when performing any action on
          a website. It focuses primarily on databases, backend logic, APIs, and
          Servers. Backend development can be done in almost any programming
          language such as JavaScript (using the NodeJS runtime engine), Python,
          C, C# and C++, PHP, etc.
        </p>
        <p>
          Learn more about what backend development is by clicking the links
          below.
        </p>
      </ResourceSectionBody>
      
      <ResourceSectionLinks>
        {/* articles */}
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://learntocodewith.me/posts/backend-development/">
                The Beginner's Guide to Backend Development (2022 Guide) ~
                Krystal Tolani
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.interviewbit.com/blog/backend-developer-skills/">
                Backend Developer Skills You Must Have - InterviewBit.com
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
        {/* videos */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/cbSrsYiRamo">
                Backend Development explained in 2 minutes ~ Mayuko
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/5qocqWSdpSI">
                Backend development explained in 10 minutes ~ Simplilearn
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default WhatIs;
