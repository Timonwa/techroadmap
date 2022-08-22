/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceBadge } from "../styles/styled-components/ResourceBadge.styled";
import { ResourceCard } from "../styles/styled-components/ResourceCard.styled";
import { ResourceCardBody } from "../styles/styled-components/ResourceCardBody.styled";
import { ResourceCardLinks } from "../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../styles/styled-components/ResourceCardTitle.styled";
import { ResourceLink } from "../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../styles/styled-components/ResourceSection.styled";
import { ResourceSectionHeading } from "../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../styles/styled-components/ResourceSectionLinks.styled";

const VersionControl = () => {
  return (
    <ResourceSection id="version-control">
      <ResourceSectionHeading>Version Control</ResourceSectionHeading>

      <ResourceCardBody>
        <p>
          Version Control also known as Source Control is a way of managing and
          tracking the changes made to your code over time. This allows you to
          easily compare changes made and revert to old versions if the need
          arises. You can find different tools below that help you do that.
        </p>
        <p>
          If you are finding Git hard to understand, you can learn GitHub
          Desktop created by GitHub which makes using Git less complicated. Use
          it for a while and then come back to Git. After that, you can choose
          whichever version control service you prefer among GitHub, GitLab and
          BitBucket.
        </p>
      </ResourceCardBody>

      <ResourceSectionLinks>
        {/* git */}
        <ResourceCard id="git">
          <ResourceCardTitle>Git</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://git-scm.com/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://git-scm.com/downloads">
                Download Link
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://git-scm.com/book/en/v2">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL_euSNU_eLbegnt7aR8I1gXfLhKZbxnYX">
                Git complete course tutorial. ~ Leela Web Dev
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* github */}
        <ResourceCard id="github">
          <ResourceCardTitle>GitHub</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://github.com/">
                {" "}
                Website{" "}
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://desktop.github.com/">
                Download Link
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://docs.github.com/en">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/RGOj5yH7evk">
                Git and GitHub for beginners. ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/GqNAD4XoZ6k">
                Using GitHub Desktop for beginners. ~ Kevin Powell
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* Git lab */}
        <ResourceCard id="gitlab">
          <ResourceCardTitle>GitLab</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://about.gitlab.com/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://docs.gitlab.com/">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLu-nSsOS6FRIg52MWrd7C_qSnQp3ZoHwW">
                Git and GitLab tutorial. ~ GitSchoolDude
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* bitbucket */}
        <ResourceCard id="bitbucket">
          <ResourceCardTitle>BitBucket</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://bitbucket.org/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/1tC6Z57AOkY">
                Git Crash Course using BitBucket ~AHT Cloud
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default VersionControl;
