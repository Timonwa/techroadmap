/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const JsFrameworks = () => {
  return (
    <ResourceSection id="js-frameworks">
      <ResourceSectionHeading>Javascript Frameworks</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          A JavaScript framework is an application framework written in
          JavaScript where programmers can manipulate the functions and use them
          for their convenience. They make working with JavaScript easier and
          smoother. So you have to have reasonable knowledge of JavaScript
          before using it.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/*  reactjs */}
        <ResourceCard id="react">
          <ResourceCardTitle>ReactJs</ResourceCardTitle>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://reactjs.org/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/w7ejDZ8SWv8">
                ReactJs crash course. ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/nTeuhbP7wdE">
                ReactJs full course for beginners. ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d">
                Full modern ReactJs tutorial. ~ The Net Ninja
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/Jppuj6M1sJ4">
                React Router crash course. ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/zEQiNFAwDGo">
                React Router 6. What changed and upgrading guide. ~ Academind
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/LlvBzyy-558">
                React hooks course. All React hooks explained. ~ PedroTech
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A">
                React hooks tutorial. ~ Codevolution
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/a_7Z7C_JCyo">
                15 ReactJs projects . ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  vue */}
        <ResourceCard id="vue">
          <ResourceCardTitle>Vue</ResourceCardTitle>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://vuejs.org/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/qZXt1Aom3Cs">
                VueJs crash course. ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/FXpIoQ_rT_c">
                VueJs full course for beginners. ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1">
                VueJs 3 tutorial. ~ The Net Ninja
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=BGAu__J4xoc&list=PL4cUxeGkcC9i371QO_Rtkl26MwtiJ30P2">
                Learn Vuex ~ The Net Ninja
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=w1riyS3i7ik">
                Vuex tutorial Full course ~ Scrimba
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/uqpM7WVTKI4">
                Vue Authentication full course ~ Scalable Scripts.
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PL8p2I9GklV44m5tFH-zjCmTiHeq9GZrby">
                Build a restaurant management project with VueJs. ~ Code step by
                step
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/vsJtN54aA7w">
                Build an invoice app with Vue3, vuex and firebase. ~ John
                Kormanicki
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  angular */}
        <ResourceCard id="angular">
          <ResourceCardTitle>Angular</ResourceCardTitle>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://angular.io/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/3dHNOWTI7H8">
                Angular crash course. ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/2OHbjep_WjQ">
                Angular full course for beginners. ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLFuqtLQvVtC7IU7A_EsOKLCgp8UbJJ89u">
                Angular Js tutorial. ~ The Net Ninja
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/s7bKr_-GLtM">
                Create admin dashboard using Angular. ~ Simplilearn
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  svelte */}
        <ResourceCard id="svelte">
          <ResourceCardTitle>Svelte</ResourceCardTitle>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://svelte.dev/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://svelte.dev/docs">
                Documentation
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=3TVy6GdtNuQ">
                Svelte crash course. ~ Traversy Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=ujbE0mzX-CU">
                Learn the Svelte Javascript framework full course. ~
                FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO">
                Svelte tutorial for beginners. ~ The Net Ninja
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=ydR_M0fw9Xc">
                SvelteKit for beginners. Movie app tutorial ~ Dev Ed
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  AgnosticUI */}
        <ResourceCard id="agnosticui">
          <ResourceCardTitle>AgnosticUI</ResourceCardTitle>
          <p>
            Brand your UI components once with CSS Custom properties then use
            across several UI frameworks like React, Vue 3, or Svelte!
          </p>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://www.agnosticui.com/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=sCLc2ttYJ2A">
                Intro to AgnosticUI
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://css-tricks.com/make-a-component-multiple-frameworks-in-a-monorepo/">
                How to Make a Component That Supports Multiple Frameworks
              </a>
              <ResourceBadge>Article</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://github.com/AgnosticUI/AstroAgnosticUIStarter">
                Astro + AgnosticUI Starter
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://astro.build/themes/index.html">
                Astro Themes (allows you to preview)
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://developtodesign.com/agnosticui-examples">
                AgnosticUI Svelte Examples
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default JsFrameworks;
