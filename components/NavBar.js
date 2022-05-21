import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [closeMenu, setCloseMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
    setCloseMenu(!closeMenu);
  };

  return (
    <nav className="mainNav">
      <div className="navWrapper">
        {/* website logo */}
        <div className="navLogo">
          <Link href="/">
            <a>
              <p>TECH ROADMAP</p>
            </a>
          </Link>
          {/* <a href="#"><h4>NavBar</h4></a> */}
          {/* <a href="#"><img src="" alt="brand image"></a> */}
        </div>

        {/* menu on large screen */}
        <div className={`navLinks ${openMenu ? "" : "active"}`}>
          {/* nav link cntr */}
          <ul className="navLinkWrapper">
            {/* nav links */}
            <li onClick={handleMenu}>
              <Link className="navLink" href="/">
                <a>Home</a>
              </Link>
            </li>
            <li onClick={handleMenu}>
              <Link className="navLink" href="/careers">
                <a>Careers</a>
              </Link>
            </li>
            <li onClick={handleMenu}>
              <Link className="navLink" href="/contribute">
                <a>Contribute</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* burger menu on small screen */}
        <div className="burgerMenu">
          {/* burger menu toggle */}
          <div className="burgerMenuToggle" onClick={handleMenu}>
            {openMenu && <FaBars className="icons open" />}
            {closeMenu && <FaTimes className="icons close" />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
