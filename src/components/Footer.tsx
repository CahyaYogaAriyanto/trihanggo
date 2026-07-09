/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, Facebook, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 text-white font-sans relative pt-16 pb-8 overflow-hidden">
      {/* Red accent line running across the footer top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 via-red-800 to-transparent" />

      {/* Decorative ambient background light */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center relative overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                <div className="w-8 h-1 bg-white rotate-45 transform translate-y-[-2px] translate-x-[-1px] rounded" />
                <div className="w-8 h-1 bg-white -rotate-45 transform translate-y-[4px] translate-x-[2px] rounded absolute" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight uppercase text-white block">
                  Trihanggo
                </span>
                <span className="block text-[8px] font-mono tracking-[0.25em] text-red-500 font-bold -mt-1 uppercase">
                  Printing Systems
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Trihanggo is a recognized leader in high-volume industrial printing hardware, professional consumables, certified spare parts, and custom color profile engineering setups.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-red-600 text-white/60 hover:text-white transition-all shadow-sm">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-red-600 text-white/60 hover:text-white transition-all shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-red-600 text-white/60 hover:text-white transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-red-600 text-white/60 hover:text-white transition-all shadow-sm">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4 text-left lg:pl-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onScrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  About Journey
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('categories')} className="text-gray-400 hover:text-white transition-colors">
                  Product Sectors
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('catalog')} className="text-gray-400 hover:text-white transition-colors">
                  Catalog Showcase
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('why-us')} className="text-gray-400 hover:text-white transition-colors">
                  Trihanggo Edge
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              Corporate Office
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>
                  PT. Trihanggo Printing Systems Tbk.<br />
                  Jl. Trihanggo No. 45, Gamping,<br />
                  Sleman, D.I. Yogyakarta 55291
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>support@trihanggo.co.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Mon - Sat: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Maps Integration (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              Distribution Hub Map
            </h4>
            
            {/* Styled Google Maps iframe container */}
            <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-white/5">
              <iframe
                title="Trihanggo HQ Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.164344445381!2d110.33405786317208!3d-7.785465228148971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5806b72a4401%3A0xe7c61dfa14436577!2sTrihanggo%2C%20Gamping%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white flex items-center gap-1 mt-1 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Footer Bottom Portion */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="text-left">
            <p>© {currentYear} PT. Trihanggo Printing Systems Tbk. All Rights Reserved.</p>
            <p className="text-[10px] text-gray-600 mt-1">
              Developed with premium industrial standards. Certified ISO 9001:2015 & ISO 14001:2015.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 bg-white/5 hover:bg-red-600 border border-white/5 hover:border-red-500 text-white font-medium py-2 px-4 rounded-xl transition-all"
            title="Scroll to Top"
          >
            <span className="text-xs">Scroll to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
