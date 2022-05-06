import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import CareersList from "../../components/CareersList/CareersList";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import CareersDescription from "../../components/CareersDescription/CareersDescription";
import NavSpace from "../../components/NavBar/NavSpace";

const CareersPage = () => {
  const title = "";
  const quote =
    '"A year from now you may wish you had started today." – Karen Lamb';
  const image =
    "https://i.ibb.co/SNyJ6bW/priscilla-du-preez-AOd-ELn6sen-M-unsplash-1.jpg";

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="careers-page">
      <NavSpace />
      <NavBar />
      <Banner title={title} quote={quote} image={image} />
      <main>
        <CareersDescription />
        <CareersList />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default CareersPage;
