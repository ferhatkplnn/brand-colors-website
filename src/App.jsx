import "./App.css";
import Collection from "./components/collection/Collection";
import Content from "./components/content/Content";
import Copied from "./components/copied/Copied";
import Sidebar from "./components/Sidebar";
import { useBrands } from "./contexts/useBrand";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { copied } = useBrands();
  return (
    <>
      {copied && <Copied color={copied} />}
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/collection/:slugs" element={<Collection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
