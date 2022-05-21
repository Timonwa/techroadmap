/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const Debugging = () => {
  return (
    <ResourceSection id="debugging">
      <ResourceSectionHeading>Debugging Your Code</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Debugging is a very important part of the development process. It is a
          process of finding and fixing errors (also known as
          &ldquo;bugs&rdquo;) in your code. These bugs can cause your code to
          behave unexpectedly or crash.
        </p>
        <p>
          As a developer, you need to be able to find and fix errors in your
          code. The following resources will help you to learn how to debug your
          code.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        <ResourceCard id="debugging">
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/x4q86IjJFag">
                Chrome developer tools crash course ~ Brad Traversy
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/gTVpBbFWry8">
                Chrome devTools crash course ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/Y3u2groOG-A">
                Chrome devTools complete course ~ Codedamn
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLgjjGlfBflIRRWuCXnSTU1-35EcDc5Jwf
">
                Firefox devTools ~ Mozilla developer
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/a-V8GFtwjos">
                Firefox devTools ~ Kevin Powell
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default Debugging;
