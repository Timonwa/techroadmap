import "../styles/css-resets/normalize.css";
import "../styles/css-resets/my-css-reset.css";
import "../styles/css-resets/my-font-reset.css";
import "../styles/globals.scss";

import NavBar from "../components/NavBar";
import ContributeCTA from "../components/ContributeCTA";
import Footer from "../components/Footer";
import NavSpace from "../components/NavSpace";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <NavSpace />
      <Component {...pageProps} />
      <ContributeCTA />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
