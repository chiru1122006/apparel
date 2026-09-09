"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import QuoteForm from "../ui/QuoteForm";
import { CONTACT_DATA, BRAND_INFO } from "@/data/siteData";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-transparent relative text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Section Header with script text */}
        <SectionHeading
          scriptText="Ritual and Rest"
          badge="Direct Institutional Partnership"
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
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#171717] font-medium">
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xs border border-white/70 hover:bg-white shadow-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#171717]" />
            <span>{CONTACT_DATA.email}</span>
          </a>

          <a
            href={`tel:${CONTACT_DATA.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xs border border-white/70 hover:bg-white shadow-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#171717]" />
            <span>{CONTACT_DATA.phone}</span>
          </a>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xs border border-white/70 text-[#444444] shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#444444]" />
            <span>{BRAND_INFO.operatingHours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
