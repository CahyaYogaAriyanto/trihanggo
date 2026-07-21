/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Clock, ShieldCheck, PhoneCall } from 'lucide-react';

export const Service: React.FC = () => {
  const services = [
    {
      title: 'Perbaikan Mesin',
      description: 'Layanan perbaikan mesin cepat tanggap oleh teknisi ahli tersertifikasi untuk meminimalkan downtime.',
      icon: <Wrench className="w-8 h-8 text-brand-red" />
    },
    {
      title: 'Perawatan Berkala',
      description: 'Program pemeliharaan preventif (maintenance) rutin untuk menjaga performa optimal mesin.',
      icon: <Clock className="w-8 h-8 text-brand-red" />
    },
    {
      title: 'Garansi & SLA',
      description: 'Jaminan Service Level Agreement (SLA) 24/7 untuk memastikan kelangsungan operasional bisnis Anda.',
      icon: <ShieldCheck className="w-8 h-8 text-brand-red" />
    },
    {
      title: 'Konsultasi Teknis',
      description: 'Dukungan remote maupun on-site untuk diagnosa dan penyelesaian kendala cetak.',
      icon: <PhoneCall className="w-8 h-8 text-brand-red" />
    }
  ];

  return (
    <section id="service" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-[1px] bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-red font-display">
              Technical Support
            </span>
          </div>
          <h2 className="text-brand-dark text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
            Layanan Service Profesional
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Tim insinyur bersertifikasi kami berdedikasi untuk memberikan dukungan teknis terbaik, memastikan mesin Anda beroperasi secara konsisten di tingkat kinerja puncaknya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-brand-dark mb-3">
                {svc.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
