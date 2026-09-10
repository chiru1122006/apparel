"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import QuoteForm from "../ui/QuoteForm";
import { CONTACT_DATA, BRAND_INFO } from "@/data/siteData";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-transparent relative text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Section Header with script text */}
        <SectionHeading
          scriptText="Get in Touch"
          badge="Contact Us"
          title={CONTACT_DATA.heading}
          subtitle={CONTACT_DATA.description}
          align="center"
        />

        {/* Centered Request a Quote Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="w-full mb-6 text-left"
        >
          <QuoteForm />
        </motion.div>

        {/* Centered Quick Contact Details */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-4 w-full text-xs sm:text-sm text-[#171717] font-medium">
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/85 backdrop-blur-xs border border-white/80 hover:bg-white shadow-xs transition-colors min-h-[42px]"
          >
            <Mail className="w-3.5 h-3.5 text-[#171717]" />
            <span>{CONTACT_DATA.email}</span>
          </a>

          <a
            href={`tel:${CONTACT_DATA.phone.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/85 backdrop-blur-xs border border-white/80 hover:bg-white shadow-xs transition-colors min-h-[42px]"
          >
            <Phone className="w-3.5 h-3.5 text-[#171717]" />
            <span>{CONTACT_DATA.phone}</span>
          </a>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/85 backdrop-blur-xs border border-white/80 hover:bg-white shadow-xs transition-colors min-h-[42px]"
          >
            <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
            <span>{BRAND_INFO.instagram}</span>
          </a>

          <div className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/85 backdrop-blur-xs border border-white/80 text-[#444444] shadow-xs min-h-[42px]">
            <Clock className="w-3.5 h-3.5 text-[#444444]" />
            <span>{BRAND_INFO.operatingHours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
