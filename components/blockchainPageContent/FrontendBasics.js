/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const FrontendBasics = () => {
  return (
    <ResourceSection id="frontend">
      <ResourceSectionHeading>
        Basics of Frontend Development
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Learning the basics of frontend development is not compulsory, but it
          does help to understand how the frontend works since your code will be
          interacting with the frontend most of the time. The languages used in
          frontend development are Html, CSS and Javascript. You can learn more
          about these below:
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* videos */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/UB1O30fR-EE">
                Html crash course for absolute beginners. ~ Traversy Media
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/yfoY53QXEnI">
                Css crash course for absolute beginners. ~ Traversy Media
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/mU6anWqZJcc">
                Html and Css full course from scratch. ~ FreeCodeCamp
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/PkZNo7MFNFg">
                Learn JavaScript. Full course for beginners. ~ FreeCodeCamp
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/ResWVWI333o">
                Javascript for web designers. ~ Envato Tuts
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* playlist */}
        <ResourceCard>
          <ResourceCardTitle>Curated Playlist</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G">
                Html and Css Crash course tutorial. ~ The Net Ninja
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL7TLF4T4Tq2RCWa-ZRkEWXVtXteyZ2CjK">
                Css3 Full Tutorial. ~ Dev Dreamer
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV">
                JavaScript Tutorials for beginners. ~ Telusko
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* practical projects */}
        <ResourceCard>
          <ResourceCardTitle>Practice Projects</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.frontendmentor.io/challenges">
                Frontend Challenges - Improve your front-end coding skills by
                building real projects Solve real-world HTML, CSS and JavaScript
                challenges whilst working to professional designs.
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/c5SIG7Ie0dM">
                15 vanilla JavaScript projects. ~ Coding Addict
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default FrontendBasics;
