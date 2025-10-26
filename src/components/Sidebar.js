import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import "../App.css";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/research", label: "Research" },
    { path: "/teaching", label: "Teaching & Mentoring" },
    { path: "/cv", label: "CV" },
    { path: "/interests", label: "Other Interests" },
    { path: "/reference", label: "Reference" },
    { path: "/contact", label: "Contact" },
 
  ];

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sidebar"
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="sidebar-title">Shubangi Jaiswal</h2>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
