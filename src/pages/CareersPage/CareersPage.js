import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import CareersList from "../../components/CareersList/CareersList";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import CareersDescription from "../../components/CareersDescription/CareersDescription";
import NavSpace from "../../components/NavBar/NavSpace";
import Helmet from "react-helmet";

const CareersPage = () => {
  const title = "";
  const quote =
    '"A year from now you may wish you had started today." – Karen Lamb';
  const image =
    "https://i.ibb.co/SNyJ6bW/priscilla-du-preez-AOd-ELn6sen-M-unsplash-1.jpg";

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="careers-page">
      <Helmet>
        <title>The different careers in tech. | Tech Roadmap.</title>
        {/* Primary Meta Tags */}
        <meta name="title" content="The different careers in tech. | Tech Roadmap." />
        <meta
          name="description"
          content="Learn the different careers in the tech industry along with videos and articles to help you decide on a tech career."
        />
        {/* Open Graph / Facebook Meta Tags */}
        
        <meta property="og:url" content="https://techroadmap.xyz/careers" />
        <meta property="og:title" content="The different careers in tech. | Tech Roadmap." />
        <meta
          property="og:description"
          content="Learn the different careers in the tech industry along with videos and articles to help you decide on a tech career."
        />
        {/* Twitter Meta Tags */}
        <meta property="twitter:url" content="https://techroadmap.xyz/careers" />
        <meta property="twitter:title" content="The different careers in tech. | Tech Roadmap." />
        <meta
          property="twitter:description"
          content="Learn the different careers in the tech industry along with videos and articles to help you decide on a tech career."
        />
      </Helmet>
      <NavSpace />
      <NavBar />
      <Banner title={title} quote={quote} image={image} />
      <main>
        <CareersDescription />
        <CareersList />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default CareersPage;
