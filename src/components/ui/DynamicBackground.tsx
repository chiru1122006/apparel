"use client";

import { useEffect, useRef } from "react";

// Exact color stops from the user's reference site & images
// Image 1 (Base/Sunrise): #6C8AC7 -> #E9E0E5
// Image 2 (Morning):      #FFD580 -> #E5F6FF
// Midday:                 #64A6E9 -> #D8F4F9
// Golden Hour:            #FFA070 -> #FFE5EE
// Dusk:                   #DBDFF3 -> #E8BEC8
// Evening/Partnership:    #6384B8 -> #E6D8E0

interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

interface SectionColorStop {
  id: string;
  top: ColorRGB;
  bottom: ColorRGB;
  orb1: ColorRGB;
  orb2: ColorRGB;
}

const hexToRgb = (hex: string): ColorRGB => {
  const clean = hex.replace("#", "");
  return {
    r: parseInt(clean.substring(0, 2), 16),
    g: parseInt(clean.substring(2, 4), 16),
    b: parseInt(clean.substring(4, 6), 16),
  };
};

const COLOR_STOPS: SectionColorStop[] = [
  {
    id: "hero",
    // Image 1: Periwinkle blue to rose mist
    top: hexToRgb("#6C8AC7"),
    bottom: hexToRgb("#E9E0E5"),
    orb1: hexToRgb("#82A0DC"),
    orb2: hexToRgb("#F0DDE8"),
  },
  {
    id: "about",
    // Image 2: Warm sunrise amber to soft sky cyan
    top: hexToRgb("#FFD580"),
    bottom: hexToRgb("#E5F6FF"),
    orb1: hexToRgb("#FFE19E"),
    orb2: hexToRgb("#D2EEFC"),
  },
  {
    id: "team",
    // Midday: Clear vibrant azure to soft pale ice aqua
    top: hexToRgb("#64A6E9"),
    bottom: hexToRgb("#D8F4F9"),
    orb1: hexToRgb("#7CB6F0"),
    orb2: hexToRgb("#C4EEF5"),
  },
  {
    id: "services",
    // Golden Hour: Sunset coral to delicate blush mist
    top: hexToRgb("#FFA070"),
    bottom: hexToRgb("#FFE5EE"),
    orb1: hexToRgb("#FFB48D"),
    orb2: hexToRgb("#FEDAE6"),
  },
  {
    id: "process",
    // Dusk: Ethereal twilight lavender to soft mauve
    top: hexToRgb("#DBDFF3"),
    bottom: hexToRgb("#E8BEC8"),
    orb1: hexToRgb("#CAD0EF"),
    orb2: hexToRgb("#E0ADBA"),
  },
  {
    id: "contact",
    // Nightfall / Partnership: Deep serene horizon to warm glow
    top: hexToRgb("#6384B8"),
    bottom: hexToRgb("#E6D8E0"),
    orb1: hexToRgb("#7697C8"),
    orb2: hexToRgb("#DEC8D4"),
  },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const lerpColor = (c1: ColorRGB, c2: ColorRGB, t: number): ColorRGB => ({
  r: Math.round(lerp(c1.r, c2.r, t)),
  g: Math.round(lerp(c1.g, c2.g, t)),
  b: Math.round(lerp(c1.b, c2.b, t)),
});

export default function DynamicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateGradient = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      // Get positions of each section relative to the page
      const sectionPositions = COLOR_STOPS.map((stop) => {
        const el = document.getElementById(stop.id);
        if (!el) return 0;
        // Anchor each section roughly around its middle/entry
        const rect = el.getBoundingClientRect();
        return rect.top + scrollY - vh * 0.25;
      });

      // Find the two stops we are currently between
      let startIndex = 0;
      for (let i = 0; i < sectionPositions.length - 1; i++) {
        if (scrollY >= sectionPositions[i]) {
          startIndex = i;
        }
      }

      const endIndex = Math.min(startIndex + 1, COLOR_STOPS.length - 1);
      const startPos = sectionPositions[startIndex];
      const endPos = sectionPositions[endIndex];

      let t = 0;
      if (endPos > startPos) {
        t = Math.max(0, Math.min(1, (scrollY - startPos) / (endPos - startPos)));
      }

      // Smooth cosine easing for organic photographic color blend
      const easeT = (1 - Math.cos(t * Math.PI)) / 2;

      const stopA = COLOR_STOPS[startIndex];
      const stopB = COLOR_STOPS[endIndex];

      const currentTop = lerpColor(stopA.top, stopB.top, easeT);
      const currentBottom = lerpColor(stopA.bottom, stopB.bottom, easeT);
      const currentOrb1 = lerpColor(stopA.orb1, stopB.orb1, easeT);
      const currentOrb2 = lerpColor(stopA.orb2, stopB.orb2, easeT);

      // Apply gradient smoothly
      if (containerRef.current) {
        containerRef.current.style.background = `linear-gradient(180deg, rgb(${currentTop.r}, ${currentTop.g}, ${currentTop.b}) 0%, rgb(${currentBottom.r}, ${currentBottom.g}, ${currentBottom.b}) 100%)`;
      }

      if (orb1Ref.current) {
        orb1Ref.current.style.backgroundColor = `rgb(${currentOrb1.r}, ${currentOrb1.g}, ${currentOrb1.b})`;
        orb1Ref.current.style.transform = `translate3d(0, ${-scrollY * 0.15}px, 0)`;
      }

      if (orb2Ref.current) {
        orb2Ref.current.style.backgroundColor = `rgb(${currentOrb2.r}, ${currentOrb2.g}, ${currentOrb2.b})`;
        orb2Ref.current.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateGradient);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateGradient();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden will-change-[background]"
      style={{
        background: `linear-gradient(180deg, rgb(108, 138, 199) 0%, rgb(233, 224, 229) 100%)`,
      }}
      aria-hidden="true"
    >
      {/* Parallax Ambient Glow 1 (Upper Left Sunshine) */}
      <div
        ref={orb1Ref}
        className="absolute -top-[15%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-75 will-change-transform"
        style={{ backgroundColor: "rgb(130, 160, 220)" }}
      />

      {/* Parallax Ambient Glow 2 (Lower Right Sunshine) */}
      <div
        ref={orb2Ref}
        className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full blur-[130px] opacity-70 will-change-transform"
        style={{ backgroundColor: "rgb(240, 221, 232)" }}
      />
    </div>
  );
}
