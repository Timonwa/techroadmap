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

  return (
    <div className="careers-page">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>The different careers in tech. | Tech Roadmap.</title>

        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Pelumi Akintokun, Timonwa" />
        <meta
          name="title"
          content="The different careers in tech. | Tech Roadmap."
        />
        <meta
          name="description"
          content="Learn the different careers in the tech industry along with videos and articles to help you decide on a tech career."
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:url" content="https://techroadmap.xyz/careers" />
        <meta
          property="og:title"
          content="The different careers in tech. | Tech Roadmap."
        />
        <meta
          property="og:description"
          content="Learn the different careers in the tech industry along with videos and articles to help you decide on a tech career."
        />

        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta
          property="twitter:url"
          content="https://techroadmap.xyz/careers"
        />
        <meta
          property="twitter:title"
          content="The different careers in tech. | Tech Roadmap."
        />
        <meta
          property="twitter:description"
          content="Learn the different careers in the tech industry along with videos and articles to help you decide on a tech career."
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
