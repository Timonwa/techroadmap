/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled.js";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const HtmlAndCssAdvanced = () => {
  return (
    <ResourceSection id="css-advanced">
      <ResourceSectionHeading>
        Html and Css (Advanced Level)
      </ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Now that you have learned the basics of HTML and CSS, it&apos; time to
          level up. Learn more on making your webpages more responsive and
          compatible on all devices using CSS Flexbox and Grid.
        </p>
        <p>
          You can also make your pages more fun with CSS transitions and
          animations. Some cool projects on CSS animations will be listed down
          below too to inspire you.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* videos */}
        <ResourceCard>
          <ResourceCardTitle>Videos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/3YW65K6LcIA">
                Css Flexbox crash course. ~ Traversy Media
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/tXIhdp5R7sc">
                Css Flexbox crash course. ~ FreeCodeCamp
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/EFafSYg-PkI">
                Css Grid crash course. ~ Dev Ed
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/t6CBKf8K_Ac">
                Grid crash course. ~ FreeCodeCamp
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/LCEgHntqBps">
                Learn Css animation Tutorial. ~ Scrimba
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
                href="https://youtube.com/playlist?list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5">
                Css animations tutorial. ~ The Net Ninja
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://youtube.com/playlist?list=PLqGj3iMvMa4LvJ8VctoXnPI0dtE40wfid">
                Css animations series. ~ DevTips
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

        {/* articles */}
        <ResourceCard>
          <ResourceCardTitle>Articles</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://www.simplilearn.com/tutorials/css-tutorial/advanced-css">Advanced CSS Tutorial To Understand The A-Z of CSS. ~ Aryan Gupta, Simplilearn
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
                href="https://www.youtube.com/playlist?list=PLSJxovi1IyDH-pPIe0OF0z_mW-WVdhmhx">
                100 Complete Responsive Website Designs ~ Mr. Web Designer
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/vNc2s-ic1cc">
                6 handy Css animation projects. ~ Envato Tuts+
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* others */}
        <ResourceCard>
          <ResourceCardTitle>Others</ResourceCardTitle>
          <p className="resource-card-body">
            Tips and tricks, tools, cool examples etc.
          </p>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.websiteplanet.com/webtools/responsive-checker/">
                Responsive Checker - Make sure your website looks perfect no
                matter what device your visitors are using to view it!
              </a>
              <ResourceBadge>Tool</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://responsively.app/">
                Responsively App - A dev-tool that aids faster and precise
                responsive web development.
              </a>
              <ResourceBadge>Tool</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default HtmlAndCssAdvanced;
