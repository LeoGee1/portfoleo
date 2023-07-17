import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Stack from "./Stack";
import Projects from "./Projects"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Preload from "./Preload";


function App() {
  const [clockHasFadedIn, setClockHasFadedIn] = useState(false);
  const [showPreload, setShowPreload] = useState(true);


  return (
    <Router>
        <div className="App">
          <Preload />
          <Navbar />
          <Footer />
          <div>
            <Routes>
              <Route path="/" element={<Home clockHasFadedIn={clockHasFadedIn} setClockHasFadedIn={setClockHasFadedIn} showPreload={showPreload} setShowPreload={setShowPreload} />} />

              <Route path="/aboutme" element={<AboutMe />} />

              <Route path="/projects" element={<Projects />} />

              <Route path="/stack" element={<Stack />} />

            </Routes>
          </div>
        </div>
    </Router>
  );
}
export default App;