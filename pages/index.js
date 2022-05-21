import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#21394f" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>Tech Roadmap</title>

        {/** Seo Tags */}
        {/* Primary Meta Tags */}
        <meta name="type" content="website" />
        <meta name="author" content="Pelumi Akintokun, Timonwa" />
        <meta name="title" content="Tech Roadmap" />
        <meta
          name="description"
          content="Begin your career in Tech. Roadmaps, articles, and resources to help you choose a career path, start your journey and grow in tech."
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:url" content="https://techroadmap.xyz" />
        <meta property="og:title" content="Tech Roadmap" />
        <meta
          property="og:description"
          content="Begin your career in Tech. Roadmaps, articles, and resources to help you choose a career path, start your journey and grow in tech."
        />

        {/* Twitter Meta Tags */}
        <meta property="twitter:careers__card" content="summary_large_image" />
        <meta property="twitter:image" content="/seo-image.png" />
        <meta property="twitter:url" content="https://techroadmap.xyz" />
        <meta property="twitter:title" content="Tech Roadmap" />
        <meta
          property="twitter:description"
          content="Begin your career in Tech. Roadmaps, articles, and resources to help you choose a career path, start your journey and grow in tech."
        />
      </Head>

      <p>Hi</p>
    </div>
  );
}
