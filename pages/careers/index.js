import React from "react";
import Banner from "../../components/Banner";
import CareersList from "../../components/CareersList";
import CareersDescription from "../../components/CareersDescription";
import Head from "next/head";

const CareersPage = () => {
  const quote =
    '"A year from now you may wish you had started today." – Karen Lamb';
  const image =
    "https://i.ibb.co/SNyJ6bW/priscilla-du-preez-AOd-ELn6sen-M-unsplash-1.jpg";

  const currentYear = new Date().getFullYear();

  return (
    <div className="careers-page">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>
          How to choose a career path in tech in {currentYear}. | Tech Roadmap.
        </title>

        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Timonwa Akintokun" />
        <meta
          name="title"
          content={`How to choose a career path in tech in ${currentYear}. | Tech Roadmap.`}
        />
        <meta
          name="description"
          content={`Considering a career change into tech? With over ten career paths in the tech industry, learn which career paths are in demand and choose the best tech career path for you in ${currentYear}`}
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:url" content="https://www.techroadmap.xyz/careers" />
        <meta
          property="og:title"
          content={`How to choose a career path in tech in ${currentYear}. | Tech Roadmap.`}
        />
        <meta
          property="og:description"
          content={`Considering a career change into tech? With over ten career paths in the tech industry, learn which career paths are in demand and choose the best tech career path for you in ${currentYear}`}
        />

        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta
          property="twitter:url"
          content="https://www.techroadmap.xyz/careers"
        />
        <meta
          property="twitter:title"
          content={`How to choose a career path in tech in ${currentYear}. | Tech Roadmap.`}
        />
        <meta
          property="twitter:description"
          content={`Considering a career change into tech? With over ten career paths in the tech industry, learn which career paths are in demand and choose the best tech career path for you in ${currentYear}`}
        />
      </Head>
      <Banner quote={quote} image={image} />
      <main>
        <CareersDescription />
        <CareersList />
      </main>
    </div>
  );
};

export default CareersPage;
