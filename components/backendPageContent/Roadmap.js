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

const Roadmap = () => {
  return (
    <ResourceSection id="roadmap">
      <ResourceSectionHeading>
        Backend Development Roadmap
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          A roadmap is a visualization of a strategic plan. You will need one if
          you want to actualize becoming a frontend developer. The resources
          below will guide you as to how to create/use your roadmap.
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
                href="https://www.decipherzone.com/blog-detail/backend-developer-roadmap-2021"
              >
                The 2022 RoadMap For Backend Developer ~ decipherzone.com
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://dev.to/creativetim_official/the-complete-roadmap-for-becoming-a-backend-developer-step-by-step-instructions-d4j"
              >
                The Complete Roadmap for Becoming a Backend Developer:
                Step-By-Step Instructions ~ Creative Tim
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
                href="https://www.youtube.com/watch?v=Q0prVO3DCtU"
              >
                2022 Backend Developer Roadmap | Begin your journey as a Backend
                Developer ~ Coding with Lewis
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/-Cy-1PqrcKI">
                Backend Developer learning Guide Roadmap 2021 ~ AdoraHack
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default Roadmap;
