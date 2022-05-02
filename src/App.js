import { Route, Routes } from "react-router";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/listings" element={<Listings />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
