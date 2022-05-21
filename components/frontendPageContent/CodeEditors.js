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
import { ResourceCardSubLinks } from "../../styles/styled-components/ResourceCardSubLinks.styled.js";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled.js";

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
          But before diving in, check this video out;
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/kCZQPL8u_YI">
            Best 3 editors for coding and why. ~ Tutmo
          </a>
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* desktop apps*/}
        <ResourceCard id="desktop-apps">
          <ResourceCardTitle>Desktop Apps</ResourceCardTitle>
          <ResourceCardLinks>
            {/* vscode */}
            <ResourceLink>
              VsCode
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
            </ResourceLink>
            {/* sublime */}
            <ResourceLink>
              Sublime
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
            </ResourceLink>
            {/* atom */}
            <ResourceLink>
              Atom
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
                  <a target="_blank" href="https://youtu.be/HPhn12OBUpQ">
                    Top 10 Atom extensions ~ CodeWithWebDev
                  </a>
                  <ResourceBadge>Article</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* Online Editors (Playgrounds) */}
        <ResourceCard id="online-editors">
          <ResourceCardTitle>Online Editors (Playgrounds)</ResourceCardTitle>
          <ResourceCardLinks>
            {/* codepen */}
            <ResourceLink>
              Codepen
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a target="_blank" href="https://codepen.io/">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://www.google.com/amp/s/www.freecodecamp.org/news/how-to-use-codepen">
                    How to Use CodePen - A beginner&apos; guide ~ Jessica
                    Wilkins
                  </a>
                  <ResourceBadge>Article</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/vb9uYBtqmeM">
                    How to use Codepen with Chis Coyier. ~ FreeCodeCamp
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/v1io5m8MxfA">
                    A beginner&apos; guide to Codepen - The basics. ~ Manuel
                    Zavala
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceLink>
            {/* CodeSandbox  */}
            <ResourceLink>
              CodeSandbox
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a target="_blank" href="https://codesandbox.io/">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://codesandbox.io/docs">
                    Documentation
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    target="_blank"
                    href="https://survivejs.com/blog/codesandbox-interview/">
                    CodeSandbox - Online react playground - Interview with Ives
                    van Hoorne. ~ SurviveJs
                  </a>
                  <ResourceBadge>Article</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceLink>
            {/* vscode online  */}
            <ResourceLink>
              VsCode Online
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
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/hdNipVZK53A">
                    VsCode for the web. ~ VsCode
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/FpadVjNj37k">
                    Vscode running in the browser ~ Coder Foundry
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* Mobile Apps */}
        <ResourceCard id="mobile-apps">
          <ResourceCardTitle>Mobile Apps</ResourceCardTitle>
          <ResourceCardLinks>
            {/*  Dcoder */}
            <ResourceLink>
              Dcoder
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
            </ResourceLink>
            {/* visual code editor */}
            <ResourceLink>
              Visual Code
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
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default CodeEditors;
