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

const Apis = () => {
  return (
    <ResourceSection id="apis">
      <ResourceSectionHeading>APIs</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          An API is an intermediary between two applications software allowing
          them easily communicate and share data. It stands for Application
          Programming Interface. This is easy to understand by both computers
          and humans as it&apos;s outputted in key/value pairs. Find out more
          below.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* videos  */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/ZYb_ZU8LNxs">
                Asynchronous JavaScript full course. ~ FreeCodeCamp
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/Oive66jrwBs">
                Fetch API introduction. ~ Traversy Media
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/mAqYJF-yxO8">
                Up and running JSON server. Part 1 ~ The Net Ninja
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/VF3TI4Pj_kM">
                Up and running JSON server. Part 2 ~ The Net Ninja
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* Playlist  */}
        <ResourceCard>
          <ResourceCardTitle>Curated Playlist</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu">
                Asynchronous JavaScript. ~ The Net Ninja
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* articles  */}
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://therevealer.hashnode.dev/what-is-an-api">
                What Is An API? ~ Emmanuel Aguchukwu
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* Practice Projects  */}
        <ResourceCard>
          <ResourceCardTitle>Practice Projects</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/opikz5x_1ak">
                Build a food recipe app with fetch API and vanilla JavaScript. ~
                GeetProbin.
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/gIekxGDDD_A">
                Quiz app using Fetch API. ~ Code with Erum
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/GDa8kZLNhJ4">
                Build and deploy 5 JavaScript and React API projects in 10
                hours. ~ JavaScript Mastery
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* others  */}
        <ResourceCard>
          <ResourceCardTitle>Others</ResourceCardTitle>
          <p className="resource-card-body">
            Tips and tricks, tools, cool examples etc.
          </p>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://blog.bitsrc.io/6-apis-frontend-developers-should-know-3a94815c53dd">
                6 APIs Frontend Developers Should Know ~ A Smith
              </a>
              <ResourceBadge>Article</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://jsonplaceholder.typicode.com/">
                JsonPlaceholder - Free fake API for testing and prototyping.
              </a>
              <ResourceBadge>Tool</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://www.postman.com/">
                Postman - Postman is an API platform for building and using
                APIs.
              </a>
              <ResourceBadge>Tool</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/FLnxgSZ0DG4">
                Create your own fake rest API with JSON server. ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/FLnxgSZ0DG4">
                Make your own mock API. ~ Code with Abba Kubow
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default Apis;
