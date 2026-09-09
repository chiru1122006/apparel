"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavSection {
  id: string;
  name: string;
}

const SECTIONS: NavSection[] = [
  { id: "hero", name: "SUNRISE" },
  { id: "about", name: "MORNING" },
  { id: "team", name: "MIDDAY" },
  { id: "services", name: "GOLDEN HOUR" },
  { id: "process", name: "DUSK" },
  { id: "contact", name: "EVENING" },
];

export default function ScrollProgressNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;

      // Hide when scrolled into footer
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= vh * 0.75) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      // Detect active section
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= vh * 0.5 && rect.bottom >= vh * 0.15) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-start select-none pointer-events-auto transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Section Timeline Tracker"
    >
      <div className="flex flex-col space-y-3">
        {SECTIONS.map((section, idx) => {
          const isActive = activeSection === section.id;

          return (
            <div key={section.id} className="flex flex-col items-start group">
              {/* Main Section Row */}
              <Link
                href={`#${section.id}`}
                className="flex items-center gap-2.5 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89047] rounded-xs"
              >
                {/* Horizontal Dash indicator */}
                <div
                  className={`h-[1.5px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-5 bg-[#0F172A]"
                      : "w-2.5 bg-[#8C93A0]/60 group-hover:w-4 group-hover:bg-[#0F172A]"
                  }`}
                />

                {/* Section Title */}
                <span
                  className={`text-[10px] tracking-[0.18em] font-sans transition-all duration-200 uppercase ${
                    isActive
                      ? "text-[#0F172A] font-bold translate-x-0.5"
                      : "text-[#6B7280] font-medium group-hover:text-[#0F172A]"
                  }`}
                >
                  {section.name}
                </span>
              </Link>

              {/* Sub-dashes connecting to next section (if not last) */}
              {idx < SECTIONS.length - 1 && (
                <div className="flex flex-col space-y-1.5 pl-[1px] my-1">
                  <div className="w-[1.5px] h-1.5 bg-[#A0A7B5]/40 rounded-full" />
                  <div className="w-[1.5px] h-1.5 bg-[#A0A7B5]/40 rounded-full" />
                  <div className="w-[1.5px] h-1.5 bg-[#A0A7B5]/40 rounded-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
