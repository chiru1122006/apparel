"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Cpu,
  Wrench,
  Clock,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { TEAM_DATA } from "@/data/siteData";

const iconMap = [GraduationCap, Cpu, Wrench, Clock];

function VideoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[10px] overflow-hidden bg-[#0A0E17] border border-white/80 shadow-md aspect-video"
    >
      <video
        src={src}
        aria-label={alt}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="py-10 lg:py-14 bg-transparent relative text-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Section Header with script text */}
        <SectionHeading
          scriptText="Stillness in Motion"
          badge="Multidisciplinary Talent"
          title={TEAM_DATA.heading}
          subtitle={TEAM_DATA.introduction}
          align="center"
        />

        {/* ============================================================ */}
        {/* DUAL STUDIO VIDEOS (CLEAN 1080P WITHOUT OVERLAY OPTIONS/TEXT)*/}
        {/* ============================================================ */}
        <div className="w-full mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            <VideoCard
              src="/hero_images/Designer_working_in_apparel_studio_202609092157.mp4"
              alt="Couture Pattern & Drafting Studio"
            />
            <VideoCard
              src="/hero_images/Engineer_designing_digital_uniform_1080p_202609092156.mp4"
              alt="3D Digital Uniform CAD Lab"
            />
          </div>
        </div>

        {/* ============================================================ */}
        {/* FOUR ULTRA UI-RICH EXPERTISE BLOCKS                          */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full text-left"
        >
          {TEAM_DATA.blocks.map((block, idx) => {
            const Icon = iconMap[idx % iconMap.length];

            return (
              <motion.div
                key={block.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="relative p-5 sm:p-6 rounded-[10px] bg-white/90 backdrop-blur-md border border-white/85 hover:border-[#171717] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  {/* Top Identifier & Metric */}
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#B89047]">
                      {block.number} {"//"} {block.tag}
                    </span>

                    {block.metric && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[#F7F4EB] border border-[#EBE4D5] text-[10px] font-mono font-bold text-[#171717]">
                        {block.metric}
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="w-11 h-11 rounded-[8px] bg-[#171717] text-white flex items-center justify-center mb-3.5 shadow-xs group-hover:scale-105 group-hover:bg-black transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="font-sans text-base font-bold text-[#171717] tracking-tight mb-1">
                    {block.title}
                  </h3>

                  <p className="font-sans text-xs font-semibold text-[#B89047] mb-2 sm:mb-3">
                    {block.subtitle}
                  </p>

                  <p className="font-sans text-xs text-[#525E71] leading-relaxed mb-4">
                    {block.description}
                  </p>

                  {/* Skill Checklist */}
                  {block.skills && block.skills.length > 0 && (
                    <div className="space-y-1.5 mb-4 sm:mb-5 pt-3 border-t border-black/5">
                      {block.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-[11px] text-[#374151] font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89047] shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Verification Seal */}
                <div className="pt-3 border-t border-black/5 flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#171717] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {block.certified || "Verified Standard"}
                  </span>
                  <span className="text-[10px] font-mono text-[#9CA3AF]">
                    QC PASS
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
