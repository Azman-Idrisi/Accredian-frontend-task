import React, { useState, useEffect } from "react";

const Refer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = document.getElementById("refer-section");
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollY > sectionTop - window.innerHeight / 2 &&
          scrollY < sectionTop + sectionHeight
        ) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11h3m-3 4h3"
          />
        </svg>
      ),
      title: "Submit referrals easily",
      description:
        "Submit referrals easily via our website's referral section.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Earn rewards",
      description:
        "Earn rewards once your referral joins an Accredian program.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Receive bonus",
      description:
        "Referrer receives a bonus 30 days after program enrollment.",
    },
  ];

  return (
    <section
      id="refer-section"
      className="w-full relative font-inter mx-auto px-4 py-20 bg-[#020617]"
    >
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          How Do I{" "}
          <span className="text-blue-500 relative">
            Refer?
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform ${
                isVisible ? "scale-x-100" : "scale-x-0"
              } transition-transform duration-1000 origin-left`}
            ></span>
          </span>
        </h2>
      </div>

      
      <div className="relative">
        
        <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200">
          <div
            className={`h-full bg-blue-500 transform transition-all duration-1500 ease-out ${
              isVisible ? "w-full" : "w-0"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
           
              <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-500"></div>
              </div>

              
              <div className="bg-[#0f172a] rounded-xl shadow-lg hover:shadow-xl p-6 h-full transform transition-all duration-300 hover:-translate-y-2">
                
                <div className="relative w-16 h-16 mx-auto mb-6 group">
                  <div className="absolute inset-0 rounded-full bg-blue-100 transform transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-full h-full text-blue-500 group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

              
                <h3 className="text-xl text-[#f8fafc] font-semibold text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-[#94a3b8] text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="mt-16 text-center">
        <button
          className={`relative inline-flex items-center px-8 py-3 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <span className="relative z-10 mr-2">Refer Now</span>
          <svg
            className="w-5 h-5 relative z-10 transition-transform duration-300 transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <div className="absolute top-0 left-0 w-0 h-full bg-blue-700 transition-all duration-300 group-hover:w-full"></div>
        </button>
      </div>
    </section>
  );
};

export default Refer;
