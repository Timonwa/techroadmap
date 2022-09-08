import React, { useRef, useState, useEffect } from "react";
import { Head } from "next/head";
import SideBar from "../../components/SideBar";
import Banner from "../../components/Banner";

const TechnicalWriting = () => {
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
    <div className="techWritingPage">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Technical Writing Roadmap. | Tech Roadmap.</title>
        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Pelumi Akintokun, Timonwa" />
        <meta
          name="title"
          content="Technical Writing Roadmap. | Tech Roadmap."
        />
        <meta
          name="description"
          content="Free videos, articles, guides and other resources to help you become a technical writer."
        />
        {/* Open Graph / Facebook Meta Tags */}{" "}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta
          property="og:url"
          content="https://techroadmap.xyz/technicalwriting"
        />
        <meta
          property="og:title"
          content="Technical Writing Roadmap. | Tech Roadmap."
        />
        <meta
          property="og:description"
          content="Free videos, articles, guides and other resources to help you become a technical writer."
        />
        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta
          property="twitter:url"
          content="https://techroadmap.xyz/careers/technicalwriting"
        />
        <meta
          property="twitter:title"
          content="Technical Writing Roadmap. | Tech Roadmap."
        />
        <meta
          property="twitter:description"
          content="Free videos, articles, guides and other resources to help you become a technical writer."
        />
      </Head>
      <SideBar handleMenu={handleMenu} openMenu={openMenu} ref={menuRef}>
        {/* <TechWritingNav handleMenu={handleMenu} openMenu={openMenu} /> */}
      </SideBar>
      <Banner title={title} quote={quote} image={image} />
    </div>
  );
};

export default TechnicalWriting;