import React from "react";
import mdm from "../assets/mdm.png";



// Footer Section Component
const Footer = () => {
  const footerLinks = {
    features: [
      "Employee Monitoring",
      "Screenshot Capture",
      "Time & Attendance Tracking",
      "Login & Logout Monitoring",
      "Activity Monitoring",
      "Productivity Management",
      "Notifications & Alerts",
      "Contact Directory",
      "Leave & Time-Off Management",
      "Computer Usage Monitoring",
      "Operational Efficiency Tools",
    ],
    industries: [
      "Healthcare",
      "Call Centers",
      "Finance & Banking",
      "IT & Software Services",
      "BPO",
      "Insurance",
      "Retail & E-Commerce",
      "Education & E-Learning",
      "Manufacturing",
      "Government & Public Sector",
    ],
    useCases: [
      "Billable Hours Tracking",
      "Operational Efficiency Improvement",
      "Workforce Analytics & Insights",
      "Enterprise Workforce Management",
      "Remote Team Monitoring",
      "Employee Support & Assistance",
      "Workload Management",
      "Software & App Utilization Tracking",
    ],
    resources: [
      "Help Center",
      "Become a Partner",
      "Remote Work Guides",
      "Hybrid Work Best Practices",
      "Work from Home Tips",
      "Success Stories",
      "Timesheet",
      "Webinars",
    ],
  };

  return (
    <footer className="bg-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8">
          <img src={mdm} alt="MDM Security Logo" className="h-10 w-auto mb-4 sm:mb-0" />
          <nav className="flex gap-6 font-semibold text-gray-600">
            <a href="#" className="hover:text-[#3689B1]">About Us</a>
            <a href="#" className="hover:text-[#3689B1]">Blogs</a>
            <a href="#" className="hover:text-[#3689B1]">Features Update</a>
          </nav>
        </div>

        <hr />

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className={`font-bold mb-4 ${title === "resources" ? "text-[#3689B1]" : "text-gray-800"}`}>
                {title.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
              </h4>
              <ul className="space-y-3 text-gray-500">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#3689B1]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            <a
              href="https://www.google.com/maps/dir//Office+No.+506,+Floor+No:5th,+HQ7C%2BMC2+Building+Name:Pyramid+Axis,+112%2F1%2F2,+Baner+Rd,+behind+Croma+Showroom,+Veerbhadra+Nagar,+Baner,+Pune,+Maharashtra+411045"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3689B1]"
            >
              Baner, Pune, Maharashtra
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-[#3689B1]">Terms of Use</a>
            <a href="#" className="hover:text-[#3689B1]">Privacy Policy</a>
            <a href="#" className="hover:text-[#3689B1]">Acceptable Use Policy</a>
            <a href="#" className="hover:text-[#3689B1]">System Status</a>
            <a href="#" className="hover:text-[#3689B1]">Developer Platform</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
          <p className="mb-4 md:mb-0">Email: info@cybotronics.com</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>&copy; 2025 MDM Security, Inc - All Rights Reserved.</span>
            <a href="#" className="hover:text-[#3689B1]">Hey AI, learn about us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
