import React from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 font-inter text-slate-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Programs Column */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Programs</h3>
            <ul className="space-y-4">
              {[
                "Data Science & AI",
                "Product Management",
                "Business Analytics",
                "Digital Transformation",
                "Business Management",
                "Project Management",
                "Strategy & Leadership",
                "Senior Management",
                "Fintech",
              ].map((program) => (
                <li key={program}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:admissions@accredian.com"
                  className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Data Science Queries:</p>
                    <p>admissions@accredian.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919079653292"
                  className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Admission Helpline:</p>
                    <p>+91 9079653292 (9 AM - 7 PM)</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                  Haryana 122015
                </p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {[
                "About",
                "Career",
                "Blog",
                "Admission Policy",
                "Referral Policy",
                "Privacy Policy",
                "Terms of Service",
                "Master FAQs",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-slate-800 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 space-y-4">
              <h4 className="text-white font-semibold">
                Speak with our Learning Advisor
              </h4>
              <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                Schedule 1-on-1 Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-sm">
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
