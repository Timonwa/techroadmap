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

const JsBasics = () => {
  return (
    <ResourceSection id="javascript">
      <ResourceSectionHeading>Javascript</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          It&apos;s time to learn JavaScript, your first programing language.
        </p>
        <p>
          JavaScript along with HTML and CSS make up the Holy Trinity of the web
          when it comes to frontend.
        </p>
        <p>
          It is a programming language used to make web pages dynamic and
          interactive. Those forms and buttons you have been creating that
          don&apos;t perform any actions, now you can make them do something.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/*  videos  */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
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
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/UKgZguxcPE8">
                JavaScript DOM crash course. ~ Code and Create
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/y17RuWkWdn8">
                Learn JavaScript DOM manipulation in 18 minutes. ~
                WebDevSimplified
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  playlist  */}
        <ResourceCard>
          <ResourceCardTitle>Curated Playlist</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET">
                JavaScript Tutorials for beginners. ~ The Net Ninja
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV">
                JavaScript Tutorials for beginners. ~ Telusko
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V">
                JavaScript DOM tutorial ~ The Net Ninja
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLVvjrrRCBy2JS8__NYlhPeaoNz2p1aPEN">
                JavaScript DOM tutorial. ~ Dcode
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX">
                Everything Vanilla JavaScript tutorials plus projects to build.
                ~ Traversy Media
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  Free Courses  */}
        <ResourceCard>
          <ResourceCardTitle>Free Courses</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">
                JavaScript Algorithms and Data Structures. ~ FreeCodeCamp
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.w3schools.com/js/default.asp">
                Learn JavaScript. ~ W3Schools
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  articles  */}
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/">
                Var, Let and Const - What&apos;s the difference? ~ FreeCodeCamp
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  practical projects  */}
        <ResourceCard>
          <ResourceCardTitle>Practice Projects</ResourceCardTitle>
          <ResourceCardLinks>
            {/* <ResourceLink>
                <a target="_blank" href="https://javascript-project-series.vercel.app/">10+ mini projects to boost your Javascript skills. ~
                  Timonwa</a>
              </ResourceLink>   */}
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/dtKciwk_si4">
                10 JavaScript projects in 10 hours. Coding Challenge. ~ Florin
                Pop
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/c5SIG7Ie0dM">
                15 vanilla JavaScript projects. ~ Coding Addict
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.freecodecamp.org/news/javascript-projects-for-beginners">
                40 JavaScript projects for beginners – Easy ideas to get started
                coding JS. ~ FreeCodeCamp
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  others  */}
        <ResourceCard>
          <ResourceCardTitle>Others</ResourceCardTitle>
          <p className="resource-card-body">
            Tips and tricks, tools, cool examples etc.
          </p>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href=""></a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default JsBasics;
