"use client";

import React from "react";
import {
  Header,
  HeroSection,
  WhatWeDoSection,
  KeyFeaturesSection,
  ProductDevelopmentSection,
  AchievementsSection,
  ProductsSection,
  ContactSection,
  Footer,
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
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}
