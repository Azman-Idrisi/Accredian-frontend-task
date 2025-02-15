import React, { useState } from "react";
import { ChevronDown, ChevronRight, School, Users } from "lucide-react"; // Use 'School' instead of 'Graduation'

const ReferralBenefits = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showMore, setShowMore] = useState(false);

  
  const categories = [
    { id: "all", name: "ALL PROGRAMS", icon: null },
    { id: "product", name: "PRODUCT MANAGEMENT", icon: null },
    { id: "strategy", name: "STRATEGY & LEADERSHIP", icon: null },
    { id: "business", name: "BUSINESS MANAGEMENT", icon: null },
    { id: "fintech", name: "FINTECH", icon: null },
    { id: "senior", name: "SENIOR MANAGEMENT", icon: null },
    { id: "data", name: "DATA SCIENCE", icon: null },
    { id: "digital", name: "DIGITAL TRANSFORMATION", icon: null },
    { id: "analytics", name: "BUSINESS ANALYTICS", icon: null },
  ];

 
  const programs = [
    {
      title: "Professional Certificate Program in Product Management",
      referrer: 7000,
      referee: 9000,
    },
    {
      title: "PG Certificate Program in Strategic Product Management",
      referrer: 9000,
      referee: 11000,
    },
    {
      title: "Executive Program in Data Driven Product Management",
      referrer: 10000,
      referee: 10000,
    },
    {
      title:
        "Executive Program in Product Management and Digital Transformation",
      referrer: 10000,
      referee: 10000,
    },
    {
      title: "Executive Program in Product Management",
      referrer: 10000,
      referee: 10000,
    },
    {
      title: "Advanced Certification in Product Management",
      referrer: 10000,
      referee: 10000,
    },
    {
      title: "Executive Program in Product Management and Project Management",
      referrer: 10000,
      referee: 10000,
    },
  ];

 
  const displayedPrograms = showMore ? programs : programs.slice(0, 4);

  return (
    <section className="font-inter relative bg-[#020617] py-20">
     
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What Are The{" "}
            <span className="text-blue-500">Referral Benefits</span>?
          </h2>
        </div>

        
        <div className="flex flex-col lg:flex-row gap-6">
         
          <div className="lg:w-1/4">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${
                    activeTab === category.id
                      ? "bg-blue-500/20 text-blue-400 border-l-2 border-blue-500"
                      : "text-gray-400 hover:bg-gray-800/50"
                  }`}
                  onClick={() => setActiveTab(category.id)}
                >
                  <span className="font-medium text-sm">{category.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

       
          <div className="lg:w-3/4">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
              
              <div className="grid grid-cols-3 text-sm font-medium">
                <div className="bg-blue-500/20 text-blue-400 p-4">Programs</div>
                <div className="bg-blue-500/10 text-blue-400 p-4 text-center">
                  Referrer Bonus
                </div>
                <div className="bg-blue-500/15 text-blue-400 p-4 text-center">
                  Referee Bonus
                </div>
              </div>

              
              <div className="flex justify-end p-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Enrolled</span>
                  <div className="relative inline-block w-10 align-middle select-none">
                    <input type="checkbox" id="toggle" className="sr-only" />
                    <div className="w-10 h-5 bg-gray-700 rounded-full shadow-inner"></div>
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-md transform translate-x-5 -translate-y-1/2 top-1/2"></div>
                  </div>
                </div>
              </div>

            
              {displayedPrograms.map((program, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 border-b border-gray-800 hover:bg-gray-800/30 transition-colors ${
                    index % 2 === 0 ? "bg-gray-800/10" : ""
                  }`}
                >
                  <div className="p-4 flex items-center">
                    <School className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />{" "}
                    
                    <span className="text-sm text-gray-300">
                      {program.title}
                    </span>
                  </div>
                  <div className="p-4 text-center text-green-400 font-medium">
                    ₹ {program.referrer.toLocaleString()}
                  </div>
                  <div className="p-4 text-center text-green-400 font-medium">
                    ₹ {program.referee.toLocaleString()}
                  </div>
                </div>
              ))}

              {programs.length > 4 && (
                <div className="p-4 text-center">
                  <button
                    className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 mx-auto transition-colors"
                    onClick={() => setShowMore(!showMore)}
                  >
                    <span>Show {showMore ? "Less" : "More"}</span>
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform ${
                        showMore ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

       
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium transition-all group">
            Refer Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReferralBenefits;
