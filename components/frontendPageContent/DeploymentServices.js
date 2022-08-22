/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const DeploymentServices = () => {
  return (
    <ResourceSection id="deployment">
      <ResourceSectionHeading>Deployment Services</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Now that you have successfully hosted your codes on GitHub, GitLab or
          BitBucket, you would want a server to host your frontend applications
          either temporarily or permanently and also have testable links which
          you can share with friends and potential clients so they can admire
          and see the good work you have done. You can choose any of the
          services below.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* Netlify  */}
        <ResourceCard id="netlify">
          <ResourceCardTitle>Netlify</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://netlify.com">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://docs.netlify.com/">
                Documentation.
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/cUMUTS2ybhg">
                Host websites on Netlify for free. ~ Packetcode
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/bjVUqvcCnxM">
                Deploy websites in seconds with Netlify ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* Vercel  */}
        <ResourceCard id="vercel">
          <ResourceCardTitle>Vercel</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://vercel.com">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://vercel.com/docs">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/mP8KIAros70">
                Deploy a website to vercel. - WebDemystified
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/6YRymPx1-4s">
                Deploying an application with vercel. - Caleb Barger
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  GitHub pages  */}
        <ResourceCard id="github-pages">
          <ResourceCardTitle>GitHub Pages</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://pages.github.com/">
                What is GitHub pages.~ GitHub
              </a>
              <ResourceBadge>Article</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages">
                GitHub Pages documentation.
              </a>
              <ResourceBadge>Article</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/8hrJ4oN1u_8">
                How to host a website on GitHub . ~ Programmingknowledge
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default DeploymentServices;
