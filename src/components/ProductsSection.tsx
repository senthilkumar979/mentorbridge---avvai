import React from "react";
import Image from "next/image";
import { SectionProps } from "@/types";

interface Product {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  features: string[];
  category: string;
  impact: string;
}

export const ProductsSection: React.FC<SectionProps> = ({
  className = "",
  id = "products",
}) => {
  const products: Product[] = [
    {
      id: "securosphere",
      name: "SecuroSphere",
      logo: "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/securosphere-epORkcNMVS6f7iaVAUkYt8mFW1kp3L.png",
      description:
        "Enterprise-grade web authentication solution providing comprehensive security infrastructure for modern applications.",
      website: "https://www.securosphere.in/",
      features: [
        "Multi-Factor Authentication",
        "Single Sign-On Integration",
        "Role-Based Access Control",
        "Real-Time Security Monitoring",
      ],
      category: "Security Platform",
      impact: "Securing 10,000+ user sessions daily",
    },
    {
      id: "stublab",
      name: "StubLab",
      logo: "https://www.stublab.in/static/media/stublab-logo.4487178ca0ee981e1d5bde82b1b38feb.svg",
      description:
        "AI-powered API testing platform that accelerates development workflows with intelligent mock generation and testing automation.",
      website: "https://www.stublab.in/",
      features: [
        "AI-Powered Mock Generation",
        "Dynamic Response Modeling",
        "Collaborative Testing Environment",
        "Version Control Integration",
      ],
      category: "Developer Tools",
      impact: "Used by 500+ development teams",
    },
    {
      id: "stupro",
      name: "StuPro",
      logo: "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/logo-alone.png",
      description:
        "Comprehensive career development platform connecting students with industry opportunities and personalized growth paths.",
      website: "https://www.stupro.info/",
      features: [
        "Career Path Guidance",
        "Skill Assessment & Tracking",
        "Industry Mentorship Matching",
        "Job Opportunity Curation",
      ],
      category: "Career Platform",
      impact: "Helped 1,000+ students find careers",
    },
  ];

  return (
    <section id={id} className={`py-20 sm:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Student Innovation
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Real-World Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the innovative solutions developed by our students during
            their training. These live products demonstrate the practical skills
            and entrepreneurial mindset we cultivate.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                {/* Logo & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={product.logo}
                      alt={`${product.name} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Impact */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Impact
                  </div>
                  <div className="text-sm text-gray-600">{product.impact}</div>
                </div>

                {/* CTA */}
                <a
                  href={`/product-detail/${product.id}`}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-2"
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
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-lg font-medium text-gray-900 mb-2">
              Live Products
            </div>
            <div className="text-gray-600">Developed by students</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-lg font-medium text-gray-900 mb-2">
              Student-Built
            </div>
            <div className="text-gray-600">From concept to deployment</div>
          </div>
        </div>

        {/* Innovation Process */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            From Learning to Innovation
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our project-based learning approach ensures students don&apos;t just
            learn theory— they build real products that solve actual problems
            and serve real users.
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
              Real Problem Solving
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
              Production Deployment
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
              User Impact
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
            Start Building Your Product
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
