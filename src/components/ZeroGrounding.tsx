/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Activity, ShieldAlert, PlugZap } from 'lucide-react';

export const ZeroGrounding: React.FC = () => {
  return (
    <section id="zero-grounding" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Tech Grids */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-red font-display">
                Electrical Safety
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
              Instalasi Zero Grounding
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Kestabilan kelistrikan adalah kunci keawetan motherboard dan printhead pada mesin digital printing industrial. Sistem Zero Grounding kami meredam lonjakan listrik liar dan membuang muatan listrik statis dengan sempurna, mengurangi risiko korsleting hingga 99%.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                'Mencegah kerusakan Printhead akibat listrik statis',
                'Melindungi Motherboard dari lonjakan arus (power surge)',
                'Memastikan garansi kelistrikan mesin Anda tetap valid',
                'Instalasi dikerjakan oleh teknisi bersertifikasi kelistrikan industri'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
                  <ShieldAlert className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Info Graphic */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 text-white/5">
                <PlugZap className="w-48 h-48" />
              </div>
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <div className="text-gray-400 text-xs font-mono uppercase tracking-wider mb-1">Status Instalasi</div>
                    <div className="text-2xl font-bold font-display text-emerald-400 flex items-center gap-2">
                      <Activity className="w-6 h-6 animate-pulse" /> Optimal (0.0v - 0.2v)
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-400/30 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">100%</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 leading-relaxed">
                  *Standard toleransi pabrik untuk grounding mesin digital printing adalah maksimal 0.5 Volt (Neutral to Ground). Trihanggo berkomitmen mencapai nol koma untuk keamanan maksimal.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
