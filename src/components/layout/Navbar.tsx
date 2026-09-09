"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";
import Button from "../ui/Button";
import { NAV_LINKS, BRAND_INFO } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ["hero", "about", "services", "team", "process", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E8E3D8] shadow-[0_4px_20px_-8px_rgba(15,23,42,0.05)] py-3"
          : "bg-[#FDFBF7]/80 backdrop-blur-xs border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Monogram */}
          <BrandLogo variant="dark" />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#F5F2EA]/70 border border-[#E9E4D9]/80 backdrop-blur-xs"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89047] ${
                    isActive
                      ? "text-[#0F172A] bg-white shadow-xs font-semibold"
                      : "text-[#4B5563] hover:text-[#0F172A] hover:bg-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-medium text-[#0F172A] bg-white border border-[#DCD6C8] hover:border-[#B89047] hover:bg-[#FBF9F4] rounded-[6px] shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89047] group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B89047] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="#contact"
              className="px-3 py-1.5 text-xs font-medium text-[#0F172A] bg-white border border-[#DCD6C8] rounded-[6px]"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] hover:bg-[#EFECE4] rounded-[6px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89047]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-[#0F172A]/40 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-[65px] right-0 bottom-0 w-full sm:w-80 bg-[#FDFBF7] border-l border-[#E8E3D8] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between p-6 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6">
          <div className="pb-3 border-b border-[#E8E3D8]">
            <p className="text-xs font-mono uppercase tracking-wider text-[#B89047]">
              Navigation
            </p>
          </div>

          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-[#12161A] hover:text-[#0F172A] hover:bg-[#F3EFE6] rounded-[6px] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-[#E8E3D8]">
          <div className="space-y-2 text-xs text-[#4B5563]">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#B89047]" />
              <span>{BRAND_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#B89047]" />
              <span>{BRAND_INFO.phone}</span>
            </div>
          </div>

          <Button
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            variant="primary"
            size="md"
            className="w-full justify-between"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}

