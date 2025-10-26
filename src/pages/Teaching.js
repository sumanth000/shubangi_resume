import React from "react";
import { motion } from "framer-motion";

const Teaching = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Teaching & Mentoring</h1>
      <p>
      I have taught Principles of Macroeconomics(Undergraduate) as Guest Faculty at Shiv Nadar Institution of Eminence 
      </p>
      <p>
      I have also taught Mathematical Methods for Economics(Post Graduate) and Microeconomics I(Post Graduate) as a Teaching Assistant at Shiv Nadar Institution of Eminence 
        </p>
    </motion.div>
  );
};

export default Teaching;
