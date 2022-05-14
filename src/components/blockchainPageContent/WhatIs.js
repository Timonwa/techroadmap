/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
        What is Blockchain Development?
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Blockchain development is the process of creating a new kind of
          digital ledger that is based on a consensus algorithm. The consensus
          algorithm is a set of rules that govern the ledger.
        </p>
        <p>
          Learn more about what blockchain development is by clicking the links
          below.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* articles */}
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="#"></a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="#"></a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
        {/* videos */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="#"></a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="#"></a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default WhatIs;
