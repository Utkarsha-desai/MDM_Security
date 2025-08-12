import React from "react";

// Reusable placeholder card for testimonials or feature highlights
const FeatureCard = () => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 w-full h-48 sm:w-80" />
);

// Reusable placeholder for integration logos
const IntegrationLogo = () => (
  <div className="bg-white rounded-lg shadow-md border border-gray-200 w-full h-20 flex items-center justify-center" />
);

const Component = () => {
  // Adjust counts as needed
  const featureCards = Array(2).fill(0);
  const integrationLogos = Array(11).fill(0);

  return (
    <div className="bg-white font-sans">
      {/* Section 1: Real Teams. Real Results. */}
  <section className="bg-blue-50 py-12 sm:py-16 md:py-20 w-full">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Real Teams. Real Results.
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-[rgba(54,137,177,1)] mt-2">
              Powered by MDM Security.
            </h2>
            <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg text-gray-600">
              From saving $2.5M in contractor costs to lifting productivity by 92%,
              companies across industries are using MDM Security to work smarter.
            </p>
 
            {/* Feature Cards */}
            <div className="mt-8 sm:mt-10 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
              {featureCards.map((_, idx) => (
                <FeatureCard key={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Integrations */}
  <section className="py-12 sm:py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-base sm:text-xl text-[rgba(54,137,177,1)] font-semibold tracking-wide">
              Integrations
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 mt-4 sm:mt-6">
              MDM Security Works With the <br className="hidden sm:block" />
              <span className="text-[rgba(54,137,177,1)]">Tools You Already Use</span>
            </h2>
          </div>

          {/* Logos Grid */}
          <div className="mt-8 sm:mt-10 max-w-5xl mx-auto">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 place-items-center"
            >
              {integrationLogos.map((_, idx) => (
                <div key={idx} className="w-24 sm:w-28 md:w-32">
                  <IntegrationLogo />
                </div>
              ))}
            </div>

            {/* Optional helper text */}
            {/* <p className="text-center text-gray-500 text-sm mt-6">
              Plug in your SSO, MDM, HRIS, and collaboration tools in minutes.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Component;
