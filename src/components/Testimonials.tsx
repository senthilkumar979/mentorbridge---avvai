import React from "react";
import { SectionProps } from "@/types";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo?: string;
  message: string;
  avatar?: string;
  rating: number;
  category: "founder" | "hr";
}

export const Testimonials: React.FC<SectionProps> = ({
  className = "",
  id = "testimonials",
}) => {
  const testimonials: Testimonial[] = [
    {
      id: "founder-1",
      name: "Sarah Chen",
      role: "Founder & CEO",
      company: "TechFlow Solutions",
      message:
        "The quality of students from MentorBridge is exceptional. They come with not just technical skills but also a strong understanding of real-world development practices. We've hired three developers from their program, and they've all exceeded our expectations.",
      rating: 5,
      category: "founder",
    },
    {
      id: "hr-1",
      name: "Michael Rodriguez",
      role: "Senior HR Manager",
      company: "InnovateCorp",
      message:
        "MentorBridge students stand out in interviews. Their practical project experience and industry-ready skills make them ideal candidates. We've reduced our onboarding time significantly since partnering with them.",
      rating: 5,
      category: "hr",
    },
    {
      id: "founder-2",
      name: "Priya Patel",
      role: "Co-Founder",
      company: "StartupHub",
      message:
        "As a startup, we need developers who can hit the ground running. MentorBridge graduates bring exactly that - they're productive from day one and contribute meaningfully to our product development.",
      rating: 5,
      category: "founder",
    },
    {
      id: "hr-2",
      name: "Jennifer Kim",
      role: "Talent Acquisition Lead",
      company: "GlobalTech",
      message:
        "The mentorship program at MentorBridge produces well-rounded professionals. Their students demonstrate excellent communication skills, technical expertise, and a collaborative mindset that fits perfectly in our culture.",
      rating: 5,
      category: "hr",
    },
    {
      id: "founder-3",
      name: "David Thompson",
      role: "Founder",
      company: "CloudScale",
      message:
        "We've been consistently impressed by the caliber of students from MentorBridge. Their hands-on experience with modern technologies and real project portfolios make them valuable additions to any development team.",
      rating: 5,
      category: "founder",
    },
    {
      id: "hr-3",
      name: "Lisa Wang",
      role: "HR Director",
      company: "FutureTech",
      message:
        "MentorBridge has become our go-to source for junior developers. Their training program ensures students are not just technically proficient but also understand business requirements and user needs.",
      rating: 5,
      category: "hr",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getCategoryLabel = (category: "founder" | "hr") => {
    return category === "founder" ? "Founder" : "HR Professional";
  };

  return (
    <section id={id} className={`py-20 sm:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Industry Feedback
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from hiring managers and founders who have experienced the
            quality and professionalism of our graduates in their organizations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-gray-300 hover:bg-gray-100"
            >
              {/* Quote */}
              <blockquote className="mb-6">
                <div className="text-lg text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.message}&rdquo;
                </div>
              </blockquote>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {testimonial.company}
                  </div>
                </div>
                <div className="px-3 py-1 bg-gray-200 rounded-full text-xs font-medium text-gray-600">
                  {getCategoryLabel(testimonial.category)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-lg font-medium text-gray-900 mb-2">
              Satisfaction Rate
            </div>
            <div className="text-gray-600">From hiring partners</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-lg font-medium text-gray-900 mb-2">
              Partner Companies
            </div>
            <div className="text-gray-600">Trusting our graduates</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-lg font-medium text-gray-900 mb-2">
              Placement Success
            </div>
            <div className="text-gray-600">Within 6 months</div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Partner with MentorBridge
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing network of companies that trust MentorBridge
            graduates to drive innovation and excellence in their organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Industry-Ready Graduates
            </div>
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Reduced Onboarding Time
            </div>
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Ongoing Support
            </div>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-gray-100 inline-flex items-center"
          >
            Explore Partnership
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
