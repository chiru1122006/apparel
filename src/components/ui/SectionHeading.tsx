import React from "react";

interface SectionHeadingProps {
  scriptText?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  scriptText,
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-6 lg:mb-8 ${
        isCenter ? "mx-auto text-center items-center" : "text-left"
      } ${className}`}
    >
      {/* Cursive script text from reference images */}
      {scriptText && (
        <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#181818] mb-2 font-normal leading-none select-none">
          {scriptText}
        </div>
      )}

      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/70 backdrop-blur-xs border border-[#E7DFC9] text-[11px] font-sans font-medium text-[#7C6337] tracking-wider uppercase ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89047]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="font-sans uppercase text-2xl sm:text-3xl lg:text-4xl leading-snug text-[#171717] font-normal tracking-[0.06em] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="font-sans text-sm sm:text-base text-[#333333] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
