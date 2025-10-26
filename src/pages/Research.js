import React from "react";
import { motion } from "framer-motion";

const Research = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Research</h1>
      <p>
      <b>Research Interests:</b> Development Economics, Political Economy, Digital and financial Inclusion
      </p>
      <p>1.
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0264999325001725" target="_blank" rel="noopener noreferrer">Do Educated Leaders Perform Better? Evidence on Parliamentary Effort and Constituency Outcomes in India</a>
        , Economic Modelling, 152, 107177(2025)
        
        <br></br>
        <br></br>
        <br></br>
        
2.
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0264999325001725" target="_blank" rel="noopener noreferrer"> Decent work and Women's Labour,</a>
        with Devaki Jain, Indian Journal of Human Development,  7, 2(2013)        
        <br></br>

<br></br>
      </p>
    </motion.div>
  );
};

export default Research;
