/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Search, Phone, FileText, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../assets/images/Logo_Trihanggo.png';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenQuote: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenQuote, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Catalog', id: 'catalog' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Reviews', id: 'reviews' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-4'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <div
            onClick={() => onScrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Elegant bespoke abstract geometric logo instead of mock text */}
            <img src={Logo} alt="Trihanggo Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className="text-sm font-display font-bold uppercase tracking-widest text-gray-600 hover:text-brand-red transition-colors relative py-1.5 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop Right Side CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Icon button */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full transition-all duration-300 bg-white hover:bg-gray-100 text-gray-700 border border-gray-200/60 shadow-sm cursor-pointer"
              title="Search catalog"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/082195404022?text=Hello%20Trihanggo,%20I%20visited%20your%20website%20and%20would%20like%20to%20consult%20on%20industrial%20printing%20equipment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4.5 py-2.5 rounded-full font-display font-bold text-[11px] tracking-wider uppercase transition-all duration-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100 shadow-sm"
            >
              <Phone className="w-3 h-3 animate-pulse text-emerald-600" />
              <span>WhatsApp Sales</span>
            </a>

            {/* Quote Request CTA */}
            <button
              onClick={onOpenQuote}
              className="bg-brand-red hover:bg-brand-red/90 text-white flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-[11px] tracking-widest uppercase transition-all duration-300 shadow-lg cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Search */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full bg-white text-gray-700 border border-gray-200/60 shadow-sm"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white text-gray-800 border border-gray-200/60 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-30 lg:hidden"
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#1A1A1A] border-l border-white/10 p-8 z-30 lg:hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                  <div>
                    <span className="text-white font-sans font-bold text-lg tracking-tight uppercase">
                      Trihanggo
                    </span>
                    <span className="block text-[8px] font-mono tracking-widest text-red-500 font-bold uppercase">
                      Industrial Printing
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full hover:bg-white/5 text-white/60"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onScrollToSection(item.id);
                      }}
                      className="text-left text-white/80 hover:text-white text-base font-sans font-medium py-1.5 border-b border-white/5 flex items-center justify-between group"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-xs uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Consultation
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-xs uppercase tracking-wider shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  Request Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
