import React from "react";
import Vector from "../assets/Vector.svg";
import Glyph from "../assets/glyph.svg";
import Investment from "../assets/Investment.svg";
import Image1 from "../assets/mdm.png";
import Image2 from "../assets/mdm.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Boost Employee
              <br />
              <span className="text-gray-900">Productivity</span> and Security
              <br />
              With <span className="text-[rgba(54,137,177,1)]">MDM Security</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 mt-5 max-w-2xl">
              MDM Security helps organizations monitor and manage their workforce efficiently from real-time screenshots to 
              comprehensive attendance tracking so you get full control over your digital workspace.
            </p>

            {/* One-line bullets with native markers */}
            <ul className="mt-6 pl-5 list-disc marker:text-[rgba(54,137,177,1)] text-gray-600 text-sm sm:text-base flex flex-wrap gap-x-6 gap-y-2">
              <li>99.9% accurate time tracking</li>
              <li>Boosts productivity by up to 92%</li>
              <li>Easy setup in under 5 minutes</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-7">
              <button
                type="button"
                className="inline-flex items-center justify-center bg-[rgba(54,137,177,1)] text-white text-base sm:text-lg  border-2 border-white rounded-xl px-6 py-3 sm:px-8 sm:py-4  transition transform hover:-translate-y-1 hover:shadow-xl"
                aria-label="Book a Demo"
              >
                Book a Demo
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center bg-white text-[rgba(54,137,177,1)] text-base sm:text-lg rounded-xl px-6 py-3 sm:px-8 sm:py-4 border-2 border-[rgba(54,137,177,1)] transition transform hover:-translate-y-1 hover:shadow-xl"
                aria-label="Start Free Trial"
              >
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right: Orbit Illustration + Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative flex justify-center items-center">
              {/* Orbit Illustration (hidden on small for performance/clarity) */}
              <div 
                aria-hidden="true"
                className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none"
              > 
                <div className="relative h-54 w-54 md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem]">
                  {/* Center */}
                  <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[rgba(54,137,177,1)] rounded-full z-10"></div>
                  {/* Orbits */}
                  <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 border-2 border-[rgba(54,137,177,1)] rounded-full">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-[rgba(54,137,177,1)] rounded-full"></div>
                  </div>
                  <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 border-2 border-[rgba(54,137,177,1)] rounded-full">
                    <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 bg-[rgba(54,137,177,1)] rounded-full"></div>
                  </div>
                  <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border-2 border-[rgba(54,137,177,1)] rounded-full">
                    <div className="absolute -bottom-3 left-1/4 w-4 h-4 md:w-5 md:h-5 bg-[rgba(54,137,177,1)] rounded-full"></div>
                  </div>
                  <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] md:w-[26rem] md:h-[26rem] border-2 border-[rgba(54,137,177,1)] rounded-full">
                    <div className="absolute top-1/3 -left-3 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 bg-[rgba(54,137,177,1)] rounded-full"></div>
                  </div>
                  <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] border-2 border-[rgba(54,137,177,1)] rounded-full">
                    <div className="absolute bottom-1/4 right-1/4 w-4 h-4 md:w-5 md:h-5 bg-[rgba(54,137,177,1)] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Foreground Images */}
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-8 md:mt-15 lg:mt-0 w-full max-w-4xl mx-auto">
  <img
    src={Image1}
    alt="Ellipse Design"
    className="w-full h-50 sm:h-62 md:h-70 object-cover rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
  />
  <img
    src={Image2}
    alt="Employee Monitoring Dashboard"
    className="w-full h-50 sm:h-62 md:h-70 object-cover rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
  />
</div>
            </div>
          </div>
        </div>

        {/* Icon bullets below hero content */}
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-gray-700 text-sm sm:text-base p-0 list-none">
          <li className="flex items-center gap-2">
            <img src={Vector} alt="" className="h-5 w-5" />
            <span><b>99.9%</b> accurate time tracking</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={Glyph} alt="" className="h-4 w-4" />
            <span><b>Boosts</b> productivity by up to <b>92%</b></span>
          </li>
          <li className="flex items-center gap-2">
            <img src={Investment} alt="" className="h-5 w-5" />
            <span><b>Save 10+ hrs/week</b> per team</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
