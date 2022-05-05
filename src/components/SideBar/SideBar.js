import React, { useState } from "react";
import "./SideBar.scss";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const SideBar = ({ children , handleMenu, openMenu, closeMenu}) => {
  

  return (
    <nav class="sidebar-nav">
      <div class="sidebar-wrapper">
        {/* side bar toggle */}
        <div class="sidebar-toggle" onClick={handleMenu}>
          {openMenu && (
            <div class="open-sidebar">
              <span>Open Menu</span>
              <FaArrowDown class="icons" />
            </div>
          )}
          {closeMenu && (
            <div class="close-sidebar">
              <span>Close Menu</span>
              <FaArrowUp class="icons" />
            </div>
          )}
        </div>
        {children}
      </div>
    </nav>
  );
};

export default SideBar;
