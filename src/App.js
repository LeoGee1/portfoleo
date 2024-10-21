import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Stack from "./Components/Stack";
import Projects from "./Components/Projects"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Preload from "./Components/Preload.js";


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