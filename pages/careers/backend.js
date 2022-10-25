import React, { useState, useRef, useEffect } from "react";
import SideBar from "../../components/SideBar";
import BackendNav from "../../components/backendPageContent/BackendNav";
import Banner from "../../components/Banner";
import Intro from "../../components/backendPageContent/Intro";
import WhatIs from "../../components/backendPageContent/WhatIs";
import Roadmap from "../../components/backendPageContent/Roadmap";
import Networking from "../../components/Networking";
import CodeEditors from "../../components/backendPageContent/CodeEditors";
import FrontendBasics from "../../components/backendPageContent/FrontendBasics";
import BackendLangs from "../../components/backendPageContent/BackendLangs";
import VersionControl from "../../components/VersionControl";
import DeploymentServices from "../../components/backendPageContent/DeploymentServices";
import Database from "../../components/backendPageContent/Database";
import Frameworks from "../../components/backendPageContent/Frameworks";
import OtherResources from "../../components/backendPageContent/OtherResources";
import WhatNext from "../../components/backendPageContent/WhatNext";
import Head from "next/head";

const BackendPage = () => {
  const quote =
    '"Websites promote you 24/7: No employee will do that." – Paul Cookson';
  const image =
    "https://i.ibb.co/vYLYxmH/pankaj-patel-Ylk5n-nd9d-A-unsplash.jpg";

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (openMenu && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openMenu]);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="backendPage">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>
          How to Become a Backend Developer in {currentYear}. | Backend
          Developer Roadmap.
        </title>

        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Timonwa Akintokun" />
        <meta
          name="title"
          content={`How to Become a Backend Developer in ${currentYear}. | Backend Developer Roadmap.`}
        />
        <meta
          name="description"
          content={`This backend roadmap will guide you in learning the backend web development industry tools, programming languages and techniques to help you become a backend developer and other helpful backend developer resources in ${currentYear}.`}
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:url" content="https://www.techroadmap.xyz/backend" />
        <meta
          property="og:title"
          content={`How to Become a Backend Developer in ${currentYear}. | Backend Developer Roadmap.`}
        />
        <meta
          property="og:description"
          content={`This backend roadmap will guide you in learning the backend web development industry tools, programming languages and techniques to help you become a backend developer and other helpful backend developer resources in ${currentYear}.`}
        />

        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta
          property="twitter:url"
          content="https://www.techroadmap.xyz/careers/backend"
        />
        <meta
          property="twitter:title"
          content={`How to Become a Backend Developer in ${currentYear}. | Backend Developer Roadmap.`}
        />
        <meta
          property="twitter:description"
          content={`This backend roadmap will guide you in learning the backend web development industry tools, programming languages and techniques to help you become a backend developer and other helpful backend developer resources in ${currentYear}.`}
        />
      </Head>
      <SideBar handleMenu={handleMenu} openMenu={openMenu} ref={menuRef}>
        <BackendNav handleMenu={handleMenu} openMenu={openMenu} />
      </SideBar>
      <Banner quote={quote} image={image} />
      <main>
        <Intro />
        <WhatIs />
        <Roadmap />
        <Networking />
        <CodeEditors />
        <FrontendBasics />
        <BackendLangs />
        <VersionControl />
        <DeploymentServices />
        <Database />
        <Frameworks />
        <OtherResources />
        <WhatNext />
      </main>
    </div>
  );
};

export default BackendPage;
