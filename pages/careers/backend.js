import React, { useState } from "react";
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
  const title = "";
  const quote =
    '"Websites promote you 24/7: No employee will do that." – Paul Cookson';
  const image =
    "https://i.ibb.co/vYLYxmH/pankaj-patel-Ylk5n-nd9d-A-unsplash.jpg";

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="backendPage">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>Backend Development Roadmap. | Tech Roadmap.</title>

        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Pelumi Akintokun, Timonwa" />
        <meta
          name="title"
          content="Backend Development Roadmap. | Tech Roadmap."
        />
        <meta
          name="description"
          content="Free videos, articles, guides and other resources to help you become a backend developer."
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:url" content="https://techroadmap.xyz/backend" />
        <meta
          property="og:title"
          content="Backend Development Roadmap. | Tech Roadmap."
        />
        <meta
          property="og:description"
          content="Free videos, articles, guides and other resources to help you become a backend developer."
        />

        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta
          property="twitter:url"
          content="https://techroadmap.xyz/careers/backend"
        />
        <meta
          property="twitter:title"
          content="Backend Development Roadmap. | Tech Roadmap."
        />
        <meta
          property="twitter:description"
          content="Free videos, articles, guides and other resources to help you become a backend developer."
        />
      </Head>
      <SideBar handleMenu={handleMenu} openMenu={openMenu}>
        <BackendNav handleMenu={handleMenu} openMenu={openMenu} />
      </SideBar>
      <Banner title={title} quote={quote} image={image} />
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
