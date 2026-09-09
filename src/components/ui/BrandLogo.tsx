import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  variant = "dark",
  showTagline = false,
  className = "",
}: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="#hero"
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89047] rounded-sm ${className}`}
      aria-label="Concord Apparel - Home"
    >
      {/* Refined stitch-inspired monogram icon */}
      <div
        className={`relative flex items-center justify-center w-10 h-10 rounded-[6px] border transition-all duration-300 ${
          isDark
            ? "bg-[#0F172A] border-[#1E293B] shadow-xs group-hover:border-[#B89047]"
            : "bg-[#FFFFFF] border-[#E8E3D8] shadow-xs group-hover:border-[#B89047]"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          className="w-6 h-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle stitch dash outer border */}
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="4"
            stroke="#B89047"
            strokeWidth="0.75"
            strokeDasharray="2 2"
            opacity="0.7"
          />
          {/* Tailored letter C */}
          <path
            d="M 19 9 C 13.5 9 9.5 12.5 9.5 16 C 9.5 19.5 13.5 23 19 23"
            stroke={isDark ? "#FDFBF7" : "#0F172A"}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Tailored letter A diagonal & crossbar with gold thread */}
          <path
            d="M 16 9 L 23.5 23"
            stroke="#B89047"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 13.5 18 L 21.5 18"
            stroke={isDark ? "#FDFBF7" : "#0F172A"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Needle eye apex */}
          <circle cx="16" cy="9" r="1.2" fill="#B89047" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-sans text-xl sm:text-2xl font-bold tracking-tight ${
              isDark ? "text-[#0F172A]" : "text-[#FFFFFF]"
            }`}
          >
            Concord
          </span>
          <span
            className={`font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] ${
              isDark ? "text-[#B89047]" : "text-[#C5A880]"
            }`}
          >
            Apparel
          </span>
        </div>

        {showTagline && (
          <span
            className={`text-[11px] leading-tight transition-colors ${
              isDark ? "text-[#6B7280]" : "text-[#94A3B8]"
            }`}
          >
            Where Uniforms Inspire Identity and Unity
          </span>
        )}
      </div>
    </Link>
  );
}

