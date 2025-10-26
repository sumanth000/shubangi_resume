import React from "react";
import { motion } from "framer-motion";

const CV = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Curriculum Vitae</h1>

      <p>

        You can download my full CV and know my academic and professional background.
        
        
        
        <a href={`${process.env.PUBLIC_URL}../assets/Shubhangi_Jaiswal_ACAD_CV.pdf`} download="Shubangi_Jaiswal_ACAD_CV.pdf">

          Here
        </a>
      </p>
    </motion.div>
  );
};

export default CV;
