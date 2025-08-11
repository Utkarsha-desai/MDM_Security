import React from "react";
import vai from "../assets/vai.svg";
import ak from "../assets/ak.svg";
import sid from "../assets/sid.svg";

const HowMDMWorks = () => {
  return (
    <section className="py-16 bg-white text-gray-900 px-6 md:px-10 lg:px-20">
      {/* Heading + Banner */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-[rgba(54,137,177,1)] mt-10">
          How MDM Works
        </h2>

        <div className="relative flex justify-center items-center py-6">
          {/* Background Strip */}
          <div className="absolute w-[92%] h-[7.5rem] bg-blue-200/50 rounded-lg" />

          {/* Foreground Card */}
          <div className="relative bg-[rgba(54,137,177,1)] text-white rounded-2xl px-6 sm:px-10 lg:px-20 py-10 sm:py-12 flex flex-col items-center shadow-lg w-full max-w-5xl hover:shadow-xl lg:hover:-translate-y-1 transition">
            <span className="text-base sm:text-lg md:text-xl font-medium text-center">
              One Platform. All Teams. • Trusted Across Industries • From Startups to Enterprises
            </span>

            {/* Placeholder tiles (treat as logos/mini-cards) */}
            <div className="mt-8 grid grid-cols-6 gap-3 sm:gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-md shadow w-12 h-14 sm:w-14 sm:h-16 ${i % 2 ? "mt-0" : "mt-4"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Heading */}
      <div className="text-center mt-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          <span className="font-normal text-gray-700">
            <b>People Use MDM security Daily to Work Smarter</b>
          </span>
        </h3>
      </div>

      
       {/* Content */}
      <div className="mt-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Visual panel with overlapping cards + chat bubbles */}
        <div className="relative w-full lg:w-[58%]">
          <div className="bg-blue-200/50 p-3 sm:p-4 rounded-xl w-full h-[320px] sm:h-[360px] md:h-[400px]">
            {/* Overlapping white cards */}
            <div className="absolute left-[7%] top-[12%] w-56 sm:w-94 h-32 sm:h-50 bg-white rounded-lg shadow-lg z-10 transition hover:-translate-y-1 hover:shadow-2xl" />
            <div className="absolute right-[7%] bottom-[12%] w-76 sm:w-94 h-62 sm:h-50 bg-white rounded-lg shadow-lg z-20 transition hover:-translate-y-1 hover:shadow-2xl" />

            {/* Chat bubbles */}
            <div className="absolute right-[20%] top-[8%] bg-white shadow-lg border border-blue-200 rounded-xl px-3 py-2 w-56 sm:w-60 text-xs sm:text-sm text-gray-700 flex items-center gap-2 z-30">
              <img src={sid} alt="" className="w-5 h-5" />
              <span>Easy to monitor data</span>
            </div>

            <div className="absolute left-[12%] bottom-[10%] bg-white shadow-lg border border-blue-200 rounded-xl px-3 py-2 w-64 sm:w-82 text-xs sm:text-sm text-gray-700 flex items-center gap-2 z-30">
              <img src={ak} alt="" className="w-5 h-5" />
              <span>Work with more focus, autonomy, and trust.</span>
            </div>

            <div className="absolute left-[8%] top-70 -translate-y-1/2 bg-white shadow-lg border border-blue-200 rounded-xl px-3 py-2 w-64 sm:w-92 text-xs sm:text-sm text-gray-700 flex items-center gap-2 z-30">
              <img src={vai} alt="" className="w-5 h-5" />
              <span>Real-time visibility without micromanagement.</span>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="w-full lg:w-[42%]">
          <h4 className="text-2xl md:text-3xl font-bold mb-3 text-gray-700">
            PROACTIVE DEVICE & DATA MANAGEMENT
          </h4>
          <p className="text-gray-600 mb-4">
            Protect Your Most Valuable Assets Your Data & Devices
          </p>
          <p className="text-gray-600 mb-5">
            MDM Security empowers organizations to secure, manage, and monitor devices and sensitive data so you can prevent breaches,
            ensure compliance, and maintain productivity across remote, hybrid, and on-site teams. It provides a unified platform with
            real-time visibility and control over every device in your network.
          </p>
          <ul className="list-disc pl-6 md:pl-8 text-gray-700 space-y-2">
            <li className="marker:text-[rgba(54,137,177,1)]">Keep all devices compliant and secure, wherever they are</li>
            <li className="marker:text-[rgba(54,137,177,1)]">Detect threats and respond instantly to incidents</li>
            <li className="marker:text-[rgba(54,137,177,1)]">Automate policy enforcement to reduce manual errors</li>
            <li className="marker:text-[rgba(54,137,177,1)]">Empower users with self-service tools while protecting company data</li>
            <li className="marker:text-[rgba(54,137,177,1)]">Generate actionable reports for audits and compliance</li>
          </ul>
          <p className="text-gray-700 mt-4">
            <b>MDM Security</b> isn’t just about monitoring—it’s about enabling safe, efficient, and compliant work across your organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowMDMWorks;
