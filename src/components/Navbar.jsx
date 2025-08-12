import React, { useState } from "react";
import mdm from "../assets/mdm.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={mdm} alt="MDM Security Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Solution</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>

          <button className="bg-white-600 text-[rgba(54,137,177,1)] rounded-lg w-20 md:w-30 border-2 border-[rgba(54,137,177,1)]  hover:bg-blue-300 rounded-md-px-2 py-2 hover:shadow-xl hover:-translate-y-2">Demo</button>
          <button className="bg-white-600 text-white bg-[rgba(54,137,177,1)] rounded-lg w-50 md:w-40 border-2 border-[rgba(54,137,177,1)]   hover:bg-blue-300 rounded-md-px-2 py-2 hover:shadow-xl hover:-translate-y-2">Start free trial</button>

          <a href="/Login" className="text-black-700 ">Log in</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open Menu">
          <span className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${mobileOpen ? 'block' : 'hidden'}`} onClick={() => setMobileOpen(false)}></div>
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ minHeight: '100vh' }}>
        <div className="flex flex-col p-6 space-y-6 pt-24">
          <a href="#" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>Solution</a>
          <a href="#" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>Pricing</a>
 
          <button className="bg-white-600 text-blue-300 rounded-lg border-2 border-[rgba(54,137,177,1)] py-2" onClick={() => setMobileOpen(false)}>Demo</button>
          <button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition border-2 border-[rgba(54,137,177,1)] py-2" onClick={() => setMobileOpen(false)}>Start Free Trial</button>
          <a href="/Login" className="text-black-700" onClick={() => setMobileOpen(false)}>Log in</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
