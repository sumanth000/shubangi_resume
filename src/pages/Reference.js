import React from "react";
import { motion } from "framer-motion";

const Reference = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h2>Reference</h2>
        <ul>
          <li>Suchismita Tarafdar, Associate Professor, Shiv Nadar IoE: <a href="mailto:suchismita.tarafdar@snu.edu.in">suchismita.tarafdar@snu.edu.in</a></li>
          <li>Shubhro Sarkar, Associate Professor, IGIDR: <a href="mailto:shubhro@igidr.ac.in">shubhro@igidr.ac.in</a></li>
          <li>Shabana Mitra, Associate Professor, Shiv Nadar IoE: <a href="mailto:shabana.mitra@snu.edu.in">shabana.mitra@snu.edu.in</a></li>
          <li>Divya Pandey, Senior Evaluation Specialist, 3ie: <a href="mailto:dpandey@3ieimpact.org">dpandey@3ieimpact.org</a></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Reference;
