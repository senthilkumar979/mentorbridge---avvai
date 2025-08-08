import React from "react";
import { Footer } from "@/components";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
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
              <span className="text-gray-600 font-medium">Privacy Policy</span>
            </div>
            <Link
              href="/"
              className="text-[#d53f8c] hover:text-[#b83280] font-medium transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy for MentorBridge
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: October 11, 2024
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              MentorBridge (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates the website
              https://www.mentorbridge.in (the &ldquo;Service&rdquo;). This
              Privacy Policy informs you of our policies regarding the
              collection, use, and disclosure of personal information when you
              use our Service, including through the &ldquo;Sign in with
              Google&rdquo; feature.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using the Service, you agree to the collection and use of
              information as described in this Privacy Policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect several types of information to provide and improve
                our Service, including:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Personal Data
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When you use &ldquo;Sign in with Google,&rdquo; we collect
                    the following information from your Google account, as
                    allowed by Google:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Profile picture (if applicable)</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Additionally, we may collect other personal information you
                    provide when registering or interacting with the Service,
                    such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>
                      Details related to your mentorship experience (if
                      applicable)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Usage Data
                  </h3>
                  <p className="text-gray-700 mb-3">
                    We automatically collect certain information about how you
                    access and use the Service, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Your device&apos;s Internet Protocol (IP) address</li>
                    <li>Browser type and version</li>
                    <li>Pages of our Service you visit</li>
                    <li>Time spent on those pages and other diagnostic data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Cookies and Tracking Data
                  </h3>
                  <p className="text-gray-700">
                    We use cookies and similar tracking technologies to track
                    activity on our Service and retain certain information. You
                    can control the use of cookies through your browser
                    settings.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Use of Data
              </h2>
              <p className="text-gray-700 mb-4">
                We use the collected data for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>To provide and maintain our Service</li>
                <li>
                  To facilitate account access using the &ldquo;Sign in with
                  Google&rdquo; option
                </li>
                <li>To notify you about changes or updates to our Service</li>
                <li>To provide customer support</li>
                <li>To improve the Service by analyzing usage patterns</li>
                <li>To personalize your experience on the platform</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Sharing of Data
              </h2>
              <p className="text-gray-700">
                We do not share or sell your personal information to third
                parties. However, we may share your information with trusted
                third-party service providers who assist us in operating our
                Service, subject to strict confidentiality obligations.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Security of Data
              </h2>
              <p className="text-gray-700">
                We take reasonable measures to protect your personal
                information, but no method of transmission over the Internet is
                completely secure. Therefore, we cannot guarantee the absolute
                security of your data.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Third-Party Services
              </h2>
              <p className="text-gray-700">
                Our Service may include links to other websites or services,
                such as Google. These third-party services are governed by their
                own privacy policies, and we recommend reviewing their terms.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Your Rights
              </h2>
              <p className="text-gray-700">
                You have the right to access, update, or delete your personal
                information by contacting us at [email@example.com]. You can
                also revoke your Google sign-in permissions through your Google
                account settings.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. We will notify
                you of any changes by posting the new Privacy Policy on this
                page.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:senthilkumar@mentorbridge.in"
                    className="text-[#d53f8c] hover:text-[#b83280] underline"
                  >
                    senthilkumar@mentorbridge.in
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Website:</span>{" "}
                  <a
                    href="https://www.mentorbridge.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d53f8c] hover:text-[#b83280] underline"
                  >
                    https://www.mentorbridge.in
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
