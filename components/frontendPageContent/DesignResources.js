/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceCardSubLinks } from "../../styles/styled-components/ResourceCardSubLinks.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";

const DesignResources = () => {
  return (
    <ResourceSection id="design">
      <ResourceSectionHeading>Design Resources</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Below are tools you can use to aid the creative process from, free
          photos to icons, fonts and other goodies. Explore them.
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/* Fonts */}
        <ResourceCard id="fonts">
          <ResourceCardTitle>Fonts</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://fonts.google.com/">
                Google Fonts
              </a>
              <ResourceBadge>Free</ResourceBadge>
              <ResourceCardSubLinks className="resourceLink-sublinks">
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/qgmLDPLApBY">
                    Add custom fonts to your website using Google Fonts. ~ Dcode
                  </a>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://www.fontshare.com/">
                Font share - Fontshare is a free fonts service from ITF, making
                quality fonts accessible to all.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* icons */}
        <ResourceCard id="icons">
          <ResourceCardTitle>Icons</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://fonts.google.com/icons">
                Google Material Icons
              </a>
              <ResourceBadge>Free</ResourceBadge>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/QBSSpw-GH2w">
                    How to use Google Material Icons. ~ Leanne R
                  </a>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://fontawesome.com/">
                Font Awesome Icons
              </a>
              <ResourceBadge>Free</ResourceBadge>
              <ResourceCardSubLinks>
                <ResourceLink>
                  <a target="_blank" href="https://youtu.be/nHKjsqw0zw8">
                    How to add Fontawesone to your html. ~ KodeBase
                  </a>
                </ResourceLink>
              </ResourceCardSubLinks>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://iconstore.co/">
                IconStore - Free Icons by First-Class Designers.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://www.flaticon.com/">
                FlatIcons - Access +6.7M vector icons {"&"} stickers.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://getloaf.io/pricing/">
                Loaf - Animated SVG icons.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://seeklogo.com">
                Seeklogo - Seeklogo is the world&apos; best brand logo and
                vector logo template source.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://fontello.com/">
                Fontello - icon fonts generator
              </a>
              <ResourceBadge>Free</ResourceBadge>
              <ResourceBadge>Tool</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* stock photos */}
        <ResourceCard id="photos">
          <ResourceCardTitle>Photos</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://unsplash.com/">
                Unsplash - Beautiful free images and photos.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://www.pexels.com/">
                Pexels - Free stock photos, images {"&"} videos shared by
                creators.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://flickr.com/">
                Flickr - Beautiful free images and photos.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* illustrations */}
        <ResourceCard id="illustrations">
          <ResourceCardTitle>Illustrations and Patterns</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://undraw.co/">
                Undraw - Open-source illustrations for any idea you can imagine
                and create.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://error404.fun/">
                404 Illustrations - Royalty free illustrations for 404 pages.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://doodad.dev/pattern-generator/">
                Doodad Pattern Generator.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* simplify css */}
        <ResourceCard id="simplify-css">
          <ResourceCardTitle>Simplify Css</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://neumorphism.io/#e0e0e0">
                Neumorphism maker - Generate Soft-UI CSS code.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://animista.net/">
                Animista - CSS animations on demand.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://csslayout.io/">
                CSS Layout - Popular layouts and patterns made with CSS.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://bennettfeely.com/clippy/">
                Clippy - CSS clip-path maker.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* gradients and color schemes */}
        <ResourceCard id="gradients">
          <ResourceCardTitle>Gradients and Color schemes.</ResourceCardTitle>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.sorincovor.pigments">
                Pigments - Color scheme creator.
              </a>
              <ResourceBadge>Free</ResourceBadge>
              <ResourceBadge>App</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.apps.offbeat.colorpalette">
                Colour Palette - Extract/Create gradients and colors.
              </a>
              <ResourceBadge>Free</ResourceBadge>
              <ResourceBadge>App</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://coolors.co/">
                Coolors - Generate or browse beautiful color combinations for
                your designs.
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* Others */}
        <ResourceCard id="others">
          <ResourceCardTitle>Others</ResourceCardTitle>
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

export default DesignResources;
