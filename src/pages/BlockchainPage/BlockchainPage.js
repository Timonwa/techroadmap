import React, { useEffect, useState } from "react";
import NavSpace from "../../components/NavBar/NavSpace";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import BlockchainNav from "../../components/blockchainPageContent/BlockchainNav";
import Banner from "../../components/Banner/Banner";
import Intro from "../../components/blockchainPageContent/Intro";
import WhatIs from "../../components/blockchainPageContent/WhatIs";
import Roadmap from "../../components/blockchainPageContent/Roadmap";
import Networking from "../../components/Networking";
// import CodeEditors from "../../components/blockchainPageContent/CodeEditors";
// import FrontendBasics from "../../components/blockchainPageContent/FrontendBasics";
// import BlockchainLangs from "../../components/blockchainPageContent/BlockchainLangs";
// import VersionControl from "../../components/VersionControl";
// import DeploymentServices from "../../components/blockchainPageContent/DeploymentServices";
// import Database from "../../components/blockchainPageContent/Database";
// import Frameworks from "../../components/blockchainPageContent/Frameworks";
import OtherResources from "../../components/blockchainPageContent/OtherResources";
import Cheatsheets from "../../components/blockchainPageContent/Cheatsheets";
import WhatNext from "../../components/blockchainPageContent/WhatNext";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import Helmet from "react-helmet";

const BlockchainPage = () => {
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
    <div className="blockchain-page">
      <Helmet>
        <title>Blockchain Development Roadmap. | Tech Roadmap.</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content="Blockchain Development Roadmap. | Tech Roadmap."
        />
        <meta
          name="description"
          content="Free videos, articles, guides and other resources to help you become a blockchain developer."
        />
        {/* Open Graph / Facebook Meta Tags */}

        <meta property="og:url" content="https://techroadmap.xyz/blockchain" />
        <meta
          property="og:title"
          content="Blockchain Development Roadmap. | Tech Roadmap."
        />
        <meta
          property="og:description"
          content="Free videos, articles, guides and other resources to help you become a blockchain developer."
        />
        {/* Twitter Meta Tags */}
        <meta
          property="twitter:url"
          content="https://techroadmap.xyz/blockchain"
        />
        <meta
          property="twitter:title"
          content="Blockchain Development Roadmap. | Tech Roadmap."
        />
        <meta
          property="twitter:description"
          content="Free videos, articles, guides and other resources to help you become a blockchain developer."
        />
      </Helmet>
      <NavSpace />
      <NavBar />
      <SideBar handleMenu={handleMenu} openMenu={openMenu}>
        <BlockchainNav handleMenu={handleMenu} openMenu={openMenu} />
      </SideBar>
      <Banner title={title} quote={quote} image={image} />
      <main>
        <Intro />
        <WhatIs />
        <Roadmap />
        <Networking />
        {/* <CodeEditors /> */}
        {/* <FrontendBasics /> */}
        {/* <BlockchainLangs /> */}
        {/* <VersionControl /> */}
        {/* <DeploymentServices /> */}
        {/* <Database /> */}
        {/* <Frameworks /> */}
        <Cheatsheets />
        <OtherResources />
        <WhatNext />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default BlockchainPage;
