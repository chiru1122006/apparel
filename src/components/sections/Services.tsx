"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shirt,
  Layers,
  GraduationCap,
  Stethoscope,
  UtensilsCrossed,
  Palette,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ScrollVelocity from "../ui/ScrollVelocity";
import { SERVICES_DATA, ServiceItem } from "@/data/siteData";

const iconMap = {
  Shirt: Shirt,
  Layers: Layers,
  GraduationCap: GraduationCap,
  Stethoscope: Stethoscope,
  UtensilsCrossed: UtensilsCrossed,
  Palette: Palette,
};

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const Icon = iconMap[service.iconName as keyof typeof iconMap] || Shirt;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col justify-between h-full rounded-[16px] bg-[#FAF8F5] border border-[rgba(20,30,50,0.08)] shadow-[0_2px_10px_rgba(20,30,50,0.03)] hover:shadow-[0_12px_28px_rgba(20,30,50,0.08)] transition-all duration-400 ease-out hover:-translate-y-1 overflow-hidden"
    >
      {/* 1. Compact Photography Area (aspect 16/10) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFECE6]">
        <Image
          src={service.image}
          alt={`${service.title} - Concord Apparel`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          priority={index < 2}
        />

        {/* Subtle cinematic gradient vignette at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

        {/* Category Pill inside top-right of image */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-[9px] font-sans font-semibold tracking-[0.12em] uppercase text-white/95 select-none shadow-xs">
            {service.category}
          </span>
        </div>
      </div>

      {/* 2. Compact Editorial Content Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between text-left">
        <div>
          {/* Subtle Category & Line Icon Header */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#B89047]">
              {service.category}
            </span>
            <div className="w-5 h-5 rounded-full bg-[#EFE9DD]/60 flex items-center justify-center text-[#8C6D32] transition-colors group-hover:bg-[#EAE2D2]">
              <Icon className="w-3 h-3 stroke-[1.75]" />
            </div>
          </div>

          {/* Title: Sophisticated Heading */}
          <h3 className="font-sans text-base sm:text-lg font-bold tracking-tight text-[#111827] group-hover:text-black transition-colors leading-snug">
            {service.title}
          </h3>

          {/* Subtitle / Description */}
          <p className="mt-1 text-[11px] sm:text-xs text-[#5A6578] leading-relaxed font-normal">
            {service.subtitle}
          </p>

          {/* Subtle Horizontal Divider */}
          <div className="my-3 sm:my-3.5 border-t border-[#E8E2D8]/80 w-full" />

          {/* 3 Compact Features with Minimal Gold Dots */}
          <ul className="space-y-1.5 sm:space-y-2">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[11px] sm:text-xs text-[#2C3442] font-medium leading-snug"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] shrink-0 group-hover:scale-110 transition-transform" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Text-Based Interactive CTA */}
        <div className="mt-4 pt-3 border-t border-[#EAE4DA]/60">
          <Link
            href="#contact"
            className="group/cta relative inline-flex items-center justify-between w-full py-0.5 text-[11px] sm:text-xs font-semibold text-[#1A2333] hover:text-black tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89047] rounded-xs"
            aria-label={`Request Bulk Quote - ${service.title}`}
          >
            <span className="relative">
              Request Bulk Quote
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-[#B89047] group-hover/cta:w-full group-hover:w-full transition-all duration-300 ease-out" />
            </span>

            <ArrowRight className="w-3.5 h-3.5 text-[#B89047] transition-transform duration-300 ease-out group-hover/cta:translate-x-1 group-hover:translate-x-1 shrink-0 ml-2" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-10 lg:py-14 bg-transparent relative overflow-hidden">
      {/* Scroll-Velocity Reactive Kinetic Marquee */}
      <div className="w-full mb-8 sm:mb-12 select-none overflow-hidden">
        <ScrollVelocity
          texts={[
            "✦ PREMIUM SCHOOL & COLLEGE UNIFORMS ✦ 25+ YEARS OF TRUST ✦ PERFECT FIT GUARANTEE",
            "✦ DURABLE WASH-TESTED FABRICS ✦ ALL-DAY COMFORT ✦ NEAT STITCHING ✦ ON-TIME CAMPUS DELIVERY",
          ]}
          velocity={35}
          className="font-sans font-bold uppercase text-sm sm:text-xl lg:text-2xl tracking-[0.12em] text-[#171717]/85 py-1"
        />
      </div>

      {/* Connection & Care section content pushed a little down */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        {/* Section Header with script text */}
        <SectionHeading
          scriptText="Made for Daily Wear"
          badge="Uniform Collections"
          title={SERVICES_DATA.heading}
          subtitle={SERVICES_DATA.introduction}
          align="center"
        />

        {/* 6-Card Compact Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {SERVICES_DATA.services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* Muted CTA Below Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-[8px] bg-white border border-[#DDD5C5] shadow-xs">
            <span className="text-xs sm:text-sm font-medium text-[#4B5563]">
              Need custom school colors, specific fabrics, or woven badges?
            </span>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#B89047] transition-colors"
            >
              <span>{SERVICES_DATA.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B89047]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
