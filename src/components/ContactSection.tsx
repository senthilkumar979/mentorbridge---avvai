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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        setSubmitStatus("error");
        // Log detailed error for debugging
        console.error("Error details:", errorData.details || errorData.error);
      }
    } catch (error) {
      console.error("Network error:", error);
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
    <section id={id} className={`py-20 sm:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Start Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career? Connect with our team to learn more
            about our training programs and how we can help you achieve your
            goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Reach out to us through any of the following channels.
                We&apos;re here to answer your questions and guide you through
                the next steps.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 font-medium mb-2">
                        {info.details}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white resize-none"
                  placeholder="Tell us about your inquiry or how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <p className="text-sm text-gray-600">
                By submitting this form, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="text-gray-900 font-medium underline hover:text-gray-700 transition-colors duration-300"
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
