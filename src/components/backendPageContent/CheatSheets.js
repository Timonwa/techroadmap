import React from "react";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";

const CheatSheets = () => {
  return (
    <ResourceSection id="cheatsheets">
      <ResourceSectionHeading>Cheatsheets</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Cheatsheets are short lists of information that you can use to help
          you do or remember something. Below are cheatsheets on what you have
          been learning so far. Do enjoy!
        </p>
      </ResourceSectionBody>

      <ResourceCardLinks>
        <ResourceLink>
          <a href="#" target="_blank"></a>
        </ResourceLink>
      </ResourceCardLinks>
    </ResourceSection>
  );
};

export default CheatSheets;
