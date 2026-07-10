/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, ProductCategory, Milestone, Partner, Testimonial, FeatureBlock } from './types';

// Import local images so Vite can process and hash them correctly at build time
import HERO_IMAGE from './assets/images/trihanggo_hero_1783583587771.jpg';
import ABOUT_IMAGE from './assets/images/trihanggo_about_1783583606004.jpg';
import PRINTER_IMAGE from './assets/images/mesinDIgitalprinting.png';
import INK_IMAGE from './assets/images/trihanggo_ink_1783583633164.jpg';
import KonicaImage from './assets/images/KonicaMinoltaC3070-C3080.png';
import LogoMesinC30 from './assets/images/mesin_pemotong_kertas.png';
import JilidPanas from './assets/images/jilid_panas.png';
import HarakeImage from './assets/images/HirarkeImage.png';
import OPCDrumXerox  from './assets/images/sparepart.png';
import Corporate from './assets/brand/Corporate.png';
import Kyocera from './assets/brand/kyocera.svg';
import Phoseon from './assets/brand/phoseon.png';
import Ricoh from './assets/brand/ricoh.svg';
import Mutoh from './assets/brand/mutoh.png';
import xrp from './assets/brand/xrp.png';


export { HERO_IMAGE, ABOUT_IMAGE, PRINTER_IMAGE, INK_IMAGE };

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'digital-printing',
    title: 'Mesin Digital Printing',
    description: 'Mesin digital printing multifungsi berkualitas tinggi untuk print, copy, scan dengan teknologi laser dan LED digital.',
    image: PRINTER_IMAGE,
    icon: 'Printer',
    count: '15+ Model',
    size: 'large'
  },
  {
    id: 'paper-cutting',
    title: 'Mesin Pemotong Kertas',
    description: 'Mesin pemotong kertas hidrolik dan elektrik dengan presisi tinggi untuk berbagai ukuran kertas dan produksi skala besar.',
    image: LogoMesinC30,
    icon: 'Layers',
    count: '10+ Model',
    size: 'medium'
  },
  {
    id: 'binding-machines',
    title: 'Mesin Jilid Panas',
    description: 'Mesin jilid panas digital elektrik dengan panel kontrol intuitif untuk dokumen profesional dan presentasi berkualitas.',
    image: JilidPanas,
    icon: 'Cpu',
    count: '8 Model',
    size: 'medium'
  },
  {
    id: 'sticker-cutting',
    title: 'Mesin Stiker Cutting',
    description: 'Mesin cutting stiker presisi tinggi dengan kecepatan potong hingga 800 mm/s untuk berbagai jenis material.',
    image: HarakeImage,
    icon: 'Settings',
    count: '5 Model',
    size: 'small'
  },
  {
    id: 'spare-parts',
    title: 'Spare Part',
    description: 'Suku cadang original dan berkualitas untuk berbagai tipe mesin guna menjaga performa dan keandalan operasional.',
    image: INK_IMAGE,
    icon: 'Workflow',
    count: '100+ Item',
    size: 'small'
  },
  {
    id: 'rental-service',
    title: 'Rental Mesin',
    description: 'Layanan penyewaan mesin dengan periode fleksibel untuk membantu memenuhi kebutuhan produksi secara efisien.',
    image: 'https://images.unsplash.com/photo-1554774853-b415df9eeb92?auto=format&fit=crop&w=800&q=80',
    icon: 'Droplets',
    count: 'Tersedia',
    size: 'medium'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'xerox-c3375',
    name: 'Xerox Office C3375 / C5575 / C7775',
    category: 'digital-printing',
    image: PRINTER_IMAGE,
    shortDesc: 'Mesin multifungsi laser colour untuk print, copy, scan dengan kecepatan hingga 75 ppm dan resolusi 1200 x 2400 dpi.',
    longDesc: 'Xerox seri Office adalah solusi all-in-one yang sempurna untuk kantor dan sekolah. Dengan teknologi Laser Colour Multifunction Printer, mendukung ukuran kertas A5-A3, kecepatan cetak hingga 75 halaman per menit, dan kapasitas kertas maksimum 5.140 lembar. Dilengkapi dengan touchscreen colour panel, mobile printing (AirPrint, Mopria, Xerox Print Service), dan keamanan data encryption.',
    specs: [
      { label: 'Fungsi Utama', value: 'Print, Copy, Scan, Fax (Optional)' },
      { label: 'Teknologi', value: 'Laser Colour Multifunction Printer' },
      { label: 'Ukuran Kertas', value: 'A5 - A3' },
      { label: 'Resolusi Cetak', value: 'Hingga 1200 x 2400 dpi' },
      { label: 'Kecepatan Cetak', value: 'C3375: 35ppm | C5575: 55ppm | C7775: 75ppm' },
      { label: 'Kapasitas Kertas', value: 'Hingga 5.140 Lembar' }
    ],
    features: [
      'Cetak warna berkualitas tinggi dengan kecepatan hingga 75 halaman per menit',
      'Kapasitas kertas besar untuk volume kerja tinggi',
      'Pengoperasian mudah melalui layar sentuh berwarna',
      'Dukungan mobile printing dan jaringan kantor',
      'Pemindaian dokumen berkecepatan tinggi',
      'Mendukung ukuran kertas hingga A3'
    ],
    tags: ['Multifungsi', 'Laser Colour', 'High Speed'],
    isFeatured: true,
    status: 'Tersedia'
  },
  {
    id: 'konica-c3070',
    name: 'Konica Minolta C3070 / C3080',
    category: 'digital-printing',
    image: KonicaImage,
    shortDesc: 'Mesin produksi digital printing electrophotographic laser dengan kecepatan tinggi hingga 80 ppm untuk produksi volume besar.',
    longDesc: 'Konica Minolta AccurioPress C3070/C3080 adalah mesin produksi profesional dengan teknologi Electrophotographic Laser untuk kualitas cetak stabil dengan resolusi tinggi. Kapasitas kertas besar untuk produktivitas tanpa henti dan integrasi mudah dengan alur kerja digital. Finishing opsional lengkap (Staple, Punch, Booklet, Folding).',
    specs: [
      { label: 'Fungsi Utama', value: 'Print, Copy, Scan' },
      { label: 'Teknologi', value: 'Electrophotographic Laser' },
      { label: 'Ukuran Kertas', value: 'SRA3, A3, A4' },
      { label: 'Resolusi Cetak', value: 'Hingga 1.200 x 3.600 dpi' },
      { label: 'Kecepatan Cetak', value: 'C3070: 70ppm | C3080: 80ppm' },
      { label: 'Kapasitas Kertas', value: 'Hingga 15.390 Lembar' }
    ],
    features: [
      'Kecepatan tinggi untuk produksi volume besar',
      'Kualitas cetak stabil dengan resolusi tinggi',
      'Kapasitas kertas besar untuk produktivitas tanpa henti',
      'Finishing profesional lengkap (Opsional)',
      'Integrasi mudah dengan alur kerja digital',
      'Keamanan data dan kontrol pengguna yang andal'
    ],
    tags: ['Production', 'High Volume', 'Professional'],
    isFeatured: true,
    status: 'Tersedia'
  },
  {
    id: 'harake-h5310tv8',
    name: 'Mesin Jilid Panas Digital F2',
    category: 'binding-machines',
    image: JilidPanas,

    shortDesc: 'Mesin jilid panas digital profesional dengan kontrol suhu presisi, menghasilkan jilidan yang kuat, rapi, dan efisien untuk berbagai kebutuhan dokumen.',

    longDesc: 'Mesin Jilid Panas Digital F@ dirancang untuk memberikan hasil penjilidan yang cepat, kuat, dan profesional. Dilengkapi dengan panel kontrol digital untuk pengaturan suhu yang akurat, sistem pemanas yang stabil, serta desain ergonomis yang memudahkan proses kerja. Mesin ini cocok digunakan di percetakan, copy center, kantor, sekolah, instansi pemerintah, hingga industri yang membutuhkan proses penjilidan dokumen secara rutin.',

    specs: [
      { label: 'Tipe Mesin', value: 'Mesin Jilid Panas Digital' },
      { label: 'Sistem Kontrol', value: 'Panel Digital' },
      { label: 'Rentang Suhu', value: '120°C - 200°C' },
      { label: 'Waktu Pemanasan', value: '± 15 Menit' },
      { label: 'Sistem Penjepit', value: 'Elektrik Otomatis' },
      { label: 'Aplikasi', value: 'Dokumen, Proposal, Laporan, Buku, dan Katalog' }
    ],

    features: [
      'Panel kontrol digital yang mudah dioperasikan',
      'Pengaturan suhu presisi untuk hasil jilid yang optimal',
      'Pemanasan cepat dengan suhu yang stabil',
      'Sistem penjepit otomatis untuk hasil lebih rapi',
      'Konstruksi kokoh dan tahan lama',
      'Cocok untuk percetakan, copy center, kantor, sekolah, dan industri'
    ],

    tags: ['Digital Binding', 'Hot Binding', 'Professional'],

    isFeatured: true,
    status: 'Tersedia'
  },
  {
    id: 'binding-c30',
    name: 'Mesin Pemotong Kertas',
    category: 'binding-machines',
    image: LogoMesinC30,
    shortDesc: 'Mesin pemotong kertas presisi tinggi dengan konstruksi kokoh, mampu menghasilkan potongan rapi dan akurat untuk berbagai kebutuhan percetakan.',

    longDesc: 'Mesin pemotong kertas profesional yang dirancang untuk memberikan hasil potongan presisi dengan pengoperasian yang mudah dan aman. Dilengkapi dengan pisau baja berkualitas tinggi, meja kerja yang kokoh, serta sistem pengaturan ukuran yang akurat sehingga cocok digunakan untuk kebutuhan percetakan, digital printing, percetakan offset, copy center, perkantoran, hingga industri grafika.',

    specs: [
      { label: 'Model', value: 'C30 / C50 / C70' },
      { label: 'Lebar Potong Maks.', value: '300mm (C30) | 500mm (C50) | 700mm (C70)' },
      { label: 'Tinggi Potong Maks.', value: '40mm (C30) | 50mm (C50/C70)' },
      { label: 'Kapasitas Potong', value: 'Hingga 400 lembar (C30) | 500 lembar (C50) | 700 lembar (C70)' },
      { label: 'Material Pisau', value: 'Baja berkualitas tinggi' },
      { label: 'Sistem Pengoperasian', value: 'Manual / Semi Otomatis' }
    ],

    features: [
      'Hasil potongan presisi dan rapi',
      'Pisau baja berkualitas tinggi dengan daya tahan tinggi',
      'Meja kerja kokoh dan stabil',
      'Pengaturan ukuran potong yang mudah dan akurat',
      'Desain ergonomis untuk meningkatkan efisiensi kerja',
      'Cocok untuk percetakan, digital printing, copy center, kantor, dan industri grafika'
    ],
    tags: ['Digital Panel', 'Auto Clamp', 'Professional'],
    isFeatured: true,
    status: 'Tersedia'
  },
  {
    id: 'harake-v5035',
    name: 'harake-v5035',
    category: 'binding-machines',
    image: HarakeImage,
    shortDesc: 'Mesin cutting stiker dengan kecepatan hingga 800 mm/s, ketebalan potong 1,2mm, dan tekanan potong 1000g dengan presisi tinggi.',
    longDesc: 'Harake V-5035 adalah mesin stiker cutting profesional dengan cutting speed hingga 800 mm/s dan positioning accuracy ≤0,01mm. Dilengkapi LCD Touch Screen, interface USB/U-Disk/Ethernet (Optional), dan software SignMaster/FlexiSIGN. Mampu memotong material hingga 1,2mm dengan tekanan kuat hingga 1000g. Desain kompak, hemat ruang dan daya.',
    specs: [
      { label: 'Model', value: 'Harake V-5035' },
      { label: 'Cutting Speed', value: 'Hingga 800 mm/s' },
      { label: 'Cutting Thickness', value: '1,2 mm' },
      { label: 'Cutting Pressure', value: '1000 g' },
      { label: 'Positioning Accuracy', value: '≤ 0,01 mm' },
      { label: 'Repeat Accuracy', value: '≤ 0,1 mm' }
    ],
    features: [
      'Cutting presisi tinggi dan stabil',
      'Kecepatan tinggi hingga 800 mm/s',
      'Mampu memotong material hingga 1,2 mm',
      'Tekanan potong kuat hingga 1000 g',
      'Panel sentuh intuitif dan mudah dioperasikan',
      'Kompatibel dengan berbagai software desain',
      'Desain kompak, hemat ruang dan daya'
    ],
    tags: ['High Speed', 'Precision', 'Compact'],
    isFeatured: false,
    status: 'Tersedia'
  },
  {
    id: 'opc-drum-xerox-c60-c70',
    name: 'OPC Drum Xerox',
    category: 'spare-parts',
    image: OPCDrumXerox ,

    shortDesc: 'OPC Drum berkualitas tinggi untuk mesin digital printing Xerox dengan hasil cetak tajam, warna akurat, dan performa yang stabil.',

    longDesc: 'OPC Drum Xerox merupakan komponen penting pada mesin digital printing yang berfungsi mentransfer gambar ke media cetak dengan presisi tinggi. Produk ini dibuat menggunakan material aluminium drum berkualitas dengan lapisan Organic Photo Conductor (OPC) sehingga menghasilkan kualitas cetak yang tajam, warna konsisten, serta daya tahan tinggi. Mudah dipasang dan kompatibel dengan berbagai seri mesin Xerox untuk kebutuhan percetakan profesional.',

    specs: [
      { label: 'Nama Produk', value: 'OPC Drum Xerox' },
      { label: 'Jenis', value: 'OPC Drum (Organic Photo Conductor)' },
      { label: 'Kompatibel', value: 'Xerox C60, C70, C550, C560, C570, C700, C800, 7780' },
      { label: 'Warna', value: 'Black & Color (CMYK)' },
      { label: 'Material', value: 'Aluminium Drum dengan lapisan OPC berkualitas tinggi' },
      { label: 'Fungsi', value: 'Mentransfer gambar (image) ke media cetak secara presisi' },
      { label: 'Kualitas Cetak', value: 'Tajam, akurat, dan konsisten' },
      { label: 'Daya Tahan', value: 'Performa stabil untuk penggunaan jangka panjang' },
      { label: 'Pemasangan', value: 'Mudah dipasang dan siap digunakan' },
      { label: 'Kondisi', value: 'Baru 100%' }
    ],

    features: [
      'Kompatibel dengan mesin Xerox seri C60, C70, C550, C560, C570, C700, C800, dan 7780',
      'Menghasilkan cetakan tajam dan warna yang akurat',
      'Material OPC berkualitas tinggi dengan umur pakai yang panjang',
      'Performa stabil untuk kebutuhan produksi volume tinggi',
      'Pemasangan mudah tanpa modifikasi',
      'Ideal untuk percetakan digital, copy center, dan industri grafika'
    ],

    tags: [
      'Xerox',
      'OPC Drum',
      'Sparepart',
      'Digital Printing',
      'Black',
      'CMYK'
    ],

    isFeatured: true,
    status: 'Tersedia'
  }
];

export const COMPANY_GROWTH_TIMELINE: Milestone[] = [
  {
    year: '2012',
    title: 'Pendirian',
    description: 'Trihanggo didirikan oleh tim kecil insinyur pemeliharaan yang berdedikasi, menawarkan suku cadang premium dan dukungan darurat untuk ruang cetak komersial.',
    badge: 'Awal Mula'
  },
  {
    year: '2016',
    title: 'Distribusi Nasional & Tinta',
    description: 'Kami mengamankan kemitraan eksklusif untuk tinta industrial premium, meluncurkan laboratorium profil warna canggih kami untuk melayani perusahaan percetakan besar di seluruh Indonesia.',
    badge: 'Ekspansi'
  },
  {
    year: '2020',
    title: 'Peluncuran Apex',
    description: 'Memasuki integrasi manufaktur langsung, Trihanggo memperkenalkan printer UV format besar generasi pertama Apex, langsung merebut pangsa pasar industrial.',
    badge: 'Inovasi'
  },
  {
    year: '2026',
    title: 'Solusi Cetak Cerdas',
    description: 'Kini, Trihanggo adalah pemimpin terpercaya di bidang mesin, perangkat lunak, dan konsumabel, memberdayakan industri kemasan, tekstil, dan signage volume tinggi dengan diagnostik cloud jarak jauh.',
    badge: 'Kepemimpinan Modern'
  }
];

export const BRAND_PARTNERS: Partner[] = [
  { id: '1', name: 'Mutoh', logo: Mutoh },
  { id: '2', name: 'Ricoh', logo: Ricoh},
  { id: '3', name: 'Epson', logo: Corporate},
  { id: '4', name: 'Kyocera', logo: Kyocera},
  { id: '5', name: 'X-Rite', logo: xrp},
  { id: '6', name: 'Phoseon', logo: Phoseon}
];

export const WHY_CHOOSE_US: FeatureBlock[] = [
  {
    id: 'trusted-supplier',
    title: 'Pemasok Terpercaya',
    description: 'Dengan lebih dari satu dekade dedikasi terhadap keunggulan cetak komersial, kami adalah mitra mesin pilihan utama bagi grup pengemasan dan penerbitan terkemuka di kawasan ini.',
    icon: 'ShieldCheck',
    colorClass: 'from-red-500/10 to-red-500/5 hover:border-red-500'
  },
  {
    id: 'genuine-products',
    title: 'Produk Asli Bersertifikat',
    description: 'Nol produk tiruan. Nol risiko pasar abu-abu. Setiap nozzle, botol tinta, rel pemandu, dan papan elektronik membawa garansi pabrikan langsung dan clearance QA penuh.',
    icon: 'CheckCircle',
    colorClass: 'from-amber-500/10 to-amber-500/5 hover:border-amber-500'
  },
  {
    id: 'competitive-pricing',
    title: 'Harga Langsung Kompetitif',
    description: 'Melalui saluran pengadaan langsung pabrik dan jalur logistik terpusat, kami menyediakan setup teknologi terkini dengan model investasi modal yang dioptimalkan.',
    icon: 'TrendingUp',
    colorClass: 'from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500'
  },
  {
    id: 'fast-delivery',
    title: 'Pengiriman Cepat & Aman',
    description: 'Pusat gudang ber-AC kami menyimpan lebih dari 1.500 suku cadang dan tinta, siap kirim di hari yang sama untuk menjaga lini produksi Anda tetap berjalan.',
    icon: 'Truck',
    colorClass: 'from-blue-500/10 to-blue-500/5 hover:border-blue-500'
  },
  {
    id: 'technical-support',
    title: 'Dukungan SLA Profesional 24/7',
    description: 'Didukung oleh insinyur lapangan bersertifikat pabrik yang siaga sepanjang waktu, menyelesaikan masalah secara remote atau tiba di lokasi dalam kerangka waktu SLA yang ditentukan.',
    icon: 'Wrench',
    colorClass: 'from-indigo-500/10 to-indigo-500/5 hover:border-indigo-500'
  },
  {
    id: 'warranty-service',
    title: 'Layanan Garansi Diperpanjang',
    description: 'Paket perlindungan mesin fleksibel termasuk audit kesehatan preventif, rencana asuransi printhead, dan sertifikasi pelatihan operasional yang disesuaikan.',
    icon: 'Award',
    colorClass: 'from-purple-500/10 to-purple-500/5 hover:border-purple-500'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Andri Wijaya',
    role: 'Direktur Produksi',
    company: 'Sinar Indah Packaging',
    content: 'Meningkatkan fasilitas kami dengan tiga unit Trihanggo Apex-9000 merevolusi siklus produksi kami. Rata-rata uptime kami melonjak hingga 98,4%, dan konsistensi warna pada pekerjaan kemasan ritel multi-batch tidak tertandingi di pasar.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Siti Rahmawati',
    role: 'CEO & Pendiri',
    company: 'VividSign Solutions',
    content: 'Yang membuat Trihanggo luar biasa bukan hanya mesin UV flatbed canggih mereka, tetapi juga dedikasi penuh terhadap dukungan teknis SLA. Saat kami mengalami masalah profil kustom selama kampanye grafis stadion besar, insinyur mereka tetap di lokasi hingga pukul 3 pagi untuk menyelesaikannya.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Budi Santoso',
    role: 'Kepala Operasional',
    company: 'Nusantara Textile Lab',
    content: 'Kami menggunakan tinta sublimasi khusus Trihanggo dan konsumabel kertas kustom dalam skala industrial. Resolusi cetak sangat tajam, dan penyumbatan nozzle hampir tidak pernah terjadi. Frekuensi penggantian printhead kami berkurang setengahnya.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  }
];
