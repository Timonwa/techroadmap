import React, { useEffect } from "react";
import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import CareersList from "../../components/CareersList/CareersList";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="homepage">
      <NavBar />
      <Banner />
      <CareersList />
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
