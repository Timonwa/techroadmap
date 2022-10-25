import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import SideBar from "../../components/SideBar";
import Banner from "../../components/Banner";
import Intro from "../../components/techwritingPageContent/Intro";
import WhatIs from "../../components/techwritingPageContent/WhatIs";
import Roadmap from "../../components/techwritingPageContent/Roadmap";
import Networking from "../../components/techwritingPageContent/Networking";
import OtherResources from "../../components/techwritingPageContent/OtherResources";
import WhatNext from "../../components/techwritingPageContent/WhatNext";

const TechnicalWriting = () => {
  const quote =
    '"As a technical communicator, I am an enabler of information." – Suyog Ketkar';
  const image =
    "https://i.ibb.co/gdfgtkv/yannick-pulver-hop-X-jp-Vt-RM-unsplash.jpg";

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
    <div className="techWritingPage">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>
          How to Become a Technical Writer in {currentYear}: A Beginners Guide.
          | Tecnical Writing Roadmap.
        </title>
        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Timonwa Akintokun" />
        <meta
          name="title"
          content={`How to Become a Technical Writer in ${currentYear}: A Beginners Guide. | Tecnical Writing Roadmap.`}
        />
        <meta
          name="description"
          content={`Learn how to become a technical writer without a university degree or technical experience. This technical writing roadmap provides you with helpful resources to learn technical writing for free in ${currentYear}.`}
        />
        {/* Open Graph / Facebook Meta Tags */}{" "}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta
          property="og:url"
          content="https://www.techroadmap.xyz/technicalwriting"
        />
        <meta
          property="og:title"
          content={`How to Become a Technical Writer in ${currentYear}: A Beginners Guide. | Tecnical Writing Roadmap.`}
        />
        <meta
          property="og:description"
          content={`Learn how to become a technical writer without a university degree or technical experience. This technical writing roadmap provides you with helpful resources to learn technical writing for free in ${currentYear}.`}
        />
        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta
          property="twitter:url"
          content="https://www.techroadmap.xyz/careers/technicalwriting"
        />
        <meta
          property="twitter:title"
          content={`How to Become a Technical Writer in ${currentYear}: A Beginners Guide. | Tecnical Writing Roadmap.`}
        />
        <meta
          property="twitter:description"
          content={`Learn how to become a technical writer without a university degree or technical experience. This technical writing roadmap provides you with helpful resources to learn technical writing for free in ${currentYear}.`}
        />
      </Head>
      <SideBar handleMenu={handleMenu} openMenu={openMenu} ref={menuRef}>
        {/* <TechWritingNav handleMenu={handleMenu} openMenu={openMenu} /> */}
      </SideBar>
      <Banner quote={quote} image={image} />
      <main>
        <Intro />
        <WhatIs />
        <Roadmap />
        <Networking />
        <OtherResources />
        <WhatNext />
      </main>
    </div>
  );
};

export default TechnicalWriting;
