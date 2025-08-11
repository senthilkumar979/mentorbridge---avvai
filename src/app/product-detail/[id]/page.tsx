import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pb-12">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-2xl font-bold text-[#d53f8c] hover:text-[#b83280] transition-colors duration-300"
              >
                MentorBridge
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 font-medium">{product.name}</span>
            </div>
            <Link
              href="/#products"
              className="text-[#d53f8c] hover:text-[#b83280] font-medium transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Product Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Product Logo and Basic Info */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                {product.shortDescription}
              </p>
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">Visit Website</span>
                <svg
                  className="w-5 h-5"
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

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-center">
                <Image
                  src={product.logo}
                  alt={`${product.name} screenshot`}
                  width={400}
                  height={300}
                  className="rounded-xl object-contain max-h-64 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 mb-12">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About {product.name}
            </h2>
            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: product.longDescription }}
                className="text-gray-700 leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-3xl p-8 sm:p-12 text-white mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose {product.name}?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Experience the power of student innovation with cutting-edge
              features designed to solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-sm opacity-90">
                Built with cutting-edge technology and creative problem-solving
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Student-Driven</h3>
              <p className="text-sm opacity-90">
                Created by talented students with real-world experience
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Problem-Solving</h3>
              <p className="text-sm opacity-90">
                Designed to address actual industry challenges
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience {product.name}?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already benefiting from this
            innovative solution. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">Get Started</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <Link
              href="/products"
              className="inline-flex items-center bg-gray-100 text-gray-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-gray-200"
            >
              <span className="mr-2">View All Products</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0l-7-7m7 7l-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
