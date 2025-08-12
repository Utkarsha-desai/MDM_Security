import React from "react";
import { ShieldCheck } from "lucide-react";
import FlipCard from "./FlipCard";

const frontCardContent = [
  {
    quote: "“50% Fewer Security Incidents!”",
    image: "/path/to/your/image1.jpg",
  },
  {
    quote: "“MDM Security Gives Me Confidence”",
    image: "/path/to/your/image2.jpg",
  },
  {
    quote: "“Enabling Secure Remote Work”",
    image: "/path/to/your/image3.jpg",
  },
];

const backCardContent = [
  "“MDM Security’s device management is intuitive, with outstanding customer support. Our organization has seen a 50% reduction in security incidents.”",
  "“As an employee, MDM Security gives me confidence that my device and data are protected. I appreciate the transparency and the self-service tools.”",
  "“Before MDM Security, it was difficult to ensure all remote devices were secure. The compliance dashboard gives me instant visibility into device status.”",
];

const Stars = ({ className = "" }) => (
  <span className={`text-yellow-400 text-xl sm:text-2xl leading-none ${className}`} aria-label="5 out of 5 stars">
    ★★★★★
  </span>
);

const MDMSecuritySection = () => {
  return (
    <>
      {/* How MDM Works */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[rgba(54,137,177,1)] mt-10 text-center">
            How MDM Works
          </h2>

          <div className="bg-[rgba(54,137,177,1)] text-white mt-4 p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-10 transition-transform hover:-translate-y-1 hover:shadow-xl">
            <div className="p-4 rounded-full bg-[rgb(54,137,177)] shadow-md">
              <ShieldCheck size={84} aria-hidden="true" />
            </div>

            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Why MDM Security Isn’t Just Another Employee Monitoring Software
              </h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-95">
                Recognized for advancing organizational security and compliance, MDM Security goes beyond
                basic monitoring with unified device management, real-time alerts, and policy enforcement.
                Instead of fragmented tools or surveillance tactics, it delivers a comprehensive, actionable
                view of device activity—helping protect data, ensure compliance, and support productivity
                without compromising user trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mt-10">
            <p className="text-lg sm:text-xl md:text-2xl text-[rgba(54,137,177,1)] font-semibold">
              Built for Visibility, Chosen for Results
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-8">
              People Use MDM Security Daily to Work Smarter
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {frontCardContent.map((item, index) => (
              <FlipCard
                key={index} 
                className="rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 bg-white"
                frontContent={
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <Stars />
                      <span className="text-gray-300 text-6xl leading-none select-none" aria-hidden="true">
                        ”
                      </span>
                    </div>

                    <div
                      className="mt-3 h-40 w-full bg-gray-100 rounded-md bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                      role="img"
                      aria-label="Customer story image"
                    />

                    <p className="mt-4 text-sm font-semibold text-[rgba(54,137,177,1)]">
                      {item.quote}
                    </p>
                  </div>
                }
                backContent={
                  <div className="p-5 h-full flex flex-col justify-between">
                    <p className="text-base sm:text-lg font-medium text-[rgba(54,137,177,1)]">
                      {backCardContent[index]}
                    </p>
                    <div className="flex items-center justify-end gap-2">
                      <Stars />
                      <span className="text-gray-300 text-6xl leading-none select-none" aria-hidden="true">
                        ”
                      </span>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MDMSecuritySection;
