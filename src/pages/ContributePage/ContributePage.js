import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import ContributeDescription from "../../components/ContributeDescription/ContributeDescription";

const ContributePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="contribute-page">
      <NavBar />
      <Banner />
      <main>
        <ContributeDescription />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default ContributePage;
