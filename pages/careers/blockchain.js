import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import BlockchainNav from "../../components/blockchainPageContent/BlockchainNav";
import Banner from "../../components/Banner";
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
import WhatNext from "../../components/blockchainPageContent/WhatNext";
import Head from "next/head";

const BlockchainPage = () => {
  const title = "";
  const quote = `"The old question 'Is it in the database?' will be replaced by 'Is it on the blockchain?'" – William Mougayar`;
  const image = "https://i.ibb.co/gzSqzbb/blockchain.jpg";

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="blockchain-page">
      <Head>
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
      </Head>
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
        <OtherResources />
        <WhatNext />
      </main>
    </div>
  );
};

export default BlockchainPage;
