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

const CssProcessors = () => {
  return (
    <>
      <ResourceSection id="css-processors">
        <ResourceSectionHeading>CSS Processors</ResourceSectionHeading>

        <ResourceSectionBody>
          <p>
            CSS Processors allow you to write css-like codes which you can then
            compile into normal CSS code. You get to write CSS as if you were
            writing a programming language which in turn offers you a wide
            variety of logical syntax. Don&apos; fret, it&apos; easier than it
            sounds. Check them out below.
          </p>
        </ResourceSectionBody>

        <ResourceSectionLinks>
          {/*  sass  */}
          <ResourceCard id="sass">
            <ResourceCardTitle>Sass</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://sass-lang.com/">
                  Website.
                </a>
                <ResourceBadge>Link</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://sass-lang.com/documentation">
                  Documentation.
                </a>
                <ResourceBadge>Link</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://youtu.be/nu5mdN2JIwM">
                  Sass crash course. ~ Traversy Media
                </a>
                <ResourceBadge>Video</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://youtube.com/playlist?list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb">
                  Complete Sass tutorial. ~ The Net Ninja
                </a>
                <ResourceBadge>Video</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/*  Less  */}
          <ResourceCard id="less">
            <ResourceCardTitle>Less</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://lesscss.org/">
                  Website.
                </a>
                <ResourceBadge>Link</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://lesscss.org/usage/">
                  Documentation.
                </a>
                <ResourceBadge>Link</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://youtu.be/YD91G8DdUsw">
                  Less CSS Preprocessor for beginners. ~ Traversy Media
                </a>
                <ResourceBadge>Video</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/*  postCSS  */}
          <ResourceCard id="postcss">
            <ResourceCardTitle>PostCSS</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://postcss.org/">
                  Website.
                </a>
                <ResourceBadge>Link</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://github.com/postcss/postcss/tree/main/docs">
                  Documentation.
                </a>
                <ResourceBadge>Link</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://youtu.be/ohJcZW60br0">
                  Learn how to power up your CSS with PostCSS. ~ Kevin Powell
                </a>
                <ResourceBadge>Video</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>
        </ResourceSectionLinks>
      </ResourceSection>
    </>
  );
};

export default CssProcessors;
