import React, { useRef, useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import FrontendNav from "../../components/frontendPageContent/FrontendNav";
import Banner from "../../components/Banner";
import Intro from "../../components/frontendPageContent/Intro";
import WhatIs from "../../components/frontendPageContent/WhatIs";
import Roadmap from "../../components/frontendPageContent/Roadmap";
import Networking from "../../components/Networking";
import CodeEditors from "../../components/frontendPageContent/CodeEditors";
import HtmlAndCssBasic from "../../components/frontendPageContent/HtmlAndCssBasic";
import HtmlAndCssAdvanced from "../../components/frontendPageContent/HtmlAndCssAdvanced";
import VersionControl from "../../components/VersionControl";
import DeploymentServices from "../../components/frontendPageContent/DeploymentServices";
import Debugging from "../../components/frontendPageContent/Debugging";
import JsBasics from "../../components/frontendPageContent/JsBasics";
import JsAdvanced from "../../components/frontendPageContent/JsAdvanced";
import CssFrameworks from "../../components/frontendPageContent/CssFrameworks";
import CssProcessors from "../../components/frontendPageContent/CssProcessors";
import Json from "../../components/frontendPageContent/Json";
import Apis from "../../components/frontendPageContent/Apis";
import JsFrameworks from "../../components/frontendPageContent/JsFrameworks";
import DesignResources from "../../components/frontendPageContent/DesignResources";
import OtherResources from "../../components/frontendPageContent/OtherResources";
import WhatNext from "../../components/frontendPageContent/WhatNext";
import Head from "next/head";

const Frontend = () => {
  const title = "";
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

  return (
    <div className="frontendPage">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Frontend Development Roadmap. | Tech Roadmap.</title>
        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Pelumi Akintokun, Timonwa" />
        <meta
          name="title"
          content="Frontend Development Roadmap. | Tech Roadmap."
        />
        <meta
          name="description"
          content="Free videos, articles, guides and other resources to help you become a frontend developer."
        />
        {/* Open Graph / Facebook Meta Tags */}{" "}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:url" content="https://techroadmap.xyz/frontend" />
        <meta
          property="og:title"
          content="Frontend Development Roadmap. | Tech Roadmap."
        />
        <meta
          property="og:description"
          content="Free videos, articles, guides and other resources to help you become a frontend developer."
        />
        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta
          property="twitter:url"
          content="https://techroadmap.xyz/careers/frontend"
        />
        <meta
          property="twitter:title"
          content="Frontend Development Roadmap. | Tech Roadmap."
        />
        <meta
          property="twitter:description"
          content="Free videos, articles, guides and other resources to help you become a frontend developer."
        />
      </Head>
      <SideBar handleMenu={handleMenu} openMenu={openMenu} ref={menuRef}>
        <FrontendNav handleMenu={handleMenu} openMenu={openMenu} />
      </SideBar>
      <Banner title={title} quote={quote} image={image} />
      <main>
        <Intro />
        <WhatIs />
        <Roadmap />
        <Networking />
        <CodeEditors />
        <HtmlAndCssBasic />
        <HtmlAndCssAdvanced />
        <VersionControl />
        <DeploymentServices />
        <Debugging />
        <JsBasics />
        <JsAdvanced />
        <CssFrameworks />
        <CssProcessors />
        <Json />
        <Apis />
        <JsFrameworks />
        <DesignResources />
        <OtherResources />
        <WhatNext />
      </main>
    </div>
  );
};

export default Frontend;
