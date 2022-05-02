import React, { useEffect } from "react";
import "./HomePage.scss";

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="homepage">
      <header className="App-header">Tech Roadmap</header>
    </div>
  );
};

export default HomePage;
