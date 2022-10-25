/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardSubLinks } from "../../styles/styled-components/ResourceCardSubLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const CodeEditors = () => {
  return (
    <ResourceSection id="editor">
      <ResourceSectionHeading>Code Editors</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          For you to start coding, you will need a place to write and run your
          code. This is where code editors come in. A code editor is a text
          editor specifically designed for writing and editing source codes. You
          can find the editors used by most front-end developers below, with the
          most popular being VsCode.
        </p>
        <p>
          But before diving in, check this resource(s) out;
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/kCZQPL8u_YI">
            Best 3 editors for coding and why. ~ Tutmo
          </a>
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/*  Desktop Apps */}
        <ResourceCard id="desktop-apps">
          <ResourceCardTitle>Desktop Apps</ResourceCardTitle>
          <ResourceCardLinks>
            {/* vscode */}
            <ResourceCard>
              <ResourceLink>VsCode</ResourceLink>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://code.visualstudio.com/download">
                    Download link
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://code.visualstudio.com/docs">
                    Documentation
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/fWzp5lZ5CEA">
                    VsCode setup for Html, Css and Javascript ~ Norbert BM Web
                    Development
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/LdF2RcelRg0">
                    15 VsCode extensions for frontend developers ~ Traversy
                    Media
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://www.freecodecamp.org/news/create-your-own-custom-code-snippets/">
                    Create your own custom code snippets ~ Timonwa
                  </a>
                  <ResourceBadge>Article</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceCard>
            {/* sublime */}
            <ResourceCard>
              <ResourceLink>Sublime</ResourceLink>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://www.sublimetext.com/download">
                    Download link
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/-6ikAMmu3Nc">
                    The best Sublime settings and packages ~ Tech With Tim
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceCard>
            {/* atom */}
            <ResourceCard>
              <ResourceLink>Atom</ResourceLink>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a target="_blank" href="https://atom.io/">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/3UMIlcqThj8">
                    Atom editor HTML and CSS setup ~ Daniel Soriano
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/HPhn12OBUpQ">
                    Top 10 Atom extensions ~ CodeWithWebDev
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/aiXNKHKWlmY">
                    10 Atom essential packages ~ Traversy Media
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceCard>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  Online Editors (Playgrounds) */}
        <ResourceCard id="online-editors">
          <ResourceCardTitle>Online Editors (Playgrounds)</ResourceCardTitle>
          <ResourceCardLinks>
            {/* vscode online */}
            <ResourceCard>
              <ResourceLink>VsCode Online</ResourceLink>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a target="_blank" href="https://vscode.dev/">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://code.visualstudio.com/docs/editor/vscode-web">
                    Documentation
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceCard>
            {/* replit  */}
            <ResourceCard>
              <ResourceLink>Replit</ResourceLink>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a target="_blank" href="https://repl.it">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/SDlrhS8O3kI">
                    Introduction to Replit ~ Ritza
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/ZAC0TQEU5gI">
                    Getting started with Replit ~ Replit
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceCard>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  Mobile Apps */}
        <ResourceCard id="mobile-apps">
          <ResourceCardTitle>Mobile Apps</ResourceCardTitle>
          <ResourceCardLinks>
            {/* Dcoder */}
            <ResourceCard>
              <ResourceLink>Dcoder</ResourceLink>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.paprbit.dcoder">
                    Download Link
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceCard>
            {/* Code Editor */}
            <ResourceCard>
              <ResourceLink>Code Editor</ResourceLink>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.rhmsoft.code">
                    Download Link
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceCard>
            {/* visual code editor */}
            <ResourceCard>
              <ResourceLink>Visual Code</ResourceLink>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=lk.visual.code.mobile">
                    Download Link
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceCard>

            {/* pydroid 3 editor */}
            <ResourceCard>
              <ResourceLink>Pydroid 3 - IDE for Python 3</ResourceLink>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=ru.iiec.pydroid3">
                    Download Link
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceCard>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default CodeEditors;
