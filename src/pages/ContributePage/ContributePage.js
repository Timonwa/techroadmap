import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import ContributeDescription from "../../components/ContributeDescription/ContributeDescription";
import NavSpace from "../../components/NavBar/NavSpace";
import Helmet from "react-helmet";

const ContributePage = () => {
  const title = "";
  const quote =
    '"Alone we can do so little; together we can do so much." – Helen Keller';
  const image =
    "https://i.ibb.co/6ZPmt50/randy-fath-ymf4-9-Y9-S-A-unsplash-1.jpg";

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="contribute-page">
      <Helmet>
        <title>Contribute to this open source project. | Tech Roadmap.</title>
        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Contribute to this open source project. | Tech Roadmap."
        />
        <meta
          name="description"
          content="This project is OpenSource. Learn how to contribute to this project. You can contribute as a developer here or a non-developer here."
        />
        {/* Open Graph / Facebook Meta Tags */}

        <meta property="og:url" content="https://techroadmap.xyz/contribute" />
        <meta
          property="og:title"
          content="Contribute to this open source project. | Tech Roadmap."
        />
        <meta
          property="og:description"
          content="This project is OpenSource. Learn how to contribute to this project. You can contribute as a developer here or a non-developer here."
        />
        {/* Twitter Meta Tags */}
        <meta
          property="twitter:url"
          content="https://techroadmap.xyz/contribute"
        />
        <meta
          property="twitter:title"
          content="Contribute to this open source project. | Tech Roadmap."
        />
        <meta
          property="twitter:description"
          content="This project is OpenSource. Learn how to contribute to this project. You can contribute as a developer here or a non-developer here."
        />
      </Helmet>
      <NavSpace />
      <NavBar />
      <Banner title={title} quote={quote} image={image} />
      <main>
        <ContributeDescription />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default ContributePage;
