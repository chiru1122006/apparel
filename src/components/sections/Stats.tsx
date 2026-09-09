"use client";

import React from "react";
import { STATS_DATA } from "@/data/siteData";

function StatItemContent() {
  return (
    <div className="flex items-center whitespace-nowrap">
      {STATS_DATA.map((stat) => (
        <React.Fragment key={stat.label}>
          <div className="flex items-center gap-4 font-sans shrink-0">
            <span
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-none tracking-tight"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #9ca3af 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {stat.value}
            </span>
            <div className="flex flex-col justify-center text-left">
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wide leading-tight">
                {stat.label}
              </span>
              <span className="text-[11px] font-medium text-[#9ca3af] leading-tight mt-0.5">
                {stat.sublabel}
              </span>
            </div>
          </div>

          {/* Rotating Star Separator */}
          <span className="mx-6 sm:mx-10 inline-flex items-center justify-center shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 sm:w-6 sm:h-6 text-white/30 animate-[spin_12s_linear_infinite]"
            >
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
            </svg>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-20 py-4 sm:py-6 overflow-hidden bg-transparent select-none">
      {/* 3D Perspective Container without drop-shadow */}
      <div
        className="w-full relative"
        style={{
          perspective: "800px",
        }}
      >
        {/* Slender Transparent Liquid Glass Marquee Wrapper */}
        <div
          className="relative w-screen -mx-[50vw] left-1/2 overflow-hidden flex items-center group py-4 sm:py-5.5"
          style={{
            background: "#000000",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            clipPath:
              "polygon(0% 0%, 50% 5%, 100% 0%, 100% 100%, 50% 95%, 0% 100%)",
          }}
        >
          {/* Infinite Seamless Scrolling Track */}
          <div className="flex w-max animate-[scroll-marquee_32s_linear_infinite] group-hover:[animation-play-state:paused]">
            {/* Copy 1 */}
            <StatItemContent />

            {/* Copy 2 (Exact duplicate for seamless infinite loop) */}
            <div aria-hidden="true" className="flex items-center">
              <StatItemContent />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
