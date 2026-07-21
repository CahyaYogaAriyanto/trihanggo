/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Settings, PackageCheck, Zap, Cog } from 'lucide-react';
import { INK_IMAGE } from '../data'; // Reusing an image from data.ts for sparepart preview

export const Sparepart: React.FC = () => {
  return (
    <section id="sparepart" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-red font-display">
                  Suku Cadang Asli
                </span>
              </div>
              <h2 className="text-brand-dark text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
                Ketersediaan Sparepart & Consumable
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Kami menyediakan suku cadang (sparepart) dan bahan habis pakai (consumable) yang 100% orisinil dan bersertifikasi. Didukung dengan gudang penyimpanan berskala besar untuk memastikan ketersediaan pasokan demi kelancaran produksi Anda.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Printhead & Komponen Inti', desc: 'Suku cadang presisi tinggi langsung dari pabrikan.', icon: <Cog className="w-5 h-5 text-white" /> },
                { title: 'Tinta & Toner Premium', desc: 'Tinta berkualitas tinggi untuk warna yang konsisten.', icon: <Zap className="w-5 h-5 text-white" /> },
                { title: 'Garansi Kualitas 100%', desc: 'Semua komponen melewati uji kendali mutu ketat.', icon: <PackageCheck className="w-5 h-5 text-white" /> }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-red flex-shrink-0 flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background blob */}
            <div className="absolute inset-0 bg-brand-red/10 rounded-[3rem] rotate-3 scale-105" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={INK_IMAGE}
                alt="Trihanggo Spareparts and Inks"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 w-full">
                  <div className="flex items-center gap-4 text-white">
                    <Settings className="w-8 h-8 animate-spin-slow" />
                    <div>
                      <div className="font-bold">1,500+ Items In Stock</div>
                      <div className="text-xs text-white/70">Siap dikirim hari ini</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
