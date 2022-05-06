import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [closeMenu, setCloseMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
    setCloseMenu(!closeMenu);
  };

  return (
    <nav className="main-nav">
      <div className="nav-wrapper">
        {/* website logo */}
        <div className="nav-logo">
          <NavLink to="/">
            <p>TECH ROADMAP</p>
          </NavLink>
          {/* <a to="#"><h4>NavBar</h4></a> */}
          {/* <a to="#"><img src="" alt="brand image"></a> */}
        </div>

        {/* menu on large screen */}
        <div className={`nav-links ${openMenu ? "" : "active"}`}>
          {/* nav link cntr */}
          <ul className="nav-link-wrapper">
            {/* nav links */}
            <li onClick={handleMenu}>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink className="nav-link" to="/careers">
                Careers
              </NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink className="nav-link" to="/contribute">
                Contribute
              </NavLink>
            </li>
          </ul>
        </div>

        {/* burger menu on small screen */}
        <div className="burger-menu">
          {/* burger menu toggle */}
          <div className="burger-menu-toggle" onClick={handleMenu}>
            {openMenu && <FaBars className="icons open" />}
            {closeMenu && <FaTimes className="icons close" />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
