"use client";

import React, { useState } from "react";
import { SectionProps } from "@/types";

export const ContactSection: React.FC<SectionProps> = ({
  className = "",
  id = "contact",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      details: "Dindigul, Tamilnadu, India",
      description: "Our training center is located in the heart of Tamil Nadu",
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 9176008807, +32 466040666",
      description: "Call us for immediate assistance and inquiries",
    },
    {
      icon: "✉️",
      title: "Email",
      details: "senthilkumar@mentorbridge.in",
      description: "Send us your questions and feedback",
    },
  ];

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact MentorBridge
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start your journey with us? Get in touch with our team for
            any questions about our training programs or mentorship
            opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We&apos;re here to help you succeed. Reach out to us through any
                of the following channels, and we&apos;ll get back to you as
                soon as possible.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      <p className="text-lg text-[#d53f8c] font-semibold mb-2">
                        {info.details}
                      </p>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#d53f8c]/20 focus:border-[#d53f8c] hover:border-gray-300 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#d53f8c]/20 focus:border-[#d53f8c] hover:border-gray-300 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#d53f8c]/20 focus:border-[#d53f8c] hover:border-gray-300 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white resize-none"
                  placeholder="Tell us about your inquiry or how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-green-700 font-medium">
                      Thank you! Your message has been sent successfully.
                      We&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="text-red-500 mr-2">✗</div>
                    <p className="text-red-700 font-medium">
                      Sorry, there was an error sending your message. Please try
                      again.
                    </p>
                  </div>
                </div>
              )}
            </form>

            {/* Form Note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                By submitting this form, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#d53f8c] hover:underline"
                >
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
