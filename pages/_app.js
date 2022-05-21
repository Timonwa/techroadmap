import "../styles/css-resets/normalize.css";
import "../styles/css-resets/my-css-reset.css";
import "../styles/css-resets/my-font-reset.css";
import "../styles/globals.scss";

import NavBar from "../components/NavBar";
import ContributeCTA from "../components/ContributeCTA";
import Footer from "../components/Footer";
import NavSpace from "../components/NavSpace";

import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <NavBar />
      <NavSpace />
      <Component {...pageProps} />
      <ContributeCTA />
      <Footer />
    </>
  );
}

export default MyApp;
