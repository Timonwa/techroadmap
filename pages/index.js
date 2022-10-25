import Head from "next/head";
import Banner from "../components/Banner";
import CareersList from "../components/CareersList";
import HomeDescription from "../components/HomeDescription";

export default function Home() {
  const title = <h1>Tech Career Roadmap</h1>;
  const quote =
    "Roadmaps, articles, and free useful resources to help you choose a career path, start your journey and grow in tech.";
  const image = "https://i.ibb.co/h1PwkQw/roadmap.jpg";

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>Tech Developer and Non-developer Roadmap</title>

        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Timonwa Akintokun" />
        <meta name="title" content="Tech Developer and Non-developer Roadmap" />
        <meta
          name="description"
          content={`Roadmaps, articles, and resources for developers and non-developers like technical writers, UIUX designers, etc., to guide them in choosing a career path, starting their journey and growing in tech in ${currentYear}.`}
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:url" content="https://www.techroadmap.xyz" />
        <meta
          property="og:title"
          content="Tech Developer and Non-developer Roadmap"
        />
        <meta
          property="og:description"
          content={`Roadmaps, articles, and resources for developers and non-developers like technical writers, UIUX designers, etc., to guide them in choosing a career path, starting their journey and growing in tech in ${currentYear}.`}
        />

        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta property="twitter:url" content="https://www.techroadmap.xyz" />
        <meta
          property="twitter:title"
          content="Tech Developer and Non-developer Roadmap"
        />
        <meta
          property="twitter:description"
          content={`Roadmaps, articles, and resources for developers and non-developers like technical writers, UIUX designers, etc., to guide them in choosing a career path, starting their journey and growing in tech in ${currentYear}.`}
        />
      </Head>
      <Banner title={title} quote={quote} image={image} />
      <main>
        <HomeDescription />
        <CareersList />
      </main>
    </div>
  );
}
