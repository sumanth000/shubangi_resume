import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import CV from "./pages/CV";
import Interests from "./pages/Interests";
import Contact from "./pages/Contact";
import "./App.css";
import Reference from "./pages/Reference";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <motion.div
          className="page-content"
          animate={{
            marginLeft: isSidebarOpen ? "100px" : "30px",
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
    
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/interests" element={<Interests />} />
              <Route path="/reference" element={<Reference />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
