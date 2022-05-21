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
    <nav className={styles.mainNav}>
      <div className={`${styles.navWrapper} navWrapper`}>
        {/* website logo */}
        <div className={styles.navLogo}>
          <Link href="/">
            <a>
              <p>TECH ROADMAP</p>
            </a>
          </Link>
          {/* <a href="#"><h4>NavBar</h4></a> */}
          {/* <a href="#"><img src="" alt="brand image"></a> */}
        </div>

        {/* menu on large screen */}
        <div className={`${styles.navLinks} ${openMenu ? "" : styles.active}`}>
          {/* nav link cntr */}
          <ul className={styles.navLinkWrapper}>
            {/* nav links */}
            <li onClick={handleMenu}>
              <Link className={styles.navLink} href="/">
                <a>Home</a>
              </Link>
            </li>
            <li onClick={handleMenu}>
              <Link className={styles.navLink} href="/careers">
                <a>Careers</a>
              </Link>
            </li>
            <li onClick={handleMenu}>
              <Link className={styles.navLink} href="/contribute">
                <a>Contribute</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* burger menu on small screen */}
        <div className={styles.burgerMenu}>
          {/* burger menu toggle */}
          <div className={styles.burgerMenuToggle} onClick={handleMenu}>
            {openMenu && <FaBars className={(styles.icons, styles.open)} />}
            {closeMenu && <FaTimes className={(styles.icons, styles.close)} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
