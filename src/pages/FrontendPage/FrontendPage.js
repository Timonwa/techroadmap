import React, { useEffect, useState } from "react";
import NavSpace from "../../components/NavBar/NavSpace";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Banner from "../../components/Banner/Banner";
import Intro from "../../components/frontendPageContent/Intro";
import WhatIs from "../../components/frontendPageContent/WhatIs";
import Roadmap from "../../components/frontendPageContent/Roadmap";
import Networking from "../../components/Networking";
import CodeEditors from "../../components/frontendPageContent/CodeEditors";
import HtmlAndCssBasic from "../../components/frontendPageContent/HtmlAndCssBasic";
import FrontendNav from "../../components/frontendPageContent/FrontendNav";
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
import CheatSheets from "../../components/frontendPageContent/CheatSheets";
import WhatNext from "../../components/frontendPageContent/WhatNext";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";

const FrontendPage = () => {
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
    <div className="contribute-page">
      <NavSpace />
      <NavBar />
      <SideBar handleMenu={handleMenu} openMenu={openMenu}>
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
        <CheatSheets />
        <OtherResources />
        <WhatNext />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default FrontendPage;
