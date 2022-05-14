import React, { useEffect, useState } from "react";
import NavSpace from "../../components/NavBar/NavSpace";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import BackendNav from "../../components/backendPageContent/BackendNav";
import Banner from "../../components/Banner/Banner";
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
import Cheatsheets from "../../components/backendPageContent/Cheatsheets";
import WhatNext from "../../components/backendPageContent/WhatNext";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import Helmet from "react-helmet";

const BackendPage = () => {
  const title = "";
  const quote =
    '"Websites promote you 24/7: No employee will do that." – Paul Cookson';
  const image =
    "https://i.ibb.co/vYLYxmH/pankaj-patel-Ylk5n-nd9d-A-unsplash.jpg";

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [openMenu, setOpenMenu] = useState(true);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="backend-page">
      <Helmet>
        <title>Backend Development Roadmap. | Tech Roadmap.</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content="Backend Development Roadmap. | Tech Roadmap."
        />
        <meta
          name="description"
          content="Free videos, articles, guides and other resources to help you become a backend developer."
        />
        {/* Open Graph / Facebook Meta Tags */}

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
        <meta
          property="twitter:url"
          content="https://techroadmap.xyz/backend"
        />
        <meta
          property="twitter:title"
          content="Backend Development Roadmap. | Tech Roadmap."
        />
        <meta
          property="twitter:description"
          content="Free videos, articles, guides and other resources to help you become a backend developer."
        />
      </Helmet>
      <NavSpace />
      <NavBar />
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
        <Cheatsheets />
        <OtherResources />
        <WhatNext />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default BackendPage;
