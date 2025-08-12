import React from "react";
import vai from '../assets/vai.svg';
import ak from '../assets/ak.svg';
import sid from '../assets/sid.svg';

const MdmSecurityPlatform = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Section 1 */}
      <section className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 lg:pl-16">
          <h2 className="text-4xl font-bold mb-4 text-[rgba(54,137,177,1)] ">MDM Security Platform</h2>

          <p className="text-gray-600 mb-10 mr-15">
            Visibility That Protects, Not Policies
            <br />

            Manual device checks and fragmented tools leave your organization exposed. MDM Security
             delivers real time oversight and
            control so you can safeguard data, enforce security policies, and support your teams without invading privacy.
          </p>

          <ul className="list-disc ml-10 text-gray-600 space-y-4">
            <li className="marker:text-[rgba(54,137,177,1)]"> Automate device compliance and security checks no more manual gaps</li>
            <li className="marker:text-[rgba(54,137,177,1)]"> Instantly detect unauthorized access or risky behavior</li>
            <li className="marker:text-[rgba(54,137,177,1)]"> See which devices, apps, and networks are in use across your fleet</li>
            <li className="marker:text-[rgba(54,137,177,1)]"> Match device activity to policy requirements for seamless audits</li>
          </ul>
        </div>

        {/* Content */}
         <div className="mt-18 flex flex-col md:flex-row items-center gap-2">
                {/* Left image placeholder */}
               <div className="bg-blue-200 p-2 rounded-xl relative w-full md:w-[700px] h-[350px] mx-auto mr-20">
        
                 <div className="w-77 h-54 bg-white rounded-lg shadow-lg absolute top-6 left-24 z-10shadow-md  transition-all duration-300 pt-10 object-cover  ease-in-out hover:shadow-2xl hover:-translate-y-2 "></div>
                  <div className="w-77 h-54 bg-white rounded-lg shadow-lg absolute bottom-6 mt-2 right-24 z-40shadow-md   transition-all duration-300 pt-10 object-cover  ease-in-out hover:shadow-2xl hover:-translate-y-2"></div>
                  {/* Chat Box 1 */}
            <div className="absolute right-23 bg-white shadow-lg border border-blue-200 rounded-xl px-4 py-2 w-88 text-sm text-gray-700 flex items-center gap-2">
          <img src={sid} alt="Monitor Icon" className="w-5 h-6" />
    <span>Work with more focus, autonomy, and trust.</span>
        </div>
        
        {/* Chat Box 2 */}
        <div className="absolute bottom-4 right-95 bg-white shadow-lg border border-blue-200 rounded-xl px-4 py-2 ml-20 w-60 text-sm text-gray-700 flex items-center gap-2">
          <img src={ak} alt="Focus Icon" className="w-5 h-6" />
         
            <span>Easy to monitoring Data</span>
        </div>
        
        {/* Chat Box 3 */}
        <div className="absolute top-2/4 right-85 bg-white shadow-lg border border-blue-200 rounded-xl px-4 py-2 w-88 text-sm text-gray-700 flex items-center gap-2">
          <img src={vai} alt="Trust Icon" className="w-5 h-6" />
          <span>Work with more focus, autonomy, and trust.</span>
        </div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 w-300 ml-30 mr-30 py-10 px-6 flex flex-col items-center justify-center text-center">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Main flex container */}
          {/* Mobile: Stacks vertically (flex-col) */}
          {/* Desktop: Becomes a row (md:flex-row), aligns items to center, and justifies content between */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Heading */}
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 text-center md:text-left">
              Try MDM Security for Free Today
            </h3>

            {/* Buttons container */}
            {/* flex-shrink-0 prevents the button group from shrinking on smaller desktop screens */}
            <div className="flex flex-shrink-0 gap-4">
              <button className="bg-[rgba(54,137,177,1)] text-white px-6 py-3 rounded-md border-2 border-white hover:bg-[rgba(54,137,177,1)] transition-colors duration-300 hover:shadow-xl hover:-translate-y-2">
                Start Free Trial
              </button>
              <button className="bg-white text-[rgba(54,137,177,1)] border border-[rgba(54,137,177,1)] px-6 py-3 rounded-md hover:bg-blue-100 transition-colors duration-300 hover:shadow-xl hover:-translate-y-2">
                Book Demo
              </button>
            </div>

          </div>
        </div> 
      </section>

      <section className="container mx-auto px-6 py-12 mt-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Orbit Illustration */}
        <div className="flex-1 flex justify-center items-center relative min-h-[32rem]">
  <div className="relative flex items-center justify-center h-96 w-96 rounded-full">
    {/* Sun/Center */}
    <div className="absolute w-12 h-12 bg-[rgba(54,137,177,1)] rounded-full z-10"></div>

    {/* Orbit 1 */}
    <div className="absolute w-24 h-24 border border-[rgba(54,137,177,1)] rounded-full flex items-center justify-center">
      <div className="absolute w-4 h-4 bg-[rgba(54,137,177,1)] rounded-full -top-2 left-1/2 -translate-x-1/2"></div>
    </div>

    {/* Orbit 2 */}
    <div className="absolute w-48 h-48 border border-[rgba(54,137,177,1)] rounded-full flex items-center justify-center">
      <div className="absolute w-4 h-4 bg-[rgba(54,137,177,1)] rounded-full top-1/2 -right-2 -translate-y-1/2"></div>
    </div>

    {/* Orbit 3 */}
    <div className="absolute w-72 h-72 border border-[rgba(54,137,177,1)] rounded-full flex items-center justify-center">
      <div className="absolute w-4 h-4 bg-[rgba(54,137,177,1)] rounded-full -bottom-2 left-1/4"></div>
    </div>

    {/* Orbit 4 */}
    <div className="absolute w-96 h-96 border border-[rgba(54,137,177,1)] rounded-full flex items-center justify-center">
      <div className="absolute w-4 h-4 bg-[rgba(54,137,177,1)] rounded-full top-1/3 -left-2 -translate-y-1/2"></div>
    </div>

    {/* Orbit 5 */}
    <div className="absolute w-[30rem] h-[30rem] border border-[rgba(54,137,177,1)] rounded-full flex items-center justify-center">
      <div className="absolute w-4 h-4 bg-[rgba(54,137,177,1)] rounded-full bottom-1/4 right-1/4"></div>
    </div>
     <div className="absolute top-2 left-40 bg-white shadow-lg border border-blue-200 rounded-xl px-4 py-2 w-70 text-sm text-gray-700 flex items-center gap-2">
              <img src={vai} alt="Monitor" className="w-5 h-5" />
              <span>Easy monitoring of real-time data</span>
            </div>

            <div className="absolute top-1/3 right-57 bg-white shadow-lg border border-blue-200 rounded-xl px-4 py-2 w-74 text-sm text-gray-700 flex items-center gap-2">
              <img src={ak} alt="Focus" className="w-5 h-5" />
              <span>Work with focus and autonomy</span>
            </div>

            <div className="absolute bottom-18 left-78 bg-white shadow-lg border border-blue-200 rounded-xl px-4 py-2 w-70 text-sm text-gray-700 flex items-center gap-2">
              <img src={sid} alt="Trust" className="w-5 h-5" />
              <span>Build trust through transparency</span>
            </div>

            <div className="absolute bottom-10 right-58 bg-white shadow-lg border border-blue-200 rounded-xl px-4 py-2 w-74 text-sm text-gray-700 flex items-center gap-2">
              <img src={vai} alt="Secure" className="w-5 h-5" />
              <span>Ensure security and data protection</span>
            </div>

  </div>
</div>

           
          {/* Right: Text Content */}
          <div className="flex-1 lg:pl-16">
            <h2 className="text-4xl font-bold mb-4 text-[rgba(54,137,177,1)] ">MDM Security Platform</h2>

            <p className="text-gray-600 mb-10 mr-20">
              Visibility That Protects, Not Policies
              <br />

              Manual device checks and fragmented tools leave your organization exposed. MDM Security delivers real time oversight and
              control so you can safeguard data, enforce security policies, and support your teams without invading privacy.
            </p>

            <ul className="list-disc ml-2 text-gray-600 space-y-4">
              <li className="marker:text-[rgba(54,137,177,1)]"> Automate device compliance and security checks no more manual gaps</li>
              <li className="marker:text-[rgba(54,137,177,1)]"> Instantly detect unauthorized access or risky behavior</li>
              <li className="marker:text-[rgba(54,137,177,1)]"> See which devices, apps, and networks are in use across your fleet</li>
              <li className="marker:text-[rgba(54,137,177,1)]"> Match device activity to policy requirements for seamless audits</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MdmSecurityPlatform;
