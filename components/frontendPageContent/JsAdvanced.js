/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const JsAdvanced = () => {
  return (
    <ResourceSection id="javascript-advanced">
      <ResourceSectionHeading>Javascript (Advanced)</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          You have learned the basics of JavaScript, time to learn modern and
          newer concepts to help you write easier and better codes like Arrow
          functions, Modules and the other goodies that came with JavaScript
          ES6.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* <!-- videos --> */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/WZQc7RUAg18">
                ES6 JavaScript tutorials for beginners. ~ Dev Ed
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/nZ1DMMsyVyI">
                JavaScript ES6, ES7, ES8 tutorial. ~ FreeCodeCamp
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/cRHQNNcYf6s">
                JavaScript ES6 modules. ~ Web Dev Simplified
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* <!-- playlist --> */}
        <ResourceCard>
          <ResourceCardTitle>Curated Playlist</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd">
                Advanced JavaScript Concepts. ~ Dave Grey
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLvZkOAgBYrsSZiL0L7T-CBGdiBUaHok4x">
                Advanced JavaScript Concepts, the complete series. ~ Tech CBT
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD">
                Regular expressions tutorial. ~ The Net Ninja
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* <!-- articles --> */}
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="#"></a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* <!-- practical projects --> */}
        <ResourceCard>
          <ResourceCardTitle>Practice Projects</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLpwngcHZlPadhRwryAXw3mJWX5KH3T5L3">
                Basic and advanced JavaScript Projects. ~ Coding Nepal
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* <!-- others --> */}
        <ResourceCard>
          <ResourceCardTitle>Others</ResourceCardTitle>
          <p className="resource-card-body">
            Tips and tricks, tools, cool examples etc.
          </p>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="#"></a>
              <span className="resourceLink-badge"></span>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default JsAdvanced;
