import React, { useState } from "react";
import "./SideBar.scss";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [closeMenu, setCloseMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
    setCloseMenu(!closeMenu);
  };

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
      </div>
      {/* {children} */}
    </nav>
  );
};

export default SideBar;
