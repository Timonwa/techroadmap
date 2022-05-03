import { Route, Routes } from "react-router";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage.js";
// import Careers from "./pages/CareersPage/CareersPage";
// import Contribute from "./pages/ContributePage/ContributePage";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
        {/* <Route path="/contribute" element={<Contribute />} /> */}
        {/* <Route path="/post/:id" element={<Post />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
