/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Printer, Cpu, Droplets, Settings, Layers, Workflow, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_CATEGORIES } from '../data';
import { ProductCategory } from '../types';

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

const IconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Printer: Printer,
  Cpu: Cpu,
  Droplets: Droplets,
  Settings: Settings,
  Layers: Layers,
  Workflow: Workflow,
};

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  // Mapping layout heights and column spans for the asymmetrical masonry look
  const getGridClasses = (size: string, index: number) => {
    switch (index) {
      case 0: // Industrial Printers
        return 'col-span-1 md:col-span-8 h-[380px] lg:h-[420px]';
      case 1: // Digital Printing Machines
        return 'col-span-1 md:col-span-4 h-[380px] lg:h-[420px]';
      case 2: // Ink & Consumables
        return 'col-span-1 md:col-span-4 h-[320px] lg:h-[360px]';
      case 3: // Spare Parts
        return 'col-span-1 md:col-span-4 h-[320px] lg:h-[360px]';
      case 4: // Accessories
        return 'col-span-1 md:col-span-4 h-[320px] lg:h-[360px]';
      case 5: // Printing Solutions
        return 'col-span-1 md:col-span-12 h-[260px] lg:h-[300px]';
      default:
        return 'col-span-1 md:col-span-4 h-[300px]';
    }
  };

  return (
    <section id="categories" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-red-800/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle background tech line art */}
      <div className="absolute left-12 top-1/4 w-[2px] h-[300px] bg-gradient-to-b from-brand-red/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-12 bottom-1/4 w-[2px] h-[300px] bg-gradient-to-t from-brand-red/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-red font-display">
                Ecosystem Portfolio
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.1]">
              Jelajahi Berbagai <br />
              Kategori Produk Kami
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md font-sans">
           Trihanggo menyediakan berbagai solusi lengkap untuk industri percetakan, mulai dari mesin digital printing, mesin finishing, sparepart original, hingga consumable berkualitas untuk mendukung produktivitas bisnis Anda.
          </p>
        </div>

        {/* Dynamic Bento Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((category, index) => {
            const IconComponent = IconMap[category.icon] || Printer;
            const gridClass = getGridClasses(category.size, index);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => onSelectCategory(category.id)}
                className={`${gridClass} relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 bg-gradient-to-b from-white/5 to-white/0 flex flex-col justify-end p-6 sm:p-8 hover:border-brand-red/40 transition-all duration-500`}
              >
                {/* 1. Behind Overlay Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.35] group-hover:brightness-[0.25] saturate-[0.8]"
                  />
                  {/* Visual gradient overlay creating high text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* 2. Custom Border Glow Animation (Simulated red border on hover) */}
                <div className="absolute inset-0 border border-transparent group-hover:border-brand-red/30 rounded-2xl pointer-events-none transition-all duration-500 z-10" />

                {/* 3. Top-Right floating count and icon indicators */}
                <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-colors">
                    {category.count}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* 4. Core Content Card */}
                <div className="relative z-10 text-left space-y-2 max-w-xl">
                  {/* Floating Large Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-4 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-white font-display font-bold text-xl sm:text-2xl tracking-tight group-hover:text-brand-red transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans opacity-90 group-hover:opacity-100 transition-opacity">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
