import Head from "next/head";
import React from "react";
import Banner from "../components/Banner";
import ContributeDescription from "../components/ContributeDescription";

const ContributePage = () => {
  const title = "";
  const quote =
    '"Alone we can do so little; together we can do so much." – Helen Keller';
  const image =
    "https://i.ibb.co/6ZPmt50/randy-fath-ymf4-9-Y9-S-A-unsplash-1.jpg";

  const currentYear = new Date().getFullYear();

  return (
    <div className="contribute-page">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Contribute to Tech Career Roadmap.</title>

        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Timonwa Akintokun" />
        <meta name="title" content="Contribute to Tech Career Roadmap." />
        <meta
          name="description"
          content="You can contribute to our developer and non-developer roadmaps and resources to guide newbies transitioning into tech choose a career path, start their journey and grow in tech. This project is open source."
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:url" content="https://techroadmap.xyz/contribute" />
        <meta
          property="og:title"
          content="Contribute to Tech Career Roadmap."
        />
        <meta
          property="og:description"
          content="You can contribute to our developer and non-developer roadmaps and resources to guide newbies transitioning into tech choose a career path, start their journey and grow in tech. This project is open source."
        />
        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta
          property="twitter:url"
          content="https://techroadmap.xyz/contribute"
        />
        <meta
          property="twitter:title"
          content="Contribute to Tech Career Roadmap."
        />
        <meta
          property="twitter:description"
          content="You can contribute to our developer and non-developer roadmaps and resources to guide newbies transitioning into tech choose a career path, start their journey and grow in tech. This project is open source."
        />
      </Head>
      <Banner title={title} quote={quote} image={image} />
      <main>
        <ContributeDescription />
      </main>
    </div>
  );
};

export default ContributePage;
