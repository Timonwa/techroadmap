import React from "react";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const OtherResources = () => {
  return (
    <ResourceSection id="other-resource">
      <ResourceSectionHeading>Other Useful Resource</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          This is a collection other useful resources that couldn&apos;t fit
          into the sections above. Explore!
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* <!-- articles --> */}
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="#"></a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* <!-- videos --> */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="#"></a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default OtherResources;
