"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { PROCESS_DATA } from "@/data/siteData";

export default function Process() {
  return (
    <section
      id="process"
      className="py-10 lg:py-14 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with script text */}
        <SectionHeading
          scriptText="Step by Step"
          badge="How We Work"
          title={PROCESS_DATA.heading}
          subtitle={PROCESS_DATA.introduction}
          align="center"
        />

        {/* Visual Process Timeline Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="w-full my-6 sm:my-8 flex items-center justify-center"
        >
          <div className="relative w-full max-w-5xl rounded-[12px] overflow-hidden p-1 sm:p-2">
            <Image
              src="/time_line.png"
              alt="Concord Apparel Simple 6-Step Uniform Process"
              width={2170}
              height={725}
              className="w-full h-auto object-contain mx-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Reassurance Banner */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-[8px] bg-white/85 backdrop-blur-md border border-white/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-sans text-base sm:text-lg font-semibold text-[#171717]">
              Always delivered before school opens.
            </h4>
            <p className="text-xs sm:text-sm text-[#525E71] mt-0.5">
              Every order is clearly labeled and packed by class, delivered directly to your campus on time.
            </p>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center shrink-0 px-5 py-2.5 text-xs font-semibold text-[#0F172A] bg-white border border-[#D5CCBC] hover:border-[#B89047] rounded-[6px] shadow-xs transition-colors min-h-[40px] flex items-center justify-center"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
