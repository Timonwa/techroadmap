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

const CssFrameworks = () => {
  return (
    <ResourceSection id="css-frameworks">
      <ResourceSectionHeading>
        CSS Frameworks and Libraries
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          CSS frameworks and libraries are reusable codes written by someone
          else that you can use instead of writing your CSS code from scratch.
        </p>
        <p>
          They aid you in having a more standards-compliant and responsive web
          design using the CSS language. And some even come with extra features
          that have JavaScript integrated into them. Check out some of the most
          popular ones below.
        </p>
        <p>
          Note: You do not need to learn all of them, you just have to know at
          least one CSS-only and one CSS-Js framework/library.
        </p>
        <p>
          Before picking your first framework/library, check these videos out;
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/LimOOe6I4eo">
            What are frameworks and libraries. ~ Codeacademy
          </a>
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/N6SXu86bJ6I">
            Top CSS frameworks to check out in 2021. ~ Adrian Twarog
          </a>
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* <!--* bootstrap --> */}
        <ResourceCard id="bootstrap">
          <ResourceCardTitle>
            Bootstrap <ResourceBadge>Css and Js</ResourceBadge>
          </ResourceCardTitle>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://getbootstrap.com/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/4sosXZsdy-s">
                Bootstrap 5 beginner crash course. ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/-qfEOE4vtxE">
                Bootstrap full course. ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR">
                Bootstrap 5 tutorial. ~ The Net Ninja
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/TJF4ldO91n4">
                Build a complete Bootstrap website. ~ Drew Ryan
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL1MK7nFniZZYRV5sign661Pq--3DbF9Bn">
                Html, Css and Bootstrap projects. ~ Ansar Ali
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* <!--* styled components --> */}
        <ResourceCard id="styled">
          <ResourceCardTitle>
            Styled Components<ResourceBadge>Css only</ResourceBadge>
          </ResourceCardTitle>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://www.styled-components.com/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://styled-components.com/docs">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=02zO0hZmwnw">
                Styled Components crash course. ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLC3y8-rFHvwgu-G08-7ovbN9EyhF_cltM">
                React Styled Components. ~ Codevolution
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* <!--* tailwind --> */}
        <ResourceCard id="tailwind">
          <ResourceCardTitle>
            Tailwind<ResourceBadge>Css only</ResourceBadge>
          </ResourceCardTitle>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://tailwindcss.com/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/UBOj6rqRUME">
                Tailwind Css crash course. ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/4wGmylafgM4">
                Tailwind Css tutorials for beginners. ~ Scrimba
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw">
                Tailwind CSS tutorial. ~ The Net Ninja
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/Vp6GC3jKG20">
                Build and deploy a personal Portfolio using Tailwind CSS. ~
                Design Course
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/oWsbAI8pGc8">
                Build Facebook UI clone using Tailwind Css. ~ Ithinktechnologies
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* <!--* chakra ui --> */}
        <ResourceCard id="chakra">
          <ResourceCardTitle>
            Chakra UI<ResourceBadge>Css only</ResourceBadge>
          </ResourceCardTitle>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://chakra-ui.com">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://chakra-ui.com/guides/first-steps">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLdUwL9O_dBokaW-aavCp3ppd6ynTs-gd2">
                Chakra UI ~ Jesus take the Compiler
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=dj6rPuWXoQM">
                Build a React Responsive Portfolio App Using Chakra UI ~ Codepur
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* <!--* Bulma --> */}
        <ResourceCard id="bulma">
          <ResourceCardTitle>
            Bulma<ResourceBadge>Css only</ResourceBadge>
          </ResourceCardTitle>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://bulma.io/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/IiPQYQT2-wg">
                Bulma Css crash course. ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/LBzZLzu2GKo">
                Bulma full course for beginners. ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9iXItWKbaQxcyDT1u6E7a8a">
                Bulma CSS tutorial. ~ The Net Ninja
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/RD2m0FkTS_o">
                Admin dashboard template design with Bulma. ~ FrontEndFunn
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/hiTxsjxHIMY">
                How to build a company website with bulma. ~ Duomly
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default CssFrameworks;
