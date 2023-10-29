import React from "react";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled.js";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled.js";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled.js";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled.js";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled.js";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled.js";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled.js";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled.js";

const Roadmap = () => {
  return (
    <ResourceSection id="roadmap">
      <ResourceSectionHeading>
        How to Become a Technical Writer
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          There is no definite roadmap for technical writing because of how vast
          the technical writing industry is. Still, you must have some essential
          skills to become an excellent technical writer. The resources below
          will guide you in becoming a good technical writer.
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
                href="https://www.instructionalsolutions.com/blog/become-a-technical-writer"
                rel="noreferrer"
              >
                How to Become a Technical Writer: A Beginner&apos;s Guide ~
                Instructional Solutions
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.freecodecamp.org/news/how-to-become-a-technical-writer/"
                rel="noreferrer"
              >
                How to Become a Technical Writer ~ freeCodeCamp
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
        {/* videos */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=1w1QYR-n1js"
                rel="noreferrer"
              >
                How to Become a Great Technical Writer ~ Technical Writer HQ
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default Roadmap;
