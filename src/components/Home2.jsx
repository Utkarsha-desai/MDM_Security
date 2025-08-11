
import React from "react";
import {
  ClockIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  CameraIcon,
  CalendarDaysIcon,
  BellIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';

// Reusable component for the feature items
const FeatureItem = ({ icon: Icon, text }) => {
  return (
    <div className="bg-white p-2.5 rounded-lg shadow-lg border border-gray-200 flex items-center space-x-3 w-52 transform transition-transform hover:scale-105 cursor-pointer">
      <div className="w-10 h-10 flex items-center justify-center">
        <Icon className="h-7 w-7 text-[rgba(54,137,177,1)]" />
      </div>
      <span className="text-[rgba(54,137,177,1)] font-semibold text-sm">{text}</span>
    </div>
  );
};


const HowMDMWorks = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <section className="flex flex-col items-center text-center py-12 sm:py-16 px-4 sm:px-6 bg-white mx-auto w-full max-w-5xl">
  {/* Title */}
  <h2 className="text-2xl font-bold text-[rgba(54,137,177,1)] mb-2">
    How MDM Works
  </h2>

  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 max-w-3xl leading-snug">
    Turn Daily Activity Into{" "}
    <span className="text-[rgba(54,137,177,1)]">High-Impact Decisions</span>
  </h1>

  {/* Subtitle */}
  <p className="text-sm md:text-base text-gray-600 mt-5 max-w-2xl">
    MDM captures daily work in real time, then shows where time goes, what slows teams down,
    and how to fix it all in one clear, customizable dashboard that works with your existing tools
    (no rip-and-replace required).
  </p>
</section>

      <div className="relative w-[600px] h-[600px]">
        {/* Dashed lines background - simple grid approximation */}
        <div className="absolute inset-0 flex justify-center items-center">
          {/*<div className="w-full h-px border-t border-dashed border-blue-200"></div>
          <div className="h-full w-px border-l border-dashed border-blue-200 absolute"></div>*/}
          
        </div>
        {/* Dashed Circles - SVG for curved lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          {/* Dashed Circles */}
          <circle cx="200" cy="200" r="20" fill="none" stroke="#a7c7e7" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="40" fill="none" stroke="#a7c7e7" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="#a7c7e7" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="90" fill="none" stroke="#a7c7e7" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#a7c7e7" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#a7c7e7" strokeWidth="2" strokeDasharray="6 6" />
        </svg>

        {/* Central Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-26 h-26 bg-blue-500 rounded-full shadow-2xl border-[16px] border-blue-400/50"></div>
        </div>
        {/* Feature Boxes Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* This inner div acts as the positioning anchor for the feature items */}
          <div className="absolute w-[740px] h-[350px]">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0">
                <FeatureItem icon={ClockIcon} text="Productivity" />
              </div>
              <div className="absolute top-1/2 left-[-70px] -translate-y-1/2">
                <FeatureItem icon={ChartBarIcon} text="Computer Activity" />
              </div>
              <div className="absolute bottom-0 left-0">
                <FeatureItem icon={ComputerDesktopIcon} text="Device Manage" />
              </div>
              <div className="absolute top-0 right-0">
                <FeatureItem icon={CalendarDaysIcon} text="Time & Attendance data" />
              </div>
              <div className="absolute top-1/2 right-[-70px] -translate-y-1/2">
                <FeatureItem icon={BellIcon} text="Notifications" />
              </div>
              <div className="absolute bottom-0 right-0">
                <FeatureItem icon={MoonIcon} text="Time Off" />
              </div>
              <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2">
                <FeatureItem icon={CameraIcon} text="Screenshot Capture" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowMDMWorks;
