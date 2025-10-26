import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="homeSection">
        <div className="textSection">

          <p>
            Welcome to my website! I am a Ph.D. candidate in Economics at the
            Shiv Nadar Institution of Eminence. My research lies at the
            intersection of Political Economy, Development, and Public Policy,
            with a particular focus on how politicians' characteristics shape
            electoral choices, party strategies, governance and local outcomes.
            <br></br>
            <br></br>
            <br></br>
            My work combines large-scale administrative data, parliamentary
            records, and satellite imagery. I employ both descriptive and
            quasi-experimental methods in my research.
            <br></br>
            <br></br>
            <br></br>I have taught undergraduate courses in Macroeconomics and
            served as a teaching assistant for Mathematical Methods for
            Economics and Microeconomic Theory. My teaching philosophy
            emphasizes linking economic theory with real-world application
            through computational tools such as Stata, R, and Python. Content
            for shubangi
          </p>
        </div>

        <div className="imageSection">
          <img
            src={require("../assets/Shubangi_image.jpg")}
            alt="Shubangi Jaiswal"
            style={{
              width: "200px",
              borderRadius: "27%",
              marginTop: "20px",
            }}
          />
        </div>
      </div>

      
    </motion.div>
  );
};

export default Home;
