/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const Json = () => {
  return (
    <ResourceSection id="json">
      <ResourceSectionHeading>JSON</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          JSON which stands for JavaScript Object Notation is a text-based data
          exchange format. Commonly used for transmitting data in web
          applications like sending data to and fro between the server and
          client, so it can be displayed on a web page, or vice versa.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* videos  */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/iiADhChRriM">
                Learn JSON in 10 minutes. ~ Web Dev Simplified
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/mAqYJF-yxO8">
                Full JSON tutorial for beginners. ~ Techcode
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* articles  */}
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href=""></a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default Json;
