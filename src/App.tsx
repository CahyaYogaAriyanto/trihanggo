/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Categories } from './components/Categories';
import { Layanan } from './components/Layanan';
import { Service } from './components/Service';
import { Sparepart } from './components/Sparepart';
import { ZeroGrounding } from './components/ZeroGrounding';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { Product } from './types';

export default function App() {
  // Modal control states
  const [searchOpen, setSearchOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quotePreFilledProduct, setQuotePreFilledProduct] = useState<Product | null>(null);

  // Active filter state inside the product catalog
  const [activeCatalogFilter, setActiveCatalogFilter] = useState('all');

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Click handler on Bento Category cards: filters catalog AND smooth scrolls there
  const handleSelectCategory = (categoryId: string) => {
    setActiveCatalogFilter(categoryId);
    handleScrollToSection('catalog');
  };

  // Pre-fills a product and launches the Quote Modal
  const handleOpenQuoteWithProduct = (product: Product) => {
    setQuotePreFilledProduct(product);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-500 selection:text-white relative">
      
      {/* 1. Navigation Floating Glass Header */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenQuote={() => setQuoteOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* 2. Primary Page Layout Grid Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero
          onOpenQuote={() => setQuoteOpen(true)}
          onScrollToSection={handleScrollToSection}
        />

        {/* Corporate Partnership marquee */}
        <Partners />

        {/* About Trihanggo Journey */}
        <About />

        {/* Bento-grid Product Categories */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* Alternating Featured Catalog Showcase */}
        <Layanan
          activeFilter={activeCatalogFilter}
          setActiveFilter={setActiveCatalogFilter}
          onOpenProductDetails={setSelectedProduct}
          onOpenQuoteWithProduct={handleOpenQuoteWithProduct}
        />

        {/* Layanan Tambahan */}
        <Service />
        <Sparepart />
        <ZeroGrounding />

        {/* Core Value Proposition Advantage Bento */}
        <WhyChooseUs />

        {/* Editorial Testimonials carousel */}
        <Testimonials />

        {/* Full-width Red Gradient CTA */}
        <CTA
          onOpenQuote={() => setQuoteOpen(true)}
          onScrollToSection={handleScrollToSection}
        />
      </main>

      {/* 3. Global Dark Slate Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* 4. Global Modals Controller System */}
      <Modals
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        quoteOpen={quoteOpen}
        setQuoteOpen={setQuoteOpen}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        quotePreFilledProduct={quotePreFilledProduct}
        setQuotePreFilledProduct={setQuotePreFilledProduct}
      />
    </div>
  );
}
