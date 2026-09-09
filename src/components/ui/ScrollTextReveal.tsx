"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function ScrollWord({ word, progress, range }: ScrollWordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [3, 0]);

  return (
    <span className="relative inline-block mr-[0.28em] select-none">
      <motion.span
        style={{ opacity, y }}
        className="inline-block transition-colors"
      >
        {word}
      </motion.span>
    </span>
  );
}

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  offset?: [string, string];
}

export default function ScrollTextReveal({
  text,
  className = "",
  offset = ["start 85%", "start 45%"],
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(start + 1.25 / words.length, 1);
        return (
          <ScrollWord
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

