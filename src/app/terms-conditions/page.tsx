import React from "react";
import { Footer } from "@/components";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="text-2xl font-bold text-[#d53f8c] hover:text-[#b83280] transition-colors duration-300"
              >
                MentorBridge
              </a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 font-medium">
                Terms & Conditions
              </span>
            </div>
            <a
              href="/"
              className="text-[#d53f8c] hover:text-[#b83280] font-medium transition-colors duration-300"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions for MentorBridge
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: October 11, 2024
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to MentorBridge! These terms and conditions
              (&ldquo;Terms&rdquo;) outline the rules and regulations for using
              our website, https://www.mentorbridge.in (&ldquo;Service&rdquo;).
              By accessing or using our Service, you agree to these Terms.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Accounts and Registration
              </h2>
              <p className="text-gray-700 mb-4">
                To use some features of the Service, including the mentorship
                programs and scheduling, you may be required to create an
                account. You may register by providing a valid email address or
                using the &ldquo;Sign in with Google&rdquo; option.
              </p>
              <p className="text-gray-700 mb-4">
                By registering, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate and current information</li>
                <li>Keep your account details secure and confidential</li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Use of Service
              </h2>
              <p className="text-gray-700 mb-4">
                MentorBridge connects students with professionals for
                mentorship. By using our platform, you agree to the following:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account.
                </li>
                <li>
                  You may not use the Service for any unlawful or prohibited
                  activity.
                </li>
                <li>
                  You agree to respect the privacy and confidentiality of other
                  users.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Intellectual Property
              </h2>
              <p className="text-gray-700">
                All content, including text, graphics, logos, and software,
                provided on MentorBridge is owned by us or our licensors and is
                protected by copyright laws. You may not reproduce or
                redistribute any content without permission.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Termination
              </h2>
              <p className="text-gray-700">
                We may terminate or suspend your account if you breach these
                Terms. Upon termination, your right to use the Service will
                cease immediately.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                To the maximum extent permitted by law, MentorBridge and its
                affiliates will not be liable for any indirect, incidental, or
                consequential damages arising from the use of our Service.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms will be governed by and construed in accordance with
                the laws of India, without regard to its conflict of law
                provisions.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Modifications to the Terms
              </h2>
              <p className="text-gray-700">
                We may update these Terms from time to time. Any changes will be
                posted on this page, and by continuing to use the Service after
                such changes, you agree to the updated Terms.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:support@mentorbridge.in"
                    className="text-[#d53f8c] hover:text-[#b83280] underline"
                  >
                    support@mentorbridge.in
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
