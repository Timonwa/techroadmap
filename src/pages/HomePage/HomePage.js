import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import CareersList from "../../components/CareersList/CareersList";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import HomeDescription from "../../components/HomeDescription/HomeDescription";
import NavSpace from "../../components/NavBar/NavSpace";

const HomePage = () => {
  const title = "Tech Career Roadmap";
  const quote =
    "Roadmaps, articles, and useful resources to help you choose a career path, start your journey and grow in tech.";
  const image = "https://i.ibb.co/h1PwkQw/roadmap.jpg";

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="home-page">
      <NavSpace />
      <NavBar />
      <Banner title={title} quote={quote} image={image} />
      <main>
        <HomeDescription />
        <CareersList />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
