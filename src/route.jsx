import React from "react";
import Navbar from "./components/Navbar";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";
import Home6 from "./components/Home6";
import Home7 from "./components/Home7";
import Footer from "./components/Footer";


const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 /> 
        <Home5 />
        <Home6 />
        <Home7 /> 
        <Footer />
    
      </div>
    </>
  );
};

export default AllRoutes;

