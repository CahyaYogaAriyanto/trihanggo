/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, CheckCircle, ArrowRight, MessageSquare, Building, FileText, Send, Sparkles, AlertCircle } from 'lucide-react';
import { Product } from '../types';
import { FEATURED_PRODUCTS } from '../data';

interface ModalsProps {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  quoteOpen: boolean;
  setQuoteOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  quotePreFilledProduct: Product | null;
  setQuotePreFilledProduct: (product: Product | null) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  searchOpen,
  setSearchOpen,
  quoteOpen,
  setQuoteOpen,
  selectedProduct,
  setSelectedProduct,
  quotePreFilledProduct,
  setQuotePreFilledProduct
}) => {
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>(FEATURED_PRODUCTS);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults(FEATURED_PRODUCTS);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = FEATURED_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
      setSearchResults(filtered);
    }
  }, [searchQuery]);

  // Quote Multi-step form state
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    companyName: '',
    industryType: 'Signage & Display',
    contactPerson: '',
    email: '',
    phone: '',
    productId: quotePreFilledProduct?.id || '',
    substrateType: 'Rigid Media (Glass, Acrylic, Wood)',
    monthlyVolume: '5,000 - 15,000 m²',
    additionalNotes: ''
  });

  // Sync selected product with form when quotePreFilledProduct changes
  useEffect(() => {
    if (quotePreFilledProduct) {
      setQuoteForm(prev => ({ ...prev, productId: quotePreFilledProduct.id }));
    }
  }, [quotePreFilledProduct]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteLoading(true);
    // Simulate premium B2B proposal calculation
    setTimeout(() => {
      setQuoteLoading(false);
      setQuoteSuccess(true);
    }, 2200);
  };

  const resetQuoteForm = () => {
    setQuoteStep(1);
    setQuoteSuccess(false);
    setQuoteLoading(false);
    setQuoteForm({
      companyName: '',
      industryType: 'Signage & Display',
      contactPerson: '',
      email: '',
      phone: '',
      productId: '',
      substrateType: 'Rigid Media (Glass, Acrylic, Wood)',
      monthlyVolume: '5,000 - 15,000 m²',
      additionalNotes: ''
    });
    setQuotePreFilledProduct(null);
  };

  // Close modals on Esc press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setQuoteOpen(false);
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchOpen, setQuoteOpen, setSelectedProduct]);

  return (
    <>
      {/* 1. SEARCH MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-12 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-3xl bg-brand-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl mt-8 z-10"
            >
              {/* Header Search Field */}
              <div className="relative border-b border-white/10 p-6 flex items-center">
                <Search className="absolute left-8 w-6 h-6 text-white/40" />
                <input
                  type="text"
                  placeholder="Search machines, inks, spare parts, and specs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent pl-12 pr-12 text-white placeholder-white/40 text-lg font-display outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-6 p-2 rounded-full hover:bg-white/5 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Results */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="text-xs font-display font-bold tracking-widest text-white/40 uppercase mb-4">
                  {searchResults.length > 0 ? `Search Results (${searchResults.length})` : 'No products matched'}
                </div>

                <div className="space-y-4">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        setSearchOpen(false);
                        setSelectedProduct(product);
                      }}
                      className="group p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-red/30 rounded-lg flex gap-4 cursor-pointer transition-all duration-300"
                    >
                      <div className="w-16 h-16 rounded bg-black overflow-hidden flex-shrink-0 border border-white/10">
                        <img
                          src={product.image}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-display font-bold text-base truncate group-hover:text-brand-red transition-colors">
                            {product.name}
                          </h4>
                          <span className="text-[10px] font-mono uppercase tracking-wider bg-brand-red/20 text-brand-red px-2 py-0.5 rounded">
                            {product.category.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-white/60 text-xs truncate font-sans">
                          {product.shortDesc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {product.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-sans text-white/40 bg-white/5 px-2 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-center text-white/30 group-hover:text-red-500 group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer info */}
              <div className="bg-black/40 border-t border-white/5 p-4 text-center">
                <p className="text-xs font-mono text-white/40">
                  Quick Search System • Esc to Exit
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. PRODUCT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-5xl bg-brand-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-brand-red text-white/80 hover:text-white transition-all shadow-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual Assets */}
              <div className="md:col-span-5 bg-black flex flex-col justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
                {/* Background red glow */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative text-left">
                  <span className="text-[10px] font-display tracking-widest text-brand-red uppercase font-bold border border-brand-red/20 px-2.5 py-1 rounded bg-brand-red/10 inline-block mb-4">
                    {selectedProduct.category.replace('-', ' ')}
                  </span>
                  <h3 className="text-white text-2xl font-display font-black tracking-tight mb-2">
                    {selectedProduct.name}
                  </h3>
                  <div className="flex gap-2 mb-4">
                    {selectedProduct.tags.map(t => (
                      <span key={t} className="text-[10px] bg-white/5 border border-white/10 text-white/70 px-2.5 py-0.5 rounded font-sans">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Product Image Container */}
                <div className="my-6 flex justify-center items-center h-48 md:h-64 relative z-10 group">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Footer tags */}
                <div className="flex justify-between items-center bg-white/5 border border-white/5 p-3.5 rounded-xl z-10 mt-auto">
                  <div className="text-left">
                    <span className="block text-[10px] font-display font-bold text-white/40 uppercase">Stock Status</span>
                    <span className="text-emerald-400 font-sans font-medium text-sm flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {selectedProduct.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-display font-bold text-white/40 uppercase">Warranty</span>
                    <span className="text-white/80 font-sans text-xs mt-0.5">
                      12 Months Comprehensive
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Info / Specs */}
              <div className="md:col-span-7 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-2 text-left">
                    Product Overview
                  </div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-sans text-left">
                    {selectedProduct.longDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6 text-left">
                    <div className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-red" /> Key Innovation Features
                    </div>
                    <ul className="space-y-2.5">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-white/70 font-sans">
                          <CheckCircle className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications Grid */}
                  <div className="text-left">
                    <div className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-3">
                      Technical Specifications
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProduct.specs.map((spec, idx) => (
                        <div key={idx} className="p-3 bg-white/5 border border-white/5 rounded-sm flex flex-col justify-between">
                          <span className="text-[10px] font-display font-bold text-white/40 uppercase">{spec.label}</span>
                          <span className="text-white text-xs font-sans font-medium mt-1 truncate">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal CTA footer */}
                <div className="border-t border-white/10 pt-6 mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setQuotePreFilledProduct(selectedProduct);
                      setSelectedProduct(null);
                      setQuoteOpen(true);
                    }}
                    className="flex-1 bg-brand-red hover:bg-red-700 text-white font-display font-bold text-[10px] tracking-widest uppercase px-6 py-4.5 rounded-sm transition-all shadow-lg hover:scale-[1.01] active:scale-[0.98] text-center cursor-pointer"
                  >
                    Request Quote for this Model
                  </button>
                  <a
                    href={`https://wa.me/628123456789?text=Hello%20Trihanggo,%20I%20would%20like%20to%20inquire%20about%20the%20Product:%20${encodeURIComponent(selectedProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-white font-display font-bold text-[10px] tracking-widest uppercase px-6 py-4.5 rounded-sm transition-all text-center hover:scale-[1.01] flex items-center justify-center cursor-pointer"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. QUOTE REQUEST MODAL */}
      <AnimatePresence>
        {quoteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!quoteLoading) resetQuoteForm();
                setQuoteOpen(false);
              }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button */}
              {!quoteLoading && (
                <button
                  onClick={() => {
                    resetQuoteForm();
                    setQuoteOpen(false);
                  }}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full hover:bg-white/5 text-white/60 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Success Screen */}
              {quoteSuccess ? (
                <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                    className="w-16 h-16 bg-brand-red/10 border border-brand-red/20 text-brand-red rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-white text-2xl font-display font-black tracking-tight mb-2 uppercase">
                    Quote Submitted
                  </h3>
                  <p className="text-white/60 text-sm max-w-md mx-auto mb-8 font-sans leading-relaxed">
                    Thank you! Our advanced technical appraisal system is preparing your customized commercial estimate. Our factory sales directors will contact you on WhatsApp and email in under <strong className="text-white font-medium">3 hours</strong>.
                  </p>
                  <div className="p-4 bg-white/5 border border-white/5 rounded-sm text-left text-xs max-w-sm mb-8">
                    <span className="font-display font-bold text-white/40 block mb-1">REFERENCE ID</span>
                    <span className="font-mono text-white/90">TH-2026-{(Math.random() * 100000).toFixed(0)}</span>
                  </div>
                  <button
                    onClick={() => {
                      resetQuoteForm();
                      setQuoteOpen(false);
                    }}
                    className="bg-white text-black hover:bg-white/90 font-display font-bold text-[10px] tracking-widest uppercase px-8 py-3.5 rounded-sm transition-all shadow-lg text-center cursor-pointer"
                  >
                    Return to Homepage
                  </button>
                </div>
              ) : quoteLoading ? (
                /* Loading Appraising Screen */
                <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[450px]">
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 border-4 border-brand-red/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-t-brand-red rounded-full animate-spin" />
                  </div>
                  <h3 className="text-white text-xl font-display font-bold mb-2 uppercase">
                    Compiling B2B Proposal
                  </h3>
                  <p className="text-white/40 text-xs font-mono max-w-xs uppercase tracking-wider animate-pulse">
                    Analyzing configurations • Applying commercial volume discount • Generating SLA parameters...
                  </p>
                </div>
              ) : (
                /* Standard Form */
                <form onSubmit={handleQuoteSubmit} className="p-6 md:p-8">
                  <div className="mb-6 text-left">
                    <h3 className="text-white text-xl font-display font-black tracking-tight mb-1 flex items-center gap-2 uppercase">
                      <FileText className="w-5 h-5 text-brand-red" /> Request Commercial Quote
                    </h3>
                    <p className="text-white/60 text-xs font-sans">
                      Fill out this brief setup form to receive a professional quotation with volume tier structures.
                    </p>
                  </div>

                  {/* Progressive Steps Indicator */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className={`h-1 flex-1 rounded-sm ${quoteStep >= 1 ? 'bg-brand-red' : 'bg-white/10'}`} />
                    <div className={`h-1 flex-1 rounded-sm ${quoteStep >= 2 ? 'bg-brand-red' : 'bg-white/10'}`} />
                    <div className={`h-1 flex-1 rounded-sm ${quoteStep >= 3 ? 'bg-brand-red' : 'bg-white/10'}`} />
                  </div>

                  {/* STEP 1: COMPANY DATA */}
                  {quoteStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-2 flex items-center gap-1 text-left">
                        <Building className="w-3.5 h-3.5" /> Step 1: Corporate Profile
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        <div>
                          <label className="block text-[10px] font-display font-bold text-white/40 uppercase mb-1.5">Company Name *</label>
                          <input
                            required
                            type="text"
                            placeholder="PT. Sinar Indah Tbk"
                            value={quoteForm.companyName}
                            onChange={(e) => setQuoteForm({ ...quoteForm, companyName: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-brand-red focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-display font-bold text-white/40 uppercase mb-1.5">Industry Sector</label>
                          <select
                            value={quoteForm.industryType}
                            onChange={(e) => setQuoteForm({ ...quoteForm, industryType: e.target.value })}
                            className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-brand-red focus:outline-none transition-colors cursor-pointer"
                          >
                            <option>Signage & Large Format Display</option>
                            <option>Industrial Packaging & Labeling</option>
                            <option>Textile & Fashion Printing</option>
                            <option>Architectural & Custom Decoration</option>
                            <option>Commercial Publishing House</option>
                          </select>
                        </div>
                      </div>

                      <div className="p-4 bg-white/5 border border-white/5 rounded-sm flex items-start gap-3 mt-4 text-left">
                        <AlertCircle className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <div className="text-[11px] font-sans text-white/60 leading-relaxed">
                          We respect data privacy. Company credentials are only utilized to build custom B2B configuration plans in accordance with Indonesian manufacturing import standards.
                        </div>
                      </div>

                      <div className="pt-6 flex justify-end">
                        <button
                          type="button"
                          disabled={!quoteForm.companyName}
                          onClick={() => setQuoteStep(2)}
                          className="bg-brand-red hover:bg-red-700 disabled:opacity-40 text-white font-display font-bold text-[10px] tracking-widest uppercase px-6 py-3 rounded-sm flex items-center gap-2 transition-all shadow-lg cursor-pointer"
                        >
                          Configure Requirements <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: TECHNICAL METRICS */}
                  {quoteStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-2 flex items-center gap-1 text-left">
                        <MessageSquare className="w-3.5 h-3.5" /> Step 2: System Configuration
                      </div>

                      <div className="text-left">
                        <label className="block text-[10px] font-display font-bold text-white/40 uppercase mb-1.5">Machine of Interest</label>
                        <select
                          value={quoteForm.productId}
                          onChange={(e) => setQuoteForm({ ...quoteForm, productId: e.target.value })}
                          className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-brand-red focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="">-- General Multi-Product Inquiry --</option>
                          {FEATURED_PRODUCTS.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        <div>
                          <label className="block text-[10px] font-display font-bold text-white/40 uppercase mb-1.5">Primary Substrate Material</label>
                          <select
                            value={quoteForm.substrateType}
                            onChange={(e) => setQuoteForm({ ...quoteForm, substrateType: e.target.value })}
                            className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-brand-red focus:outline-none transition-colors cursor-pointer"
                          >
                            <option>Flexible (Vinyl, Banner, Backlit Film)</option>
                            <option>Rigid (Glass, Wood, Corrugated, Metal)</option>
                            <option>Fabrics (Polyester, Cotton Sublimation)</option>
                            <option>Packaging Materials (Board, Paper, Foils)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-display font-bold text-white/40 uppercase mb-1.5">Expected Monthly Printing Volume</label>
                          <select
                            value={quoteForm.monthlyVolume}
                            onChange={(e) => setQuoteForm({ ...quoteForm, monthlyVolume: e.target.value })}
                            className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-brand-red focus:outline-none transition-colors cursor-pointer"
                          >
                            <option>Under 5,000 m² / month</option>
                            <option>5,000 - 15,000 m² / month</option>
                            <option>15,000 - 50,000 m² / month</option>
                            <option>Over 50,000 m² / month</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setQuoteStep(1)}
                          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display font-bold text-[10px] tracking-widest uppercase px-6 py-3 rounded-sm transition-all cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuoteStep(3)}
                          className="bg-brand-red hover:bg-red-700 text-white font-display font-bold text-[10px] tracking-widest uppercase px-6 py-3 rounded-sm flex items-center gap-2 transition-all shadow-lg cursor-pointer"
                        >
                          Add Contact Info <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: CONTACT INFORMATION */}
                  {quoteStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-2 flex items-center gap-1 text-left">
                        <Sparkles className="w-3.5 h-3.5" /> Step 3: Distribution & Delivery Points
                      </div>

                      <div className="text-left">
                        <label className="block text-[10px] font-display font-bold text-white/40 uppercase mb-1.5">Full Name (Contact Person) *</label>
                        <input
                          required
                          type="text"
                          placeholder="Aris Setiawan"
                          value={quoteForm.contactPerson}
                          onChange={(e) => setQuoteForm({ ...quoteForm, contactPerson: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-brand-red focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        <div>
                          <label className="block text-[10px] font-display font-bold text-white/40 uppercase mb-1.5">Business Email Address *</label>
                          <input
                            required
                            type="email"
                            placeholder="aris@sinarindah.co.id"
                            value={quoteForm.email}
                            onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-brand-red focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-display font-bold text-white/40 uppercase mb-1.5">WhatsApp Number *</label>
                          <input
                            required
                            type="tel"
                            placeholder="+62 812-3456-7890"
                            value={quoteForm.phone}
                            onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-brand-red focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="text-left">
                        <label className="block text-[10px] font-display font-bold text-white/40 uppercase mb-1.5">Additional Commercial Requests (Optional)</label>
                        <textarea
                          placeholder="Please include maintenance SLA plans and ink bundle discounts in the estimate proposal..."
                          rows={2}
                          value={quoteForm.additionalNotes}
                          onChange={(e) => setQuoteForm({ ...quoteForm, additionalNotes: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-brand-red focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setQuoteStep(2)}
                          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display font-bold text-[10px] tracking-widest uppercase px-6 py-3 rounded-sm transition-all cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={!quoteForm.contactPerson || !quoteForm.email || !quoteForm.phone}
                          className="bg-brand-red hover:bg-red-700 disabled:opacity-40 text-white font-display font-bold text-[10px] tracking-widest uppercase px-6 py-3 rounded-sm flex items-center gap-2 transition-all shadow-lg cursor-pointer"
                        >
                          Submit Estimate Request <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
