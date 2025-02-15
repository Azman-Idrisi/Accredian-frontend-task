import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navlinks = [
    { name: "Refer and Earn", path: "/refer-and-earn" },
    { name: "Resources", path: "/resources" },
    { name: "Benefits", path: "/about-us" },
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50
      ${visible ? "top-0" : "-top-full"}
      ${
        window.scrollY > 10
          ? "bg-black/30 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl font-inter mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <div className="flex-shrink-0 flex items-center gap-5">
            <img
              src="assets/images/Logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            <button
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg 
              text-sm font-medium transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Courses
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          
          <div className="hidden md:flex items-center space-x-1">
            {navlinks.map((link, index) => (
              <a
                key={`${link.name}-${index}`} 
                href={link.path}
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium 
                  transition-all hover:bg-white/5 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}


            <button
              className="ml-4 bg-[#94A3B833] hover:bg-[#475569] text-white px-5 py-2 rounded-lg 
              text-sm font-medium transition-all transform hover:scale-105"
            >
              Sign in
            </button>

            <button
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg 
              text-sm font-medium transition-all transform hover:scale-105"
            >
              Try for free
            </button>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300
                hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/80 backdrop-blur-lg border-b border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navlinks.map((link, index) => (
              <a
                key={`${link.name}-${index}`} // Unique key using name and index
                href={link.path}
                className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 
                  rounded-lg text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 
              rounded-lg text-base font-medium transition-colors"
            >
              Try for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
