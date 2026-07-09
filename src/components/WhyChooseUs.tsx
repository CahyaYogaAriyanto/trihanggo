/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle, TrendingUp, Truck, Wrench, Award, ChevronRight, Activity, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

const IconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  ShieldCheck: ShieldCheck,
  CheckCircle: CheckCircle,
  TrendingUp: TrendingUp,
  Truck: Truck,
  Wrench: Wrench,
  Award: Award,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-800/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3" />

      {/* Cybernetic Grid Line Overlay */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* LEFT BILLBOARD PANEL: High contrast metric display (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl relative overflow-hidden text-left">
            {/* Ambient red highlight glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-brand-red/5 rounded-full blur-[50px] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 border border-brand-red/25 rounded-full">
                <Activity className="w-3.5 h-3.5 text-brand-red animate-pulse" />
                <span className="text-[9px] font-display tracking-widest text-brand-red uppercase font-bold">
                  Operations Telemetry
                </span>
              </div>
              <h3 className="text-white text-3xl sm:text-4xl font-display font-extrabold tracking-tighter leading-[1.1]">
                Optimizing Every Aspect of Industrial Media
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                By maintaining a massive inventory of original components, inks, and backup engineering lines, Trihanggo has reduced client downtime averages from 18 hours to under 3.
              </p>
            </div>

            {/* Micro Trust Numbers */}
            <div className="mt-12 space-y-5 relative z-10 pt-8 border-t border-white/5">
              <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5 hover:border-brand-red/30 transition-colors text-left">
                <div>
                  <span className="block text-[8px] font-mono text-white/40 uppercase">Average Machinery Uptime</span>
                  <span className="text-white text-xl font-display font-black">99.4%</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5 hover:border-brand-red/30 transition-colors text-left">
                <div>
                  <span className="block text-[8px] font-mono text-white/40 uppercase">SLA Maintenance Response</span>
                  <span className="text-white text-xl font-display font-black">&lt; 3 Hours</span>
                </div>
                <span className="text-brand-red text-xs font-mono font-bold">PT Trihanggo</span>
              </div>
            </div>
          </div>

          {/* RIGHT GRID PANEL: Six Custom Cards (8 Columns) */}
          <div className="lg:col-span-8 space-y-8 flex flex-col justify-center">
            
            {/* Header portion */}
            <div className="text-left space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-red font-display">
                  Trihanggo Edge
                </span>
              </div>
              <h2 className="text-white text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-none">
                Core Competitive Advantages
              </h2>
            </div>

            {/* Asymmetrical grid containing 6 distinct features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.map((block, idx) => {
                const IconComponent = IconMap[block.icon] || ShieldCheck;
                
                return (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`p-6 rounded-2xl border border-white/5 bg-gradient-to-b ${block.colorClass} transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group`}
                  >
                    {/* Tiny visual accent light inside on hover */}
                    <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                    <div>
                      {/* Floating custom styled Icon */}
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 mb-5 group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h3 className="text-white font-display font-bold text-lg tracking-tight mb-2 group-hover:text-brand-red transition-colors">
                        {block.title}
                      </h3>

                      <p className="text-gray-400 text-xs leading-relaxed font-sans">
                        {block.description}
                      </p>
                    </div>

                    {/* Tiny footer visual arrow */}
                    <div className="mt-4 flex items-center justify-end text-white/10 group-hover:text-brand-red transition-colors pt-2 border-t border-white/5">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
