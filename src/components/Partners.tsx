/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BRAND_PARTNERS } from '../data';

export const Partners: React.FC = () => {
  // Triple the items to ensure seamless infinite looping on wider displays
  const marqueeItems = [...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS];

  return (
    <section className="py-16 bg-brand-dark relative overflow-hidden border-t border-b border-white/5">
      {/* Self-contained styling for high-performance marquee scrolling */}
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee-scroll 24s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Outer shadow gradient boundaries to soften entering/exiting logos */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
        <span className="text-[10px] font-display tracking-[0.25em] text-brand-red uppercase font-bold">
          GLOBAL INDUSTRIAL ALLIANCES
        </span>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="overflow-hidden flex">
        <div className="marquee-container">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex flex-col items-center justify-center mx-10 sm:mx-14 py-4 group cursor-pointer"
            >
              {/* Logo Frame: Grayscale to color on hover */}
              <div className="w-32 sm:w-40 h-16 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center p-3 relative overflow-hidden transition-all duration-300 group-hover:border-brand-red/30 group-hover:bg-white/10 shadow-sm">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                />
              </div>
              
              {/* Partner Name Subtitle */}
              <span className="text-[10px] font-mono tracking-widest text-white/20 mt-2.5 uppercase group-hover:text-brand-red transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
