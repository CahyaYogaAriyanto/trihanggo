/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  // Motion slide variations
  const variants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative red dot grid in the background */}
      <div className="absolute top-12 left-12 w-48 h-48 bg-[radial-gradient(#C8102E_1.5px,transparent_1.5px)] bg-[size:16px_16px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-48 h-48 bg-[radial-gradient(#C8102E_1.5px,transparent_1.5px)] bg-[size:16px_16px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Section Information & Carousel Controls (4 Columns) */}
          <div className="lg:col-span-4 text-left space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-red font-display">
                  Partner Testimonials
                </span>
              </div>
              <h2 className="text-brand-dark text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.1]">
                Pilihan Utama Para Profesional Industri
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-sans">
              Bergabunglah dengan berbagai perusahaan percetakan, digital printing, dan industri grafika yang mempercayakan kebutuhan mesin, sparepart, consumable, serta dukungan teknis profesional kepada Trihanggo.
            </p>

            {/* Custom Carousel Slider Buttons */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-none border border-gray-200 hover:border-brand-red text-brand-dark hover:text-white hover:bg-brand-red bg-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                title="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-none border border-gray-200 hover:border-brand-red text-brand-dark hover:text-white hover:bg-brand-red bg-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                title="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-gray-400 ml-3">
                0{activeIndex + 1} / 0{TESTIMONIALS.length}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Active Testimonial Card Canvas (8 Columns) */}
          <div className="lg:col-span-8 relative min-h-[360px] flex items-center">
            
            {/* Background absolute quotation mark */}
            <Quote className="absolute right-8 top-0 w-36 h-36 text-brand-red/5 -z-10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full bg-white border border-gray-100 p-8 sm:p-10 rounded-2xl card-shadow text-left flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
              >
                {/* 1. Customer Avatar Image Frame */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-none overflow-hidden border border-brand-red card-shadow">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Embedded quotes badge */}
                  <div className="absolute -bottom-1 -right-1 bg-brand-red text-white p-2 rounded-none shadow-md">
                    <Quote className="w-3 h-3" />
                  </div>
                </div>

                {/* 2. Right Text Body */}
                <div className="flex-1 space-y-4">
                  {/* Stars array */}
                  <div className="flex gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Quote Statement */}
                  <blockquote className="text-brand-dark font-sans font-medium text-base sm:text-lg leading-relaxed italic">
                    "{current.content}"
                  </blockquote>

                  {/* Customer Corporate Signature */}
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-brand-dark font-display font-extrabold text-base leading-none">
                      {current.name}
                    </h4>
                    <span className="block text-xs text-gray-500 font-medium font-sans mt-2">
                      {current.role} • <strong className="text-brand-red font-bold font-display">{current.company}</strong>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
