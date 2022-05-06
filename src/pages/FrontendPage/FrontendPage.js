import React, { useEffect, useState } from "react";
import NavSpace from "../../components/NavBar/NavSpace";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/frontendPageContent/Intro";
import WhatIs from "../../components/frontendPageContent/WhatIs";
import Roadmap from "../../components/frontendPageContent/Roadmap";
import Networking from "../../components/Networking";
import CodeEditors from "../../components/frontendPageContent/CodeEditors";
import HtmlAndCss from "../../components/frontendPageContent/HtmlAndCss";
import SideBar from "../../components/SideBar/SideBar";
import FrontendNav from "../../components/frontendPageContent/FrontendNav";

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
      <SideBar
        handleMenu={handleMenu}
        openMenu={openMenu}>
        <FrontendNav handleMenu={handleMenu} openMenu={openMenu} />
      </SideBar>
      <Banner title={title} quote={quote} image={image} />
      <main>
        <Intro />
        <WhatIs />
        <Roadmap />
        <Networking />
        <CodeEditors />
        <HtmlAndCss />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default FrontendPage;
