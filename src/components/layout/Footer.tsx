import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FOOTER_DATA } from "@/data/siteData";

function SocialIcon({ name, href }: { name: string; href: string }) {
  // Clean minimal SVG icons for Facebook, Twitter/X, LinkedIn, Instagram
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit Concord Apparel on ${name}`}
      className="w-8 h-8 rounded-[6px] bg-[#162133] border border-[#22314A] flex items-center justify-center text-[#94A3B8] hover:text-[#B89047] hover:border-[#B89047] hover:bg-[#1E2D44] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89047]"
    >
      {name === "Facebook" && (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )}
      {name === "Twitter" && (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )}
      {name === "LinkedIn" && (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )}
      {name === "Instagram" && (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D1522] text-[#F8FAFC] pt-16 pb-12 border-t border-[#1C2A40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#1E2D44]">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="#hero"
              className="inline-block hover:opacity-85 transition-opacity focus-visible:outline-none"
              aria-label="Concord Apparel Home"
            >
              <Image
                src="/hero_images/logo/logo.png"
                alt="Concord Apparel"
                width={240}
                height={80}
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="font-sans text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              “{FOOTER_DATA.tagline}”
            </p>

            <p className="font-sans text-xs text-[#64748B] max-w-sm leading-relaxed">
              Making durable, comfortable school uniforms with premium fabrics and timely on-campus delivery across India.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#B89047] mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                <SocialIcon name="Facebook" href="https://facebook.com" />
                <SocialIcon name="Twitter" href="https://twitter.com" />
                <SocialIcon name="LinkedIn" href="https://linkedin.com" />
                <SocialIcon name="Instagram" href="https://www.instagram.com/concordapparel.in/" />
              </div>
              <a
                href="https://www.instagram.com/concordapparel.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#B89047] transition-colors mt-2"
              >
                <span className="font-semibold text-[#B89047]">@concordapparel.in</span>
                <span className="text-[11px] text-[#64748B]">on Instagram</span>
              </a>
            </div>
          </div>

          {/* Services Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#B89047] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_DATA.servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[#94A3B8] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89047]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#B89047] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_DATA.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[#94A3B8] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89047]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#B89047] mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${FOOTER_DATA.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {FOOTER_DATA.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                <a
                  href={`tel:${FOOTER_DATA.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {FOOTER_DATA.contact.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                <span>{FOOTER_DATA.contact.location}</span>
              </div>
            </div>

            {/* Direct Quick Quote Callout */}
            <div className="mt-5 p-3 rounded-[6px] bg-[#141E2D] border border-[#202E44]">
              <Link
                href="#contact"
                className="flex items-center justify-between text-xs text-white hover:text-[#B89047] transition-colors"
              >
                <span>Request a Free Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B89047]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p className="text-center sm:text-left">
            {FOOTER_DATA.copyright} | {FOOTER_DATA.subline}
          </p>

          <p className="text-[11px] text-[#475569]">
            Quality Uniforms Made to Last
          </p>
        </div>
      </div>
    </footer>
  );
}

