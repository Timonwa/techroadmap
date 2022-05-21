import React from "react";
import { SideBarLinks } from "../../styles/styled-components/SideBarLinks.styled";
import { SideBarSubLinks } from "../../styles/styled-components/SideBarSubLinks.styled";
import { SideBarTitle } from "../../styles/styled-components/SideBarTitle.styled";
import { SideBarSubtitle } from "../../styles/styled-components/SideBarSubtitle.styled";

const FrontendNav = ({ handleMenu, openMenu }) => {
  return (
    <SideBarLinks className={`sideBar-links ${openMenu ? "active" : ""}`}>
      {/* what is frontend */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#what-is">What is Frontend Dev.</a>
      </SideBarTitle>

      {/* frontend roadmap */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#roadmap">Frontend Dev. Roadmap</a>
      </SideBarTitle>

      {/* networking */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#networking">Networking</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#communities">Tech Communities</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#bootcamps">Bootcamps</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#internships">Internship/Mentorship</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* editors */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#editor">Code Editors</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#desktop-apps">Desktop Apps</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#online-editors">Online Editors</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#mobile-apps">Mobile Apps</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* html and css (beginner&apos; level) */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#css-beginners">Html and Css - Beginner</a>
      </SideBarTitle>

      {/* html and css (advanced level) */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#css-advanced">Html and Css - Advanced</a>
      </SideBarTitle>

      {/* version control */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#version-control">Version Control</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#git">Git</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#github">GitHub</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#git-desktop">GitHub Desktop</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#gitlab">GitLab</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#bitbucket">BitBucket</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* deployment services */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#deployment">Deployment Services</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#netlify">Netlify</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#vercel">Vercel</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#github-pages">GitHub Pages</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* debugging */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#debugging">Debugging</a>
      </SideBarTitle>

      {/* javascript */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#javascript">Javascript</a>
      </SideBarTitle>

      {/* javascript advanced */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#javascript-advanced">Javascript Advanced</a>
      </SideBarTitle>

      {/* css frameworks and libraries */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#css-frameworks">Css Frameworks and Libraries</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#bootstrap">Bootstrap</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#styled">Styled Components</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#tailwind">Tailwind</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#chakra">Chakra UI</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#bulma">Bulma</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* css pre-processors */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#css-processors">Css Processors</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#less">Less</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#sass">Sass</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#postcss">PostCSS</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* json and json server */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#json">Json</a>
      </SideBarTitle>

      {/* apis */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#apis">APIs</a>
      </SideBarTitle>

      {/* js frameworks and libraries */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#js-frameworks">Javascript Frameworks</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#react">React</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#vue">Vue</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#angular">Angular</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#svelte">Svelte</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#agnosticui">AgnosticUI</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* design resources */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#design">Design Resources</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#fonts">Fonts</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#icons">Icons</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#photos">Photos</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#illustrations">Illustrations and Patterns</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#simplify-css">Simplify CSS</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#gradients">Gradients and Colors</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#others">Others</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* others */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#other-resource">Other Useful Resource</a>
      </SideBarTitle>

      {/* what next */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#what-next">What Next</a>
      </SideBarTitle>
    </SideBarLinks>
  );
};

export default FrontendNav;
