/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  specs: { label: string; value: string }[];
  features: string[];
  tags: string[];
  isFeatured: boolean;
  status: 'Available' | 'In Stock' | 'On Request' | 'Tersedia' | 'Berdasarkan Permintaan';
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  count: string;
  size: 'large' | 'medium' | 'small'; // For asymmetrical masonry layout
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  badge: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FeatureBlock {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
}
