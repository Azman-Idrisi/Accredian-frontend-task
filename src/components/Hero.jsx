import React, { useState } from "react";
import { ArrowRightCircle, DollarSign, X } from "lucide-react";
import axios from "axios";
import Lottie from "lottie-react";
import loaderAni from "../loader.json";

const ReferralModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    referrerCompany: "",
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    course: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    setLoader(true);

    e.preventDefault();

    const { referrerName, referrerEmail, refereeName, refereeEmail, course } =
      formData;

    if (
      !referrerName ||
      !referrerEmail ||
      !refereeName ||
      !refereeEmail ||
      !course
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await axios.get(
        `https://accredian-backend-task-v9co.onrender.com/referral?referrerName=${encodeURIComponent(
          referrerName
        )}&referrerEmail=${encodeURIComponent(
          referrerEmail
        )}&refereeName=${encodeURIComponent(
          refereeName
        )}&refereeEmail=${encodeURIComponent(
          refereeEmail
        )}&course=${encodeURIComponent(course)}`
      );
      console.log(response.status);

      if (response.status === 201) {
        setLoader(false);
        onClose();
      }
    } catch (error) {
      console.error("There was an error submitting the referral", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-800">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Refer a Friend</h3>
            <p className="text-slate-400 text-sm mt-1">
              Earn up to ₹15,000 per successful referral
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="p-6 space-y-6">
          {/* Referrer Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-slate-300">
              Your Details (Referrer)
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Your Name*
                </label>
                <input
                  type="text"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Your Email*
                </label>
                <input
                  type="email"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Your Phone*
                </label>
                <input
                  type="tel"
                  name="referrerPhone"
                  value={formData.referrerPhone}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Your University/Company
                </label>
                <input
                  type="text"
                  name="referrerCompany"
                  value={formData.referrerCompany}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Friend's Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-slate-300">
              Friend's Details (Referee)
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Friend's Name*
                </label>
                <input
                  type="text"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Friend's Email*
                </label>
                <input
                  type="email"
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Friend's Phone*
                </label>
                <input
                  type="tel"
                  name="refereePhone"
                  value={formData.refereePhone}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Course Interested In*
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="data-science">Data Science & AI</option>
                  <option value="product-management">Product Management</option>
                  <option value="business-analytics">Business Analytics</option>
                  <option value="digital-transformation">
                    Digital Transformation
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Additional Notes
            </label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              rows="3"
              placeholder="Any additional information about your referral..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all"
          >
            {loader ? (
              <Lottie
                style={{ width: 50, height: 50 }}
                loop={true}
                animationData={loaderAni}
              />
            ) : (
              "Submit Referral"
            )}
            <ArrowRightCircle className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

// Modified Hero component with modal functionality and image part added
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="font-inter relative bg-[#020617] h-screen">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-full py-20">
          {/* Left Column */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              <span className="text-blue-400 text-sm">
                New: Referral Program
              </span>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            </div>

            <div className="space-y-6">
              <h1 className="font-inter text-6xl font-bold text-white">
                Learn & Earn
                <span className="font-inter block mt-2 text-2xl font-normal text-gray-400">
                  with your dream universities
                </span>
              </h1>

              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-xl border border-blue-500/20">
                <DollarSign className="w-10 h-10 text-green-400" />
                <div>
                  <p className="text-gray-400">Earn up to</p>
                  <p className="text-2xl font-bold text-green-400">
                    Rs. 15,000
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all"
              >
                Refer Now
                <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl font-medium border border-gray-800 text-gray-300 hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>

            {/* Floating Elements for mobile */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`assets/images/users/${i + 1}.png`}
                    alt={`User ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-black object-cover"
                  />
                ))}
              </div>

              <p>Join 10,000+ students already learning</p>
            </div>
          </div>

          {/* Right Column - Mobile Preview */}
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="w-[320px] h-[640px] mx-auto rounded-[3rem] p-4 bg-gray-900 shadow-2xl">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-800">
                  <img
                    src="/assets/images/webpic.png"
                    alt="App interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 -right-8 p-4 bg-gray-900/90 rounded-xl backdrop-blur border border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Earnings</p>
                    <p className="text-white font-medium">₹2,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Modal */}
      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
