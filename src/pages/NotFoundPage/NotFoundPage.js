import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import NavSpace from "../../components/NavBar/NavSpace";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import NotFound from "../../components/NotFound/NotFound";

const NotFoundPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="home-page">
      <NavSpace />
      <NavBar />
      <main>
        <NotFound />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
