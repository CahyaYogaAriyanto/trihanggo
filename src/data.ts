/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, ProductCategory, Milestone, Partner, Testimonial, FeatureBlock } from './types';

// Import local images so Vite can process and hash them correctly at build time
import HERO_IMAGE from './assets/images/trihanggo_hero_1783583587771.jpg';
import ABOUT_IMAGE from './assets/images/trihanggo_about_1783583606004.jpg';
import PRINTER_IMAGE from './assets/images/trihanggo_printer_1783583620340.jpg';
import INK_IMAGE from './assets/images/trihanggo_ink_1783583633164.jpg';

import HERO_IMAGE from './assets/images/trihanggo_hero_1783583587771.jpg';
import ABOUT_IMAGE from './assets/images/trihanggo_about_1783583606004.jpg';
import PRINTER_IMAGE from './assets/images/trihanggo_printer_1783583620340.jpg';
import INK_IMAGE from './assets/images/trihanggo_ink_1783583633164.jpg';

export { HERO_IMAGE, ABOUT_IMAGE, PRINTER_IMAGE, INK_IMAGE };

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'industrial-printers',
    title: 'Industrial Printers',
    description: 'Heavy-duty roll-to-roll and single-pass printers designed for uninterrupted high-volume commercial production.',
    image: PRINTER_IMAGE,
    icon: 'Printer',
    count: '12 Models',
    size: 'large'
  },
  {
    id: 'digital-printing',
    title: 'Digital Printing Machines',
    description: 'Versatile high-precision flatbed UV and textile digital machines for custom applications on rigid and flexible media.',
    image: 'https://images.unsplash.com/photo-1616400619175-5ebd30090ac1?auto=format&fit=crop&w=800&q=80',
    icon: 'Cpu',
    count: '8 Models',
    size: 'medium'
  },
  {
    id: 'ink-consumables',
    title: 'Ink & Consumables',
    description: 'Eco-solvent, UV-curable, and sublimation inks engineered for vibrant color gamuts, adhesion, and prolonged printhead life.',
    image: INK_IMAGE,
    icon: 'Droplets',
    count: '45 Products',
    size: 'medium'
  },
  {
    id: 'spare-parts',
    title: 'Spare Parts',
    description: 'Genuine certified industrial components including high-density printheads, filters, dampers, capping stations, and servo motors.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    icon: 'Settings',
    count: '150+ Parts',
    size: 'small'
  },
  {
    id: 'accessories',
    title: 'Printing Accessories',
    description: 'Professional colorimeters, cutting plotters, hot laminators, and roll-feed systems to complete your end-to-end workflow.',
    image: 'https://images.unsplash.com/photo-1513829096999-4978602294fc?auto=format&fit=crop&w=800&q=80',
    icon: 'Layers',
    count: '24 Items',
    size: 'small'
  },
  {
    id: 'printing-solutions',
    title: 'Printing Solutions',
    description: 'Custom turnkey setups, advanced ICC color profiling integrations, and automated production queue systems.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    icon: 'Workflow',
    count: '6 Solutions',
    size: 'medium'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'apex-9000-pro',
    name: 'Trihanggo Apex-9000 Pro',
    category: 'industrial-printers',
    image: PRINTER_IMAGE,
    shortDesc: 'Ultra-speed 3.2m industrial roll-to-roll UV-LED printing system built for 24/7 heavy-duty operations.',
    longDesc: 'The Trihanggo Apex-9000 Pro represents the pinnacle of large-format industrial printing. Outfitted with premium multi-array industrial printheads, it handles demanding substrates with exquisite precision. Features double-row LED curing arrays, secondary tank heating, and an advanced negative pressure system to prevent banding at high production speeds.',
    specs: [
      { label: 'Print Width', value: '3.2 Meters (126 inches)' },
      { label: 'Printhead Type', value: 'Industrial Piezo (4-8 Heads configuration)' },
      { label: 'Max Speed', value: '180 m²/hour' },
      { label: 'Max Resolution', value: '1200 x 1440 DPI' },
      { label: 'Curing Technology', value: 'Dual Water-Cooled UV-LED' },
      { label: 'Media Handling', value: 'Heavy Roll-to-Roll Pneumatic Tension System' }
    ],
    features: [
      'Automatic media width sensing and thickness adjustment',
      'Anti-static bar and crash sensors on the carriage',
      'Smart multi-stage drying system',
      'High-grade linear guide rail with dual linear motor system'
    ],
    tags: ['Best Seller', 'UV-LED', 'Industrial Scale'],
    isFeatured: true,
    status: 'In Stock'
  },
  {
    id: 'chromaflow-max-inks',
    name: 'ChromaFlow Max HD Inks',
    category: 'ink-consumables',
    image: INK_IMAGE,
    shortDesc: 'High-density, low-odor industrial UV-LED and Eco-Solvent inks with unmatched adhesion.',
    longDesc: 'Formulated specifically for high-speed printheads, Trihanggo ChromaFlow Max HD inks deliver exceptional color intensity, outstanding rub resistance, and prolonged outdoor lightfastness. Engineered with ultra-fine pigment dispersions to prevent nozzle clogging and extend printhead operational life significantly.',
    specs: [
      { label: 'Ink Type', value: 'Premium UV-LED & Eco-Solvent options' },
      { label: 'Color Gamut', value: 'Cyan, Magenta, Yellow, Black, Light Cyan, Light Magenta, White, Varnish' },
      { label: 'Outdoor Durability', value: 'Up to 3 Years without lamination' },
      { label: 'Viscosity', value: 'Stable 8.2 - 9.4 cPs at operating temperature' },
      { label: 'Compliance', value: 'REACH, RoHS, Greenguard Gold Certified' }
    ],
    features: [
      'Instant curing for fast-turnaround jobs',
      'Extremely low VOC formulation for environmental safety',
      'Flexible formula prevents ink cracking on stretched materials',
      'Optimized pigment size ensuring uniform solid color fills'
    ],
    tags: ['Premium Eco', 'CMYK + W + V', 'Certified'],
    isFeatured: true,
    status: 'Available'
  },
  {
    id: 'vertex-t100-flatbed',
    name: 'Trihanggo Vertex T100 UV Flatbed',
    category: 'digital-printing',
    image: 'https://images.unsplash.com/photo-1616400619175-5ebd30090ac1?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Architectural-grade 2.5m x 1.3m UV flatbed printer for printing on glass, wood, metals, and acrylics.',
    longDesc: 'The Vertex T100 is engineered for high-value rigid media application markets. It incorporates an zoned vacuum bed that secures heavy substrates flawlessly. Capable of printing high-density white ink bases and luxurious high-gloss spot varnish finishes simultaneously in a single pass.',
    specs: [
      { label: 'Print Size', value: '2500 mm x 1300 mm (Rigid Media)' },
      { label: 'Max Thickness', value: '100 mm (Automatic height measurement)' },
      { label: 'Max Load', value: '50 kg / m²' },
      { label: 'Ink Channels', value: '8 Channels (CMYK + Lc + Lm + White + Varnish)' },
      { label: 'Drying System', value: 'Sub-divided variable vacuum zone system' }
    ],
    features: [
      'Simultaneous color, white, and varnish print passes',
      'Dual guide rails for exceptionally steady carriage transit',
      'Automatic static eliminator bar standard',
      'Pneumatic media alignment pins for exact registration'
    ],
    tags: ['Flatbed UV', 'Architectural Glass', 'Varnish Tech'],
    isFeatured: true,
    status: 'On Request'
  },
  {
    id: 'precision-printhead-x',
    name: 'Precision Printhead X-Series',
    category: 'spare-parts',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Original high-density Micro-Piezo printhead replacement designed for continuous heavy production.',
    longDesc: 'Restore factory-new performance to your commercial wide-format printers with genuine Trihanggo X-Series replacement printheads. Built using state-of-the-art silicon micro-electro-mechanical systems (MEMS) technology, guaranteeing droplets placement within sub-micron accuracy.',
    specs: [
      { label: 'Technology', value: 'Thin-film Piezoelectric MEMS' },
      { label: 'Active Nozzles', value: '3,200 active nozzles (8 channels x 400 nozzles)' },
      { label: 'Native Drop Size', value: 'Variable 1.5 - 3.8 picoliters' },
      { label: 'Firing Frequency', value: 'Up to 50 kHz' },
      { label: 'Compatibility', value: 'Trihanggo Apex series & major Japanese flatbed engines' }
    ],
    features: [
      'Proprietary gold-plated surface resists ink adherence and dust',
      'Precision temperature sensor built-in to keep ink viscosity uniform',
      'Compatible with water-based, solvent, and UV ink chemistries',
      'Long lifespan rated up to 6 billion firings per nozzle'
    ],
    tags: ['Genuine Spare', 'MEMS Tech', 'High Density'],
    isFeatured: false,
    status: 'In Stock'
  }
];

export const COMPANY_GROWTH_TIMELINE: Milestone[] = [
  {
    year: '2012',
    title: 'The Foundation',
    description: 'Trihanggo was established with a small passionate team of maintenance engineers, offering premium spare parts and emergency support for commercial pressrooms.',
    badge: 'Inception'
  },
  {
    year: '2016',
    title: 'National Distribution & Inks',
    description: 'We secured exclusive partnerships for premium industrial inks, launching our state-of-the-art color profile lab to serve major printing houses nationwide.',
    badge: 'Expansion'
  },
  {
    year: '2020',
    title: 'The Apex Launch',
    description: 'Venturing into direct manufacturing integration, Trihanggo introduced the first-generation Apex large-format UV printers, immediately capturing industrial market share.',
    badge: 'Innovation'
  },
  {
    year: '2026',
    title: 'Smart Printing Solutions',
    description: 'Today, Trihanggo is a trusted full-stack machinery, software, and consumable leader, empowering high-volume packaging, textile, and signage industries with remote cloud diagnostics.',
    badge: 'Modern Leadership'
  }
];

export const BRAND_PARTNERS: Partner[] = [
  { id: '1', name: 'Mutoh', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80' },
  { id: '2', name: 'Ricoh', logo: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=300&q=80' },
  { id: '3', name: 'Epson', logo: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=300&q=80' },
  { id: '4', name: 'Kyocera', logo: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&w=300&q=80' },
  { id: '5', name: 'X-Rite', logo: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=300&q=80' },
  { id: '6', name: 'Phoseon', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80' }
];

export const WHY_CHOOSE_US: FeatureBlock[] = [
  {
    id: 'trusted-supplier',
    title: 'Trusted Supplier',
    description: 'With over a decade of dedication to commercial print excellence, we are the go-to machinery partner for the region’s premier packaging and publishing groups.',
    icon: 'ShieldCheck',
    colorClass: 'from-red-500/10 to-red-500/5 hover:border-red-500'
  },
  {
    id: 'genuine-products',
    title: 'Genuine Certified Products',
    description: 'Zero clones. Zero gray market risks. Every nozzle, ink bottle, guide rail, and electronic board carries direct manufacturer warranties and full QA clearance.',
    icon: 'CheckCircle',
    colorClass: 'from-amber-500/10 to-amber-500/5 hover:border-amber-500'
  },
  {
    id: 'competitive-pricing',
    title: 'Competitive Direct Pricing',
    description: 'Through factory-direct procurement channels and centralized logistics pipelines, we supply state-of-the-art tech setups with optimized capital investment models.',
    icon: 'TrendingUp',
    colorClass: 'from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500'
  },
  {
    id: 'fast-delivery',
    title: 'High-Speed Secure Delivery',
    description: 'Our climate-controlled warehouse centers house over 1,500 spare parts and inks, ready for same-day dispatch to keep your production arrays humming.',
    icon: 'Truck',
    colorClass: 'from-blue-500/10 to-blue-500/5 hover:border-blue-500'
  },
  {
    id: 'technical-support',
    title: '24/7 Professional SLA Support',
    description: 'Backed by factory-certified field engineers on call round-the-clock, resolving issues remotely or arriving onsite within specified SLA timeframes.',
    icon: 'Wrench',
    colorClass: 'from-indigo-500/10 to-indigo-500/5 hover:border-indigo-500'
  },
  {
    id: 'warranty-service',
    title: 'Extended Warranty Services',
    description: 'Flexible machine protection bundles including preventative health audits, printhead insurance plans, and customized operations training certifications.',
    icon: 'Award',
    colorClass: 'from-purple-500/10 to-purple-500/5 hover:border-purple-500'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Andri Wijaya',
    role: 'Production Director',
    company: 'Sinar Indah Packaging',
    content: 'Upgrading our facility with three Trihanggo Apex-9000 units revolutionized our production cycle. Our average uptime jumped to a spectacular 98.4%, and the color consistency across multi-batch retail packaging jobs is unmatched in the market.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Siti Rahmawati',
    role: 'CEO & Founder',
    company: 'VividSign Solutions',
    content: 'What makes Trihanggo incredible isn’t just their advanced UV flatbed machines; it’s their absolute dedication to SLA technical support. When we had a custom profile issue during a massive stadium graphic campaign, their engineers stayed on site until 3 AM to resolve it.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Budi Santoso',
    role: 'Operations Lead',
    company: 'Nusantara Textile Lab',
    content: 'We use Trihanggo specialized sublimation inks and custom paper consumables on an industrial scale. The print resolution is phenomenally sharp, and nozzle clogging is practically non-existent. Our printhead replacement frequency has cut in half.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  }
];
