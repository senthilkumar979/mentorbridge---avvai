import React from "react";
import { SectionProps } from "@/types";

export const ProductsSection: React.FC<SectionProps> = ({
  className = "",
  id = "products",
}) => {
  const products = [
    {
      name: "SecuroSphere",
      logo: "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/securosphere-epORkcNMVS6f7iaVAUkYt8mFW1kp3L.png",
      description:
        "All-in-one web authentication solution, combining power, flexibility, and intelligence to make your security journey a whole lot easier",
      website: "https://www.securosphere.in/",
      features: [
        "Multi-factor authentication",
        "Single sign-on (SSO)",
        "Role-based access control",
        "Real-time security monitoring",
        "Compliance reporting",
      ],
      category: "Security Solution",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "StubLab",
      logo: "https://www.stublab.in/static/media/stublab-logo.4487178ca0ee981e1d5bde82b1b38feb.svg",
      description:
        "Ultimate API Mocking tool enabling rapid and flexible API testing with AI-driven dynamic model responses. Test Faster, Smarter.",
      website: "https://www.stublab.in/",
      features: [
        "AI-powered mock generation",
        "Dynamic response models",
        "Real-time API testing",
        "Collaborative workspace",
        "Version control integration",
      ],
      category: "API Testing Tool",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "StuPro",
      logo: "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/logo-alone.png",
      description:
        "From Student to Professional. A career wingman, making sure you never miss an opportunity to learn, practice, and grow. Faster | Smarter | Better",
      website: "https://www.stupro.info/",
      features: [
        "Career path guidance",
        "Skill assessment tools",
        "Learning track recommendations",
        "Industry insights",
        "Mentorship matching",
      ],
      category: "Career Platform",
      color: "from-purple-500 to-pink-500",
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
            Student Innovations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Proud Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the innovative solutions developed by our talented
            students. These products showcase the real-world impact of our
            training program and the creativity of our learners.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                <div
                  className={`bg-gradient-to-r ${product.color} rounded-2xl h-full w-full`}
                ></div>
              </div>

              <div className="relative z-10 bg-white rounded-2xl p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                  <div className="mb-4 sm:mb-0 sm:mr-4">
                    <img
                      src={product.logo}
                      alt={`${product.name} logo`}
                      className="h-16 w-auto max-w-full object-contain"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700 mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#d53f8c] transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm font-bold mb-6 text-gray-600 leading-relaxed group-hover:text-[#d53f8c] transition-colors duration-300">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full mt-2 mr-3 flex-shrink-0`}
                      ></div>
                      <span className="text-xs sm:text-sm text-gray-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visit Website Button */}
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${product.color} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-2xl`}
                >
                  <span className="mr-2">Visit Website</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-[#d53f8c] mb-2">3</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">
              Products Developed
            </div>
            <div className="text-sm text-gray-600">
              Real-world solutions created by students
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-[#d53f8c] mb-2">100%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">
              Student-Driven
            </div>
            <div className="text-sm text-gray-600">
              From concept to deployment by learners
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-[#d53f8c] mb-2">Live</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">
              Production Ready
            </div>
            <div className="text-sm text-gray-600">
              Deployed and accessible to users worldwide
            </div>
          </div>
        </div>

        {/* Innovation Story */}
        <div className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                From Learning to Innovation
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Our training program doesn&apos;t just teach skills—it empowers
                students to create real-world solutions. These products
                demonstrate the practical application of modern technologies and
                the entrepreneurial spirit we foster.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-[#d53f8c] rounded-full"></div>
                  </div>
                  <span>Real-world problem solving</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-[#d53f8c] rounded-full"></div>
                  </div>
                  <span>Industry-standard development practices</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-[#d53f8c] rounded-full"></div>
                  </div>
                  <span>User-centered design and development</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold mb-2">🎯</div>
                <div className="text-lg">Innovation Hub</div>
                <div className="text-sm opacity-90 mt-2">
                  Where ideas become reality
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Own Product?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our training program and turn your ideas into innovative
            solutions. Learn the skills needed to create products that make a
            real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Building
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
