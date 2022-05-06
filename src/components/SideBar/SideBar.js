import React from "react";
import "./SideBar.scss";
import { FaArrowDown } from "react-icons/fa";

const SideBar = ({ children, handleMenu, openMenu }) => {
  return (
    <nav class="sidebar-nav">
      <div class="sidebar-wrapper">
        {/* side bar toggle */}
        <div class="sidebar-toggle" onClick={handleMenu}>
          <div class="open-sidebar">
            <span>Table of Content</span>
            <FaArrowDown className={`icons ${openMenu ? "" : "active"}`} />
          </div>

          {/* {closeMenu && (
            <div class="close-sidebar">
              <span>Close Menu</span>
              <FaArrowUp class="icons" />
            </div>
          )} */}
        </div>
        {children}
      </div>
    </nav>
  );
};

export default SideBar;
