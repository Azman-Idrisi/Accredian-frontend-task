import React, { useState } from "react";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("eligibility");
  const [activeQuestion, setActiveQuestion] = useState("q1");

  const faqs = [
    {
      id: "q1",
      question:
        "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      answer:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
    {
      id: "q2",
      question: "What is the minimum system configuration required?",
      answer:
        "System requirements information will be provided upon enrollment.",
    },
  ];

  return (
    <section className="min-h-screen h-full font-inter relative bg-[#020617] flex items-center justify-center py-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative w-full max-w-4xl mx-auto px-4 space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">FAQ Section</span>
          </div>
          <h2 className="text-4xl font-bold text-white px-4">
            Got{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Questions?
            </span>
            <br />
            We've Got Answers
          </h2>
        </div>

        {/* Navigation Pills */}
        <div className="flex flex-wrap gap-3 justify-center px-4">
          {["Eligibility", "How To Use?", "Terms & Conditions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.toLowerCase()
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6 px-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-blue-500/50"
            >
              <button
                onClick={() =>
                  setActiveQuestion(activeQuestion === faq.id ? "" : faq.id)
                }
                className="w-full px-8 py-6 flex items-center justify-between gap-6"
              >
                <span className="text-lg font-medium text-white text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-blue-400 transition-transform duration-300 ${
                    activeQuestion === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeQuestion === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 text-slate-300 border-t border-slate-700/50 mt-2 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl mx-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          <div className="relative p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Want to delve deeper?</h3>
                <p className="text-blue-200">
                  Get expert insights from our program team
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;