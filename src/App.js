import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage.js";
import Careers from "./pages/CareersPage/CareersPage";
import Contribute from "./pages/ContributePage/ContributePage";
import Frontend from "./pages/FrontendPage/FrontendPage";
import Backend from "./pages/BackendPage/BackendPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import Blockchain from "./pages/BlockchainPage/BlockchainPage";

import ReactGA from "react-ga4";

function App() {
  const TRACKING_ID = "UA-228201739-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        {/* <Route path="/blockchain" element={<Blockchain />} /> */}
        {/* <Route path="/post/:id" element={<Post />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
