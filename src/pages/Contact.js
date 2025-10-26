import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Contact</h1>
      <p>Please feel free to reach me at: <strong>sj417@snu.edu.in</strong></p>
      <p>
        Check out my profiles: 
        <a href="https://scholar.google.com/citations?user=01xY5JEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> | 
        <a href="https://www.linkedin.com/in/shubhangi-jaiswal-7b8a0571/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </motion.div>
  );
};

export default Contact;
