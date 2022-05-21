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

  return (
    <div className="contribute-page">
      <Head>
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
      </Head>
      <Banner title={title} quote={quote} image={image} />
      <main>
        <ContributeDescription />
      </main>
    </div>
  );
};

export default ContributePage;
