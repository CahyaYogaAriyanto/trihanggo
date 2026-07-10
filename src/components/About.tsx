/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldCheck, Users, Calendar, Clock, Star, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { ABOUT_IMAGE, COMPANY_GROWTH_TIMELINE } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden font-sans">
      {/* Background Decorative Accent Shapes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gray-100 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-12 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Cinematic Imagery, Asymmetrical Overlapping Layout (5 Columns) */}
          <div className="lg:col-span-5 relative">
            {/* Background Red Angle Line Accent */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-red-600 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-red-600 rounded-br-xl pointer-events-none" />

            {/* Main Overlapping Image Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group"
            >
              <img
                src={ABOUT_IMAGE}
                alt="Trihanggo Machinery Lab"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
              />
              {/* Subtle light gradient wash over the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Badge (Within Image) */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-100 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  14+
                </div>
                <div>
                  <span className="block text-gray-900 font-bold text-sm">Tahun Keahlian Cetak</span>
                  <span className="block text-gray-500 text-xs font-mono tracking-wider uppercase">Berdiri Sejak 2012</span>
                </div>
              </div>
            </motion.div>

            {/* FLOATING CARD 2: Offline Statistics Indicator (Offset) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 -left-10 bg-gray-900 text-white p-5 rounded-2xl shadow-2xl border border-gray-800 max-w-[200px] hidden md:block"
            >
              <div className="flex items-center gap-2 text-red-500 mb-2">
                <Users className="w-5 h-5 animate-bounce" />
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-red-400">Jaringan Kami</span>
              </div>
              <h4 className="text-2xl font-bold tracking-tight">1.200+</h4>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                Printer industrial aktif yang diservis di seluruh Asia Tenggara.
              </p>
            </motion.div>

            {/* FLOATING CARD 3: Engineering SLA standard (Offset Upper Right) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-12 -right-6 bg-[#C8102E] text-white py-3.5 px-5 rounded-xl shadow-xl flex items-center gap-3 hidden sm:flex"
            >
              <ShieldCheck className="w-5 h-5 text-white animate-pulse" />
              <div className="text-left">
                <span className="block text-[9px] font-mono tracking-widest uppercase text-white/80 font-bold">Guaranteed SLA</span>
                <span className="text-xs font-bold font-sans">3-Hour Response</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Asymmetrical Layout Text & Milestones (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-red font-display">
                  Tentang Trihanggo
                </span>
              </div>
              <h2 className="text-brand-dark text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.1]">
                Menghadirkan Inovasi Teknologi untuk Masa Depan Industri Media Cetak.
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-sans">
              <p>
                Trihanggo merupakan penyedia mesin digital printing, mesin finishing, serta berbagai kebutuhan industri percetakan yang terpercaya di Sulawesi Utara. Dengan pengalaman lebih dari 10 tahun, kami berkomitmen menghadirkan solusi teknologi percetakan modern melalui produk berkualitas, layanan profesional, dan dukungan teknis yang andal. Kami juga menyediakan suku cadang (sparepart), consumable, serta layanan purna jual untuk memastikan setiap mesin beroperasi secara optimal. Didukung jaringan pemasok global dan distribusi yang luas, Trihanggo terus menjadi mitra strategis bagi pelaku industri percetakan dengan mengutamakan kualitas, inovasi, harga yang kompetitif, serta kepuasan pelanggan.
              </p>
              <p className="font-semibold text-gray-800">
                Tujuan kami hanya satu: menghilangkan downtime. Saat mesin roll paper maupun flatbed Anda berhenti beroperasi, produktivitas dan investasi bisnis ikut terhenti. Oleh karena itu, kami menghadirkan ekosistem operasional yang lengkap agar proses pencetakan Anda tetap berjalan lancar, efisien, dan tanpa hambatan.
              </p>
            </div>

            {/* MILESTONE TIMELINE SHOWING COMPANY GROWTH */}
            <div className="pt-8 border-t border-gray-100">
              <div className="text-xs font-display font-bold tracking-widest text-gray-400 uppercase mb-6 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-red" /> Milestone Chronology
              </div>

              {/* Grid-based timeline layout */}
              <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                {COMPANY_GROWTH_TIMELINE.map((milestone, idx) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Time Dot Indicator */}
                    <span className="absolute -left-[41px] top-0.5 w-6 h-6 rounded-full bg-white border-2 border-brand-red flex items-center justify-center group-hover:bg-brand-red transition-all duration-300">
                      <span className="w-2 h-2 rounded-full bg-brand-red group-hover:bg-white transition-all" />
                    </span>

                    {/* Timeline card */}
                    <div className="bg-white hover:bg-brand-light p-5 rounded-xl border border-gray-100 card-shadow hover:border-brand-red/20 transition-all duration-300 text-left">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="text-brand-red font-bold font-display text-lg">
                          {milestone.year}
                        </span>
                        <span className="text-[9px] font-mono font-bold tracking-wider uppercase bg-gray-50 border border-gray-200 px-2 py-0.5 rounded text-gray-500">
                          {milestone.badge}
                        </span>
                      </div>
                      <h4 className="text-brand-dark font-display font-bold text-base mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-sans">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
