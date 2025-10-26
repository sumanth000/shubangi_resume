import React from "react";
import { motion } from "framer-motion";

const Interests = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Other Interests</h1>
      <p>
      Outside of academics and work, I enjoy cooking and collecting recipes. 
              <br></br>
        
      </p>

      <p>
        <a href="https://www.instagram.com/the_gross_domestic_platter/#" target="_blank" rel="noopener noreferrer">Instagram Account</a>
        <br></br>
        
      </p>
    </motion.div>
  );
};

export default Interests;
