import React from "react";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";

const OtherResources = () => {
  return (
    <ResourceSection id="other-resource">
      <ResourceSectionHeading>Other Useful Resource</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          This is a collection other useful resources that couldn't fit into the
          sections above. Explore!
        </p>
      </ResourceSectionBody>

      <div class="resource-section__links">
        {/* <!-- articles --> */}
        <div class="resource-card">
          <h3 class="resource-card-title">Articles</h3>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="#"></a>
            </ResourceLink>
          </ResourceCardLinks>
        </div>

        {/* <!-- videos --> */}
        <div class="resource-card">
          <h3 class="resource-card-title">Videos</h3>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="#"></a>
            </ResourceLink>
          </ResourceCardLinks>
        </div>
      </div>
    </ResourceSection>
  );
};

export default OtherResources;
