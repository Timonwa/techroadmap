import React, { useEffect, useState } from "react";
import NavSpace from "../../components/NavBar/NavSpace";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import BackendNav from "../../components/backendPageContent/BackendNav";
import Banner from "../../components/Banner/Banner";
import Intro from "../../components/backendPageContent/Intro";
import WhatIs from "../../components/backendPageContent/WhatIs";
import Networking from "../../components/Networking";
import VersionControl from "../../components/VersionControl";
import OtherResources from "../../components/backendPageContent/OtherResources";
import CheatSheets from "../../components/backendPageContent/CheatSheets";
import WhatNext from "../../components/backendPageContent/WhatNext";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";

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
    <div className="contribute-page">
      <NavSpace />
      <NavBar />
      <SideBar handleMenu={handleMenu} openMenu={openMenu}>
        <BackendNav handleMenu={handleMenu} openMenu={openMenu} />
      </SideBar>
      <Banner title={title} quote={quote} image={image} />
      <main>
        <Intro />
        <WhatIs />
        <Networking />
        <VersionControl />
        <CheatSheets />
        <OtherResources />
        <WhatNext />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default BackendPage;
