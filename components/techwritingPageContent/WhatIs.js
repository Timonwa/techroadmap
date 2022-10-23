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
        What is Technical Writing?
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Technical writing involves writing or drafting technical documentation
          or tutorials used in technical and occupational fields, such as
          engineering, computer hardware and software, architecture,
          aeronautics, robotics, finance, medical, consumer electronics,
          biotechnology, chemistry, forestry, etc. User guides, online help
          articles, or internal documentation for programmers and API developers
          could all fall under this category.
        </p>
        <p>
          It is the art of explaining things in great detail so that readers can
          grasp a certain skill or product and utilise it for the intended
          purpose.
        </p>
        <p>
          Learn more about what technical writing is and who technical writers
          are by clicking the links below.
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
                href="https://www.instructionalsolutions.com/blog/what-is-technical-writing">
                What is Technical Writing? ~ Instructional Solutions
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.technicalwriterhq.com/career/technical-writer/what-is-a-technical-writer/">
                What is a Technical Writer? Definition + Examples ~ Technical
                Writer HQ
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
        {/* videos */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/9SB4tfD0hxM">
                What is Technical Writing? ~ Azusa Pacific Writing Center
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/hcArVd6F7Jo">
                9 Point Checklist - Should you be a Technical Writer? ~
                Technical Communication
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/Esvq0MYiCuQ">
                Technical writing for beginners (Is technical writing for you?).
                ~ Amruta Ranade
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default WhatIs;
