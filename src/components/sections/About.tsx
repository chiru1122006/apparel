"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Scissors,
  BadgeCheck,
  CheckCircle2,
  ArrowUpRight,
  Sparkle,
} from "lucide-react";
import ScrollTextReveal from "../ui/ScrollTextReveal";
import { ABOUT_DATA } from "@/data/siteData";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Scissors: Scissors,
  BadgeCheck: BadgeCheck,
};

export default function About() {
  return (
    <section
      id="about"
      className="py-10 lg:py-14 bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Side-by-Side Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: Mission, Heading, Kinetic Scroll Statements, and Campus Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-16 flex flex-col text-left items-start">
            {/* Script Text Mood Marker */}
            <div className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#181818] mb-2 select-none">
              Gentle Energy
            </div>

            {/* Heritage & Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-white/70 backdrop-blur-xs border border-[#E7DFC9] text-[11px] font-sans font-medium text-[#7C6337] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89047]" />
              <span>Heritage &amp; Mission</span>
            </div>

            {/* Section Headline */}
            <h2 className="font-sans uppercase text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] leading-[1.16] text-[#171717] font-normal tracking-[0.05em] mb-4">
              {ABOUT_DATA.subheading}
            </h2>

            {/* Subtitle / Intro */}
            <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 font-medium">
              {ABOUT_DATA.intro}
            </p>

            {/* Kinetic Scroll-Revealing Statements */}
            <div className="space-y-4 mb-8 pt-5 border-t border-black/10 w-full">
              <ScrollTextReveal
                text={ABOUT_DATA.statement1}
                className="text-base sm:text-lg lg:text-xl font-sans text-[#171717] font-medium leading-relaxed"
                offset={["start 85%", "start 45%"]}
              />
              <ScrollTextReveal
                text={ABOUT_DATA.statement2}
                className="text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#555555] font-semibold leading-relaxed"
                offset={["start 85%", "start 40%"]}
              />
            </div>

            {/* Campus Quality Visual Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full rounded-[10px] overflow-hidden border border-black/10 shadow-xs relative aspect-[16/9] group"
            >
              <Image
                src="/hero_images/image2.png"
                alt="Concord Apparel Students in Uniform"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-4 sm:p-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#FFD580] font-bold block mb-1">
                    130+ Premier Institutions
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-snug block">
                    Dressing generations with uncompromised pride.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: VERY FULL UI RICH CARDS */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
            >
              {ABOUT_DATA.highlights.map((highlight) => {
                const IconComponent =
                  iconMap[highlight.iconName as keyof typeof iconMap] ||
                  Sparkle;

                return (
                  <motion.div
                    key={highlight.title}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    className="relative p-6 rounded-[10px] bg-white/85 backdrop-blur-md border border-white/80 hover:border-[#171717] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group text-left"
                  >
                    {/* Top Metadata Strip */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#B89047] font-bold">
                          {highlight.tag}
                        </span>

                        {highlight.metric && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[#F7F4EB] border border-[#EBE4D5] text-[10px] font-mono font-semibold text-[#171717]">
                            {highlight.metric}
                          </span>
                        )}
                      </div>

                      {/* Icon & Title */}
                      <div className="w-12 h-12 rounded-[8px] bg-[#171717] text-white flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 group-hover:bg-[#000000] transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>

                      <h3 className="font-sans text-base sm:text-lg font-bold text-[#171717] tracking-tight mb-2">
                        {highlight.title}
                      </h3>

                      <p className="font-sans text-xs text-[#525E71] leading-relaxed mb-5">
                        {highlight.description}
                      </p>

                      {/* Feature Pills */}
                      {highlight.features && highlight.features.length > 0 && (
                        <div className="space-y-2 mb-6">
                          {highlight.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-[11px] text-[#374151] font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#B89047] shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Status & Action Bar */}
                    <div className="pt-4 border-t border-black/5 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#171717] uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {highlight.status}
                      </span>

                      <ArrowUpRight className="w-4 h-4 text-[#171717] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
