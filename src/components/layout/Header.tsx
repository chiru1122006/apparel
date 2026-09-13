"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronRight, Phone, Mail } from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";

interface NavSection {
  name: string;
  href: string;
  id: string;
  num: string;
}

const SECTIONS: NavSection[] = [
  { name: "Home", href: "#hero", id: "hero", num: "01" },
  { name: "About", href: "#about", id: "about", num: "02" },
  { name: "Services", href: "#services", id: "services", num: "03" },
  { name: "Team", href: "#team", id: "team", num: "04" },
  { name: "Process", href: "#process", id: "process", num: "05" },
  { name: "Contact", href: "#contact", id: "contact", num: "06" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Toggle slight elevation when scrolled
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const scrollPosition = window.scrollY + 220;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
          isScrolled
            ? "bg-[#F2F3F5]/95 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            : "bg-[#F2F3F5]/90"
        } backdrop-blur-md border-b border-black`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between gap-4">
            {/* LEFT: Brand Logo */}
            <div className="flex items-center shrink-0">
              <Link
                href="#hero"
                className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-[4px]"
                aria-label="Concord Apparel Home"
              >
                <Image
                  src="/hero_images/logo/logo.png"
                  alt="Concord Apparel"
                  width={240}
                  height={80}
                  priority
                  className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* RIGHT (Desktop): Section Navigation Buttons */}
            <nav
              className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-full bg-black/[0.04] border border-black/10 backdrop-blur-xs ml-auto"
              aria-label="Main Navigation"
            >
              {SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <Link
                    key={section.id}
                    href={section.href}
                    className={`relative px-3.5 lg:px-4 py-1.5 text-xs lg:text-[13px] font-medium tracking-wider uppercase rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                      isActive
                        ? "bg-[#12161A] text-white shadow-xs font-semibold"
                        : "text-[#4B5563] hover:text-[#12161A] hover:bg-black/5"
                    }`}
                  >
                    {section.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger Toggle (Right) */}
            <div className="md:hidden flex items-center shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#12161A] hover:bg-black/5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Small crisp black line divider under the header */}
        <div className="w-full h-[1px] bg-black pointer-events-none" aria-hidden="true" />
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-black/40 backdrop-blur-xs z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Dropdown / Drawer */}
      <div
        className={`fixed top-[65px] left-0 right-0 bg-[#F2F3F5] border-b border-black shadow-2xl z-50 transform transition-all duration-300 ease-in-out md:hidden flex flex-col p-5 max-h-[calc(100vh-65px)] overflow-y-auto ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 pointer-events-none invisible"
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2.5 border-b border-black/10">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#B89047] font-semibold">
              Explore Sections
            </p>
            <span className="text-[10px] font-mono text-[#6B7280]">6 Sections</span>
          </div>

          {/* Mobile Section Buttons */}
          <nav className="grid grid-cols-1 gap-2" aria-label="Mobile Navigation">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <Link
                  key={section.id}
                  href={section.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-[8px] text-sm font-medium transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? "bg-[#12161A] text-white border-black font-semibold shadow-xs"
                      : "bg-white/80 text-[#12161A] border-black/10 hover:border-black/30 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-mono ${
                        isActive ? "text-[#B89047]" : "text-[#9CA3AF]"
                      }`}
                    >
                      {section.num}
                    </span>
                    <span className="tracking-wide uppercase text-xs">{section.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#B89047] translate-x-0.5" : "text-[#9CA3AF]"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Bottom Info & CTA */}
        <div className="space-y-3.5 pt-5 mt-4 border-t border-black/10">
          <div className="space-y-1.5 text-xs text-[#4B5563]">
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="flex items-center gap-2.5 py-1 hover:text-black transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B89047] shrink-0" />
              <span className="truncate">{BRAND_INFO.email}</span>
            </a>
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-2.5 py-1 hover:text-black transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89047] shrink-0" />
              <span>{BRAND_INFO.phone}</span>
            </a>
          </div>

          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] bg-[#12161A] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B89047]" />
          </Link>
        </div>
      </div>
    </>
  );
}
