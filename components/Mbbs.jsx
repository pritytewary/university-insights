"use client";

import React, { useState } from "react";
import {
  Globe,
  GraduationCap,
  BookOpen,
  ArrowRight,
  Mail,
  Phone,
  User,
  MapPin,
} from "lucide-react";

const CountryCard = ({ country, description, countryCode }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className="flex items-center gap-4 mb-4">
      <div className="text-3xl">
        <img
          src={`https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`}
          alt={`${country} flag`}
          className="w-10 h-8 border border-gray-200"
        />
      </div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {country}
      </h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
    <div className="mt-4 flex justify-end">
      <button className="text-blue-600 hover:text-purple-600 flex items-center gap-2 font-medium">
        Learn more <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="flex gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-xl mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
);

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", country: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Journey to Medical Excellence Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Begin your medical career with world-class education from top
              international universities
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors transform hover:scale-105 duration-200 shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Study MBBS Abroad?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Global Recognition
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Internationally recognized degrees accepted worldwide
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Quality Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                World-class facilities and experienced faculty
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Affordable Fees
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cost-effective education without compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Top Countries for MBBS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CountryCard
              country="Russia"
              description="Top medical universities with modern infrastructure"
              countryCode="RU"
            />
            <CountryCard
              country="Uzbekistan"
              description="Affordable education with quality standards"
              countryCode="UZ"
            />
            <CountryCard
              country="Kazakhstan"
              description="Advanced medical programs with practical exposure"
              countryCode="KZ"
            />
            <CountryCard
              country="Philippines"
              description="English-medium instruction with clinical training"
              countryCode="PH"
            />
            <CountryCard
              country="Georgia"
              description="European standard education at reasonable costs"
              countryCode="GE"
            />
            <CountryCard
              country="Kyrgyzstan"
              description="Well-established medical universities with modern facilities"
              countryCode="KG"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Path to Success
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <ProcessStep
              number="1"
              title="Document Submission"
              description="Submit academic records and required documents"
            />
            <ProcessStep
              number="2"
              title="Eligibility Check"
              description="Verification of academic qualifications and requirements"
            />
            <ProcessStep
              number="3"
              title="University Selection"
              description="Choose from our partner universities based on preferences"
            />
            <ProcessStep
              number="4"
              title="Visa Processing"
              description="Complete visa application and documentation"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Begin Your Journey
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2 font-medium">
                  <User size={18} />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2 font-medium">
                  <Mail size={18} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2 font-medium">
                  <Phone size={18} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2 font-medium">
                  <MapPin size={18} />
                  Preferred Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select a country</option>
                  <option value="russia">Russia</option>
                  <option value="uzbekistan">Uzbekistan</option>
                  <option value="kazakhstan">Kazakhstan</option>
                  <option value="philippines">Philippines</option>
                  <option value="georgia">Georgia</option>
                  <option value="kyrgyzstan">Kyrgyzstan</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all transform hover:scale-[0.99] duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    Submit Application
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg text-center">
                  Application submitted successfully! We'll contact you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg text-center">
                  There was an error submitting your application. Please try
                  again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
