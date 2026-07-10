/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Eye, FileText, ChevronRight, Settings, Info, ShoppingBag } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data';
import { Product } from '../types';

interface CatalogProps {
  activeFilter: string;
  setActiveFilter: (filterId: string) => void;
  onOpenProductDetails: (product: Product) => void;
  onOpenQuoteWithProduct: (product: Product) => void;
}

export const Catalog: React.FC<CatalogProps> = ({
  activeFilter,
  setActiveFilter,
  onOpenProductDetails,
  onOpenQuoteWithProduct
}) => {
  const filteredProducts = activeFilter === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === activeFilter);

  const catalogRef = useRef<HTMLDivElement>(null);

  // We can create a nice tab listing for our filtering
  const filterTabs = [
    { label: 'All Showcase', id: 'all' },
    { label: 'Industrial Printers', id: 'industrial-printers' },
    { label: 'Digital Machines', id: 'digital-printing' },
    { label: 'Inks & Consumables', id: 'ink-consumables' },
    { label: 'Spare Parts', id: 'spare-parts' },
  ];

  return (
    <section id="catalog" ref={catalogRef} className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background soft grids and lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-[1px] bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-red font-display">
              Katalog Mesin Bersertifikasi
            </span>
          </div>
          <h2 className="text-brand-dark text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
            High-Performance Systems
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
           Dirancang untuk menangani berbagai media berukuran besar, kebutuhan produksi berkapasitas tinggi, serta siklus operasional industri yang berat, dengan akurasi dan performa yang tetap konsisten tanpa kehilangan kalibrasi.
          </p>
        </div>

        {/* Premium Tab Filter System */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-16 max-w-4xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-6 py-3.5 text-[10px] font-display font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-brand-red text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-brand-dark hover:border-brand-red hover:text-brand-red shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Alternating Layout Showcase */}
        <div className="space-y-20 lg:space-y-28">
          {filteredProducts.map((product, index) => {
            const isEven = index % 2 === 0;
            const itemNumber = (index + 1).toString().padStart(2, '0');

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
              >
                {/* Product Image Column (Even = Left, Odd = Right) */}
                <div
                  className={`lg:col-span-5 relative ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  } flex justify-center items-center`}
                >
                  {/* Image Backdrop Soft Glow Shape */}
                  <div className="absolute inset-0 bg-brand-red/5 rounded-[40px] blur-[80px] pointer-events-none" />

                  {/* Asymmetric border frame decoration */}
                  <div className="absolute inset-x-4 inset-y-4 border border-dashed border-gray-200 -z-10" />

                  {/* High Quality Product Card Frame */}
                  <div className="relative w-full aspect-square max-w-[400px] bg-white border border-gray-100 rounded-2xl p-8 card-shadow hover:shadow-2xl transition-shadow duration-500 overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Floating Stock Indicator */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-gray-100 rounded-full py-1 px-3.5 flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[10px] font-sans font-semibold text-gray-700">{product.status}</span>
                    </div>

                    {/* Giant background number overlay matching the theme */}
                    <div className="absolute right-6 top-4 text-gray-100/70 font-display font-black text-6xl select-none pointer-events-none">
                      {itemNumber}
                    </div>

                    {/* Floating Action Hint */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => onOpenProductDetails(product)}
                        className="bg-brand-dark text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content Details Column (Even = Right, Odd = Left) */}
                <div
                  className={`lg:col-span-7 text-left space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Category overline badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-wider text-brand-red bg-brand-red/5 px-3 py-1 border border-brand-red/10 rounded">
                      {product.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <div className="flex gap-1">
                      {product.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-sans bg-gray-100 text-gray-600 px-2.5 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title and brief */}
                  <div className="space-y-3">
                    <h3 className="text-brand-dark text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-sans">
                        <CheckCircle className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Fast Specs Matrix */}
                  <div className="grid grid-cols-2 gap-3.5 pt-2">
                    {product.specs.slice(0, 4).map((spec, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 p-3 rounded-sm card-shadow text-left">
                        <span className="block text-[9px] font-display font-bold text-gray-400 uppercase tracking-wider">{spec.label}</span>
                        <span className="block text-brand-dark font-sans font-semibold text-xs mt-0.5 truncate">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <button
                      onClick={() => onOpenProductDetails(product)}
                      className="group bg-brand-dark hover:bg-brand-red text-white font-display font-bold text-[10px] tracking-widest uppercase px-8 py-4.5 rounded-sm flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
                    >
                      <Info className="w-4 h-4" />
                      <span>Specifications</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenQuoteWithProduct(product)}
                      className="border border-brand-red hover:bg-brand-red text-brand-red hover:text-white font-display font-bold text-[10px] tracking-widest uppercase px-8 py-4.5 rounded-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Request Quote</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
