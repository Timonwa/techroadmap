import React from "react";
import { SideBarLinks } from "../../styles/styled-components/SideBarLinks.styled";
import { SideBarSubLinks } from "../../styles/styled-components/SideBarSubLinks.styled";
import { SideBarTitle } from "../../styles/styled-components/SideBarTitle.styled";
import { SideBarSubtitle } from "../../styles/styled-components/SideBarSubtitle.styled";

const BlockchainNav = ({ handleMenu, openMenu }) => {
  return (
    <SideBarLinks className={`sideBar-links ${openMenu ? "active" : ""}`}>
      {/* what is blockchain  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#what-is">What is Blockchain Dev.</a>
      </SideBarTitle>

      {/* blockchain roadmap  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#roadmap">Blockchain Dev. Roadmap</a>
      </SideBarTitle>

      {/* networking  */}
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

      {/* cheatsheet  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#cheatsheets">Cheatsheets</a>
      </SideBarTitle>

      {/* others  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#other-resource">Other Useful Resource</a>
      </SideBarTitle>

      {/* what next  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#what-next">What Next</a>
      </SideBarTitle>
    </SideBarLinks>
  );
};

export default BlockchainNav;
