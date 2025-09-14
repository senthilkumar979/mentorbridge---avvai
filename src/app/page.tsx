"use client";

import {
  AchievementsSection,
  ContactSection,
  Footer,
  Header,
  HeroSection,
  KeyFeaturesSection,
  ProductDevelopmentSection,
  ProductsSection,
  WhatWeDoSection,
} from "@/components";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection id="home" />
      <WhatWeDoSection id="what-we-do" />
      <KeyFeaturesSection id="features" />
      <ProductDevelopmentSection />
      <AchievementsSection />
      <ProductsSection id="products" />
      {/* <Testimonials id="testimonials" /> */}
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}
