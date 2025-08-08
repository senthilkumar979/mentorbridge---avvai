"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { BaseComponentProps } from "@/types";

export const Header: React.FC<BaseComponentProps> = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = useMemo(
    () => [
      { id: "home", label: "Home", href: "#home" },
      { id: "what-we-do", label: "What We Do", href: "#what-we-do" },
      { id: "features", label: "Features", href: "#features" },
      { id: "achievements", label: "Achievements", href: "#achievements" },
      { id: "products", label: "Products", href: "#products" },
      { id: "mentors", label: "Mentors", href: "/mentors", isPage: true },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll effect for header background
      setIsScrolled(window.scrollY > 50);

      // Handle scrollspy
      const sections = navigationItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  const scrollToSection = (href: string, isPage: boolean = false) => {
    if (isPage) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center space-x-2"
            >
              <Image
                src="https://www.mentorbridge.in/_next/static/media/icon-logo-horizontal.2500857b.svg"
                alt="MentorBridge"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href, item.isPage);
                }}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-[#d53f8c]"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-700 hover:text-[#d53f8c]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && !item.isPage && (
                  <div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      isScrolled ? "bg-[#d53f8c]" : "bg-white"
                    }`}
                  ></div>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-[#d53f8c]"
                  : "text-white hover:text-white/80"
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 mt-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href, item.isPage);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === item.id && !item.isPage
                      ? "text-[#d53f8c] bg-purple-50"
                      : "text-gray-700 hover:text-[#d53f8c] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
