import React from "react";
import SidebarLinks from "../../styles/styled-components/SideBarLinks.styled";
import SidebarSubLinks from "../../styles/styled-components/SideBarSubLinks.styled";
import SidebarTitle from "../../styles/styled-components/SideBarTitle.styled";
import SidebarSubtitle from "../../styles/styled-components/SideBarSubtitle.styled";

const FrontendNav = () => {
  return (
    <SidebarLinks class="sidebar-links">
      {/* what is frontend */}
      <SidebarTitle>
        <a href="#what-is">What is Frontend Dev.</a>
      </SidebarTitle>

      {/* frontend roadmap */}
      <SidebarTitle>
        <a href="#roadmap">Frontend Dev. Roadmap</a>
      </SidebarTitle>

      {/* networking */}
      <SidebarTitle>
        <a href="#networking">Networking</a>
        <SidebarSubLinks>
          <SidebarSubtitle>
            <a href="#communities">Tech Communities</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#bootcamps">Bootcamps</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#internships">Internship/Mentorship</a>
          </SidebarSubtitle>
        </SidebarSubLinks>
      </SidebarTitle>

      {/* editors */}
      <SidebarTitle>
        <a href="#editor">Code Editors</a>
        <SidebarSubLinks>
          <SidebarSubtitle>
            <a href="#desktop-apps">Desktop Apps</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#online-editors">Online Editors</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#mobile-apps">Mobile Apps</a>
          </SidebarSubtitle>
        </SidebarSubLinks>
      </SidebarTitle>

      {/* html and css (beginner's level) */}
      <SidebarTitle>
        <a href="#css-beginners">Html and Css - Beginner</a>
      </SidebarTitle>

      {/* html and css (advanced level) */}
      <SidebarTitle>
        <a href="#css-advanced">Html and Css - Advanced</a>
      </SidebarTitle>

      {/* version control */}
      <SidebarTitle>
        <a href="#version-control">Version Control</a>
        <SidebarSubLinks>
          <SidebarSubtitle>
            <a href="#git">Git</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#github">GitHub</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#git-desktop">GitHub Desktop</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#gitlab">GitLab</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#bitbucket">BitBucket</a>
          </SidebarSubtitle>
        </SidebarSubLinks>
      </SidebarTitle>

      {/* deployment services */}
      <SidebarTitle>
        <a href="#deployment">Deployment Services</a>
        <SidebarSubLinks>
          <SidebarSubtitle>
            <a href="#netlify">Netlify</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#vercel">Vercel</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#github-pages">GitHub Pages</a>
          </SidebarSubtitle>
        </SidebarSubLinks>
      </SidebarTitle>

      {/* debugging */}
      <SidebarTitle>
        <a href="#debugging">Debugging</a>
      </SidebarTitle>

      {/* javascript */}
      <SidebarTitle>
        <a href="#javascript">Javascript</a>
      </SidebarTitle>

      {/* javascript advanced */}
      <SidebarTitle>
        <a href="#javascript-advanced">Javascript Advanced</a>
      </SidebarTitle>

      {/* css frameworks and libraries */}
      <SidebarTitle>
        <a href="#css-frameworks">Css Frameworks and Libraries</a>
        <SidebarSubLinks>
          <SidebarSubtitle>
            <a href="#bootstrap">Bootstrap</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#styled">Styled Components</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#tailwind">Tailwind</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#chakra">Chakra UI</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#bulma">Bulma</a>
          </SidebarSubtitle>
        </SidebarSubLinks>
      </SidebarTitle>

      {/* css pre-processors */}
      <SidebarTitle>
        <a href="#css-processors">Css Processors</a>
        <SidebarSubLinks>
          <SidebarSubtitle>
            <a href="#less">Less</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#sass">Sass</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#postcss">PostCSS</a>
          </SidebarSubtitle>
        </SidebarSubLinks>
      </SidebarTitle>

      {/* json and json server */}
      <SidebarTitle>
        <a href="#json">Json</a>
      </SidebarTitle>

      {/* apis */}
      <SidebarTitle>
        <a href="#apis">APIs</a>
      </SidebarTitle>

      {/* js frameworks and libraries */}
      <SidebarTitle>
        <a href="#js-frameworks">Javascript Frameworks</a>
        <SidebarSubLinks>
          <SidebarSubtitle>
            <a href="#react">React</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#vue">Vue</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#angular">Angular</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#svelte">Svelte</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#agnosticui">AgnosticUI</a>
          </SidebarSubtitle>
        </SidebarSubLinks>
      </SidebarTitle>

      {/* design resources */}
      <SidebarTitle>
        <a href="#design">Design Resources</a>
        <SidebarSubLinks>
          <SidebarSubtitle>
            <a href="#fonts">Fonts</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#icons">Icons</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#photos">Photos</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#illustrations">Illustrations and Patterns</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#simplify-css">Simplify CSS</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#gradients">Gradients and Colors</a>
          </SidebarSubtitle>
          <SidebarSubtitle>
            <a href="#others">Others</a>
          </SidebarSubtitle>
        </SidebarSubLinks>
      </SidebarTitle>

      {/* cheatsheet */}
      <SidebarTitle>
        <a href="#cheatsheets">Cheatsheets</a>
      </SidebarTitle>

      {/* others */}
      <SidebarTitle>
        <a href="#other-resource">Other Useful Resource</a>
      </SidebarTitle>

      {/* what next */}
      <SidebarTitle>
        <a href="#what-next">What Next</a>
      </SidebarTitle>
    </SidebarLinks>
  );
};

export default FrontendNav;
