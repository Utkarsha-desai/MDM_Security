
import React from "react";

const Home8 = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#3689B1] rounded-lg text-white text-center py-12 px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Try MDM Security for Free Today
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-100">
            Join 5,100+ teams already cutting waste and driving real performance with MDM Security
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button className="bg-[rgba(54,137,177,1)] text-white text-lg rounded-xl hover:bg-blue-700 transition w-56 border-2 border-white px-4 py-4 hover:shadow-xl hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="bg-white text-[rgba(54,137,177,1)] text-lg rounded-xl hover:bg-blue-300 transition w-56 border-2 border-[rgba(54,137,177,1)] px-4 py-4 hover:shadow-xl hover:-translate-y-1">
              Schedule the Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home8;