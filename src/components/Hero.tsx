/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight, Play, Shield, Activity, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onOpenQuote: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onScrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-brand-light overflow-hidden flex items-center justify-center pt-28 pb-16"
    >
      {/* Diagonal Accent color block on the right */}
      <div className="diagonal-accent hidden lg:block" />

      {/* Massive layered decorative typography behind content */}
      <div className="layered-element font-display font-black text-[120px] sm:text-[180px] md:text-[280px] text-gray-200/40 -bottom-16 -left-12">
        PRINT
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column - Industrial Precision Typography */}
        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
          
          {/* Accent Overline */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-red font-display">
              Presisi Industrial
            </span>
          </div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-text font-display font-extrabold text-[44px] sm:text-[54px] md:text-[72px] lg:text-[80px] text-brand-dark leading-[0.9] tracking-tighter"
          >
            Solusi<br />
            Percetakan<br />
            <span className="text-brand-red">Profesional.</span>
          </motion.h1>

          {/* Body Description */}
          <p className="max-w-md text-gray-500 font-medium leading-relaxed font-sans">
            Menyediakan mesin wide-format berkualitas tinggi, konsumabel premium, dan dukungan teknis bersertifikat untuk keunggulan industrial modern volume tinggi.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={() => onScrollToSection('catalog')}
              className="bg-brand-dark text-white px-8 py-4 sm:px-10 sm:py-5 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-brand-red transition-all cursor-pointer shadow-lg hover:shadow-brand-red/10"
            >
              Lihat Katalog
            </button>

            <button
              onClick={onOpenQuote}
              className="bg-white text-brand-dark border border-gray-300 hover:border-brand-red hover:text-brand-red px-8 py-4 sm:px-10 sm:py-5 font-bold uppercase text-xs tracking-widest rounded-sm transition-all cursor-pointer shadow-md"
            >
              Minta Penawaran
            </button>
          </div>

          {/* Grid Counter Metrics (Inspired by Design HTML) */}
          <div className="grid grid-cols-3 gap-8 pt-6 border-t border-gray-200">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-display font-black text-brand-dark">500+</div>
              <div className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Mesin Terpasang</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-display font-black text-brand-dark">12k</div>
              <div className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Jam Servis</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-display font-black text-brand-dark">24/7</div>
              <div className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Pusat Dukungan</div>
            </div>
          </div>
        </div>

        {/* Right Column - Layered Featured Card Showcase */}
        <div className="lg:col-span-5 relative flex flex-col gap-6 items-center lg:items-end">
          
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 80, delay: 0.2 }}
            className="bg-white p-6 card-shadow rounded-2xl relative z-20 w-full max-w-[420px] text-left border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="bg-brand-red text-white text-[9px] px-3 py-1 font-bold uppercase rounded-full tracking-wider font-display">
                Featured Series
              </span>
              <span className="text-gray-300/80 text-3xl font-display font-black">01</span>
            </div>

            {/* High-res Image Wrapper */}
            <div className="aspect-video bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-100 relative group">
              <img
                src={HERO_IMAGE}
                alt="Trihanggo Industrial Printing Machine"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Speed Output Overlay */}
              <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-md rounded-md py-1 px-2 text-white text-[8px] font-mono uppercase tracking-wider">
                180 m²/h Continuous Speed
              </div>
            </div>

            <h3 className="font-display font-extrabold text-lg text-brand-dark">
              Pro-X 500 Industrial
            </h3>
            <p className="text-xs text-gray-400 font-medium mb-4 leading-relaxed">
             Seri mesin digital wide-format inkjet yang dirancang untuk pencetakan tekstil, banner, dan vinyl dengan kecepatan tinggi serta performa yang stabil untuk kebutuhan produksi industri.
            </p>

            <button
              onClick={() => onScrollToSection('catalog')}
              className="w-full py-3.5 border border-gray-200 hover:border-brand-red text-brand-dark hover:text-brand-red rounded-lg font-bold text-[10px] uppercase tracking-widest transition-colors cursor-pointer"
            >
              View Details & Specs
            </button>
          </motion.div>

          {/* Sub-card Row */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[420px] h-36">
            
            {/* Ink sub-card (Dark/Glass tone) */}
            <div className="bg-[#1A1A1A] text-white p-4.5 rounded-2xl flex flex-col justify-end relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white/10 font-display font-black text-4xl">INK</div>
              <div className="text-[9px] uppercase tracking-widest text-brand-red font-bold font-display mb-1.5">
                Genuine Inks
              </div>
              <div className="font-display font-bold text-xs leading-snug">
                Profil warna premium untuk tinta eco-solvent dan sublimasi.
              </div>
            </div>

            {/* Genuine Parts sub-card (Light shadow tone) */}
            <div className="bg-white p-4.5 rounded-2xl card-shadow border border-gray-100 flex flex-col justify-between items-start">
              <div className="p-2 bg-brand-red/10 rounded-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div className="font-display font-bold text-xs text-brand-dark">
                Sparepart Original untuk Berbagai Jenis Mesin
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
