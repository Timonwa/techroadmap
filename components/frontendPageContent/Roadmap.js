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
        Frontend Development Roadmap
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          A roadmap is a visualization of a strategic plan. You will need one if
          you want to actualize becoming a frontend developer. The resources
          below will guide you on how to create/use your roadmap.
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
                href="https://vitto.cc/the-complete-front-end-developer-roadmap-2021/"
                rel="noreferrer">
                The complete frontend developer roadmap 2021 ~ Vittorio
                Rivabella
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.freecodecamp.org/news/how-to-learn-web-dev-in-2021-roadmap/"
                rel="noreferrer">
                How to Learn Web Development in 2021 - a Web Developer Roadmap ~
                FreeCodeCamp
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
                href="https://youtu.be/lnJG9grXqfs"
                rel="noreferrer">
                Frontend developer learning roadmap 2021 ~ Gift Egwuenu
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtu.be/EqzUcMzfV1w"
                rel="noreferrer">
                Web development in 2022, a practical guide ~ Traversy Media
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default Roadmap;
