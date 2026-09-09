import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 rounded-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#0F172A] text-[#FDFBF7] hover:bg-[#1E293B] active:bg-[#0B111E] border border-[#0F172A] shadow-xs focus-visible:ring-[#0F172A]",
    secondary:
      "bg-white text-[#12161A] hover:bg-[#F8F6F0] active:bg-[#F0ECE1] border border-[#E8E3D8] hover:border-[#D0C7B7] shadow-xs focus-visible:ring-[#B89047]",
    outline:
      "bg-transparent text-[#0F172A] border border-[#DCD6C8] hover:border-[#0F172A] hover:bg-[#0F172A]/5 focus-visible:ring-[#0F172A]",
    gold: "bg-[#B89047] text-[#FFFFFF] hover:bg-[#A37F37] active:bg-[#8F6F2E] border border-[#B89047] shadow-xs focus-visible:ring-[#B89047]",
    ghost:
      "bg-transparent text-[#12161A] hover:text-[#0F172A] hover:bg-[#F0ECE1]/50 focus-visible:ring-[#B89047]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

