/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FileText, Phone, ArrowUpRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface CTAProps {
  onOpenQuote: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenQuote, onScrollToSection }) => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* 1. Rich Red-Black Background Diagonal Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark to-[#240307] pointer-events-none" />
      
      {/* Cybernetic glowing background rings */}
      <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-brand-red/10 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] rounded-full border border-brand-red/15 blur-[60px] pointer-events-none" />

      {/* Industrial micro pattern texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Floating geometric diamond */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-brand-red/20 rotate-45 pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-brand-red/30 -rotate-12 pointer-events-none hidden md:block" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8">
        
        {/* Subtle trust check */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded"
        >
          <ShieldCheck className="w-4 h-4 text-brand-red" />
          <span className="text-[10px] font-display tracking-widest text-white/80 font-bold uppercase">
            Tanpa Komitmen • Dapatkan Estimasi dan Konsultasi Online Secara Instan
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter leading-[1.08] max-w-4xl mx-auto uppercase"
        >
          Siap Meningkatkan <br />
          Bisnis Percetakan Anda?
        </motion.h2>

        {/* Short copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Dapatkan penawaran harga yang disesuaikan dengan kebutuhan bisnis Anda, beserta informasi jadwal pengiriman lokal. Tim engineer kami siap memberikan konsultasi dan solusi terbaik untuk mendukung bisnis percetakan Anda.
        </motion.p>

        {/* Action button groupings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto"
        >
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white font-display font-bold text-[10px] tracking-widest uppercase px-10 py-4.5 rounded-sm flex items-center justify-center gap-2.5 transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Ajukan Proposal</span>
          </button>

          <button
            onClick={() => onScrollToSection('catalog')}
            className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-display font-bold text-[10px] tracking-widest uppercase px-10 py-4.5 rounded-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Lihat Katalog</span>
            <ArrowUpRight className="w-4 h-4 text-white/50" />
          </button>
        </motion.div>

        {/* Technical FAQ assist hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center items-center gap-2 text-xs text-white/40 pt-4"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Butuh spesifikasi khusus? Hubungi tim engineer kami langsung melalui WhatsApp.</span>
        </motion.div>

      </div>
    </section>
  );
};
