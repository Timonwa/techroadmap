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
          BitBucket, you would want a server to host your backend applications
          either temporarily or permanently and also have testable links which
          you can share with friends and potential clients so they can admire
          and see the hard work you have done. You can choose any of the
          services below:
        </p>
        <p>
          <em>
            Note: Heroku, Vercel and Firebase are free and easy to use while the
            others AWS, GCP and Azure are used by professionals because of the
            vast services the offer.
          </em>
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/*   Heroku */}
        <ResourceCard id="heroku">
          <ResourceCardTitle>Heroku</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://www.heroku.com/platform">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://devcenter.heroku.com/start">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  Vercel */}
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
              <a
                target="_blank"
                href="https://vercel.com/docs/concepts/functions/serverless-functions">
                Serverless Functions (Docs)
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  firebase */}
        <ResourceCard id="vercel">
          <ResourceCardTitle>Firebase</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://firebase.google.com/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://firebase.google.com/docs">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*   Digital Ocean */}
        <ResourceCard id="deploy-digital-ocean">
          <ResourceCardTitle>DigitalOcean</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://www.digitalocean.com">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://docs.digitalocean.com/products">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
        {/*   Amazon Web Services */}
        <ResourceCard id="aws">
          <ResourceCardTitle>Amazon Web Services (AWS)</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://aws.amazon.com">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://aws.amazon.com/getting-started">
                Getting Started with AWS
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  Google Cloud Platform */}
        <ResourceCard id="gcp">
          <ResourceCardTitle>Google Cloud Platform (GCP)</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://cloud.google.com">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://cloud.google.com/why-google-cloud">
                Why Google Cloud
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://cloud.google.com/solutions">
                Google Cloud solutions
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  Azure */}
        <ResourceCard id="azure">
          <ResourceCardTitle>Azure</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://azure.microsoft.com/en-us/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://docs.microsoft.com/en-us/azure/?product=popular">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default DeploymentServices;
