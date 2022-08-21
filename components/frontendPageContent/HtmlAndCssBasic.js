/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled.js";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled.js";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled.js";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled.js";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled.js";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled.js";

import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled.js";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled.js";
import { ResourceCardBody } from "../../styles/styled-components/ResourceCardBody.styled.js";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled.js";

const HtmlAndCssBasic = () => {
  return (
    <ResourceSection id="css-beginners">
      <ResourceSectionHeading>
        Html and Css (Beginner&apos;s Level)
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          HTML and CSS are the 2 most important languages when it comes to
          building a website. HTML which stands for Hypertext Markup Language
          provides the structure of the page and CSS which stands for Cascading
          Style Sheets determine the visual layout of web pages. These are the
          first set of languages you will learn as a frontend developer.
        </p>
        <p>
          You will find enough resources below to help you learn, along with
          projects you can build to practice and showcase your newly acquired
          skills.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* videos */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/qz0aGYrrlhU">
                Html tutorial for beginners - Crash course. ~ Programming with
                Mosh
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/UB1O30fR-EE">
                Html crash course for absolute beginners. ~ Traversy Media
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/yfoY53QXEnI">
                CSS crash course for absolute beginners. ~ Traversy Media
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/vQWlgd7hV4A">
                Learn Html and CSS for beginners - Crash course. ~ Dev Ed
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/mU6anWqZJcc">
                Html and CSS full course from scratch. ~ FreeCodeCamp
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  playlist */}
        <ResourceCard>
          <ResourceCardTitle>Curated Playlist</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G">
                Html and CSS Crash course tutorial. ~ The Net Ninja
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL7TLF4T4Tq2RCWa-ZRkEWXVtXteyZ2CjK">
                Css3 Full Tutorial. ~ Dev Dreamer
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  Free Courses */}
        <ResourceCard>
          <ResourceCardTitle>Free Courses</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.freecodecamp.org/learn/responsive-web-design/">
                Responsive Website Design. ~ FreeCodeCamp.
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.w3schools.com/html/default.asp">
                Learn Html. ~ W3Schools
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.w3schools.com/css/default.asp">
                Learn Css. ~ W3Schools
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  articles */}
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://blog.timonwa.com/all-vs-root-vs-html-vs-body-selectors">
                All vs root vs html vs body selectors. ~ Timonwa
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://blog.timonwa.com/using-css-variables-like-a-pro">
                Using CSS Variables like a Pro. ~ Timonwa
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  practice projects */}
        <ResourceCard>
          <ResourceCardTitle>Practice Projects</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLt5nFcZSSiWVptXtYJssP6K3HoSl0cp-O">
                50+ Html and CSS projects. ~ Mahdi
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.frontendmentor.io/challenges?languages=HTML|CSS&types=free,free-plus">
                Frontend Challenges - Improve your front-end coding skills by
                building real projects Solve real-world HTML, CSS and JavaScript
                challenges whilst working to professional designs.
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://devchallenges.io">
                DevChallenges - Web Development Resources and Community that
                help you to become a Web Developer by working with Real-life
                projects and practices.
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://www.codewell.cc/">
                Codewell - Improve your HTML and CSS skills by practising on
                real design templates.
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  others */}
        <ResourceCard>
          <ResourceCardTitle>Others</ResourceCardTitle>
          <ResourceCardBody>
            Tips and tricks, tools, cool examples etc.
          </ResourceCardBody>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/c/OnlineTutorials4Designers">
                Creative Css and Javascript projects. ~ Online Tutorials.
              </a>
              <ResourceBadge>Youtube Channel</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default HtmlAndCssBasic;
