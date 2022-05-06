import React from "react";
import "./SideBar.scss";
import { FaArrowDown } from "react-icons/fa";

const SideBar = ({ children, handleMenu, openMenu }) => {
  return (
    <nav className="sidebar-nav">
      <div className="sidebar-wrapper">
        {/* side bar toggle */}
        <div className="sidebar-toggle" onClick={handleMenu}>
          <div className="open-sidebar">
            <span>Table of Content</span>
            <FaArrowDown className={`icons ${openMenu ? "" : "active"}`} />
          </div>

          {/* {closeMenu && (
            <div className="close-sidebar">
              <span>Close Menu</span>
              <FaArrowUp className="icons" />
            </div>
          )} */}
        </div>
        {children}
      </div>
    </nav>
  );
};

export default SideBar;
