"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="bg-transparent font-sans text-white">
      <style>{`
        /* The Blur Curtain - Primary Visual Effect */
        .page-top-blur {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 160px;
            z-index: 40;
            pointer-events: none;
            backdrop-filter: blur(20px); 
            -webkit-backdrop-filter: blur(20px);
            /* This mask creates the smooth transition from blurred to clear */
            mask-image: linear-gradient(to bottom, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,1) 35%, 
              rgba(0,0,0,0) 100%
            );
            -webkit-mask-image: linear-gradient(to bottom, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,1) 35%, 
              rgba(0,0,0,0) 100%
            );
        }
      `}</style>

      {/* The Blur Effect Curtain */}
      <div className="page-top-blur" aria-hidden="true" />

      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-[50] w-full pointer-events-none">
        <nav className="container mx-auto flex items-center justify-center py-3 px-4 sm:py-5 sm:px-8 pointer-events-auto">
          {/* CENTER: Brand Logo in middle only (Enlarged) */}
          <Link
            href="/"
            className="hover:opacity-85 transition-opacity block focus-visible:outline-none"
            aria-label="Concord Apparel Home"
          >
            <Image
              src="/hero_images/logo/logo.png"
              alt="Concord Apparel"
              width={380}
              height={127}
              priority
              className="h-14 sm:h-18 md:h-22 lg:h-26 w-auto object-contain"
            />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
