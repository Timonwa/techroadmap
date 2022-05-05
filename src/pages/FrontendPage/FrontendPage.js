import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/frontendPageContent/Intro";
import WhatIs from "../../components/frontendPageContent/WhatIs";

const FrontendPage = () => {
  const title = "";
  const quote =
    '"Websites promote you 24/7: No employee will do that." – Paul Cookson';
  const image =
    "https://i.ibb.co/vYLYxmH/pankaj-patel-Ylk5n-nd9d-A-unsplash.jpg";

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="contribute-page">
      <NavBar />
      <Banner title={title} quote={quote} image={image} />
      <main>
        <Intro />
        <WhatIs />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default FrontendPage;
