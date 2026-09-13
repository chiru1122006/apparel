"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SpecularButton from "../ui/SpecularButton";
import { HERO_DATA } from "@/data/siteData";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle differential parallax scroll offsets
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-28 sm:pb-16 overflow-hidden bg-transparent"
    >
      {/* Left Parallax Hero Image (positioned lower down in screen, sharp corners) */}
      <div className="hidden md:block absolute left-4 sm:left-6 lg:left-10 xl:left-16 2xl:left-24 bottom-6 sm:bottom-8 lg:bottom-10 xl:bottom-12 z-10 pointer-events-none select-none">
        <motion.div
          style={{ y: yLeft }}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[130px] md:w-[155px] lg:w-[190px] xl:w-[230px] 2xl:w-[260px] aspect-[9/16] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-black/5"
        >
          <Image
            src="/hero_images/left_image1.png"
            alt="Concord Apparel Medical Uniforms"
            fill
            sizes="(max-width: 768px) 130px, (max-width: 1024px) 190px, (max-width: 1280px) 230px, 260px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Right Parallax Hero Image (positioned cleanly below header) */}
      <div className="hidden md:block absolute right-4 sm:right-6 lg:right-10 xl:right-16 2xl:right-24 top-24 sm:top-28 lg:top-32 xl:top-36 z-10 pointer-events-none select-none">
        <motion.div
          style={{ y: yRight }}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[120px] md:w-[145px] lg:w-[180px] xl:w-[215px] 2xl:w-[245px] aspect-[4/5] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-black/5"
        >
          <Image
            src="/hero_images/right_image.png"
            alt="Concord Apparel Student Uniforms"
            fill
            sizes="(max-width: 768px) 120px, (max-width: 1024px) 180px, (max-width: 1280px) 215px, 245px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Main Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex flex-col items-center justify-center z-20 pt-4 sm:pt-8"
      >
        {/* Cursive Script Title */}
        <div className="font-script text-3xl sm:text-4xl lg:text-[44px] text-[#181818] mb-2 select-none">
          Crafted for Institutions
        </div>

        {/* Big Editorial Headline (decreased size) */}
        <h1 className="font-sans text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] leading-[1.18] text-[#171717] uppercase tracking-[0.06em] font-normal mb-4 max-w-xl">
          <span>{HERO_DATA.headingLine1}</span>
          <br />
          <span className="font-light text-[#2A2A2A]">
            {HERO_DATA.headingLine2}
          </span>
        </h1>

        {/* Description (refined size) */}
        <p className="font-sans text-xs sm:text-sm text-[#444444] leading-relaxed max-w-md mb-7 font-normal">
          {HERO_DATA.description}
        </p>

        {/* Centered Specular WebGL CTA Button */}
        <div className="mb-8 flex items-center justify-center w-full max-w-xs sm:max-w-none">
          <SpecularButton
            href="#contact"
            size="md"
            radius={22}
            tint="#141414"
            textColor="#ffffff"
            intensity={1.3}
            followMouse={true}
          >
            <span>{HERO_DATA.primaryCta}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white ml-1.5 inline-block" />
          </SpecularButton>
        </div>

        {/* Minimal Trust Badge */}
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#444444]">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#171717]" />
          <span>{HERO_DATA.trustMarker}</span>
        </div>
      </motion.div>

      {/* Bottom subtle scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-90 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest uppercase text-[#333333]">
          Scroll
        </span>
        <div className="w-3.5 h-5 rounded-full border border-[#444444] flex items-start justify-center p-0.5">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-[#171717]"
          />
        </div>
      </div>
    </section>
  );
}
