// Import all images
import g1 from './gallery/gallery1.jpg';
import g2 from './gallery/gallery2.jpg';
import g3 from './gallery/gallery3.jpg';
import g4 from './gallery/gallery4.jpg';
import g5 from './gallery/gallery5.jpg';
import g6 from './gallery/gallery6.jpg';
import g7 from './gallery/gallery7.jpg';
import g8 from './gallery/gallery8.jpg';
import g9 from './gallery/gallery9.jpg';
import g10 from './gallery/gallery10.jpg';
import g11 from './gallery/gallery11.jpg';
import g12 from './gallery/gallery12.jpg';
import g13 from './gallery/gallery13.jpg';
import g14 from './gallery/gallery14.jpg';
import g15 from './gallery/gallery15.jpg';
import g16 from './gallery/gallery16.jpg';
import g17 from './gallery/gallery17.jpg';
import g18 from './gallery/gallery18.jpg';
import g19 from './gallery/gallery19.jpg';
import g20 from './gallery/gallery20.jpg';
import g21 from './gallery/gallery21.jpg';
import g22 from './gallery/gallery22.jpg';
import g23 from './gallery/gallery23.jpg';
import g24 from './gallery/gallery24.jpg';
import g25 from './gallery/gallery25.jpg';
import g26 from './gallery/gallery26.jpg';
import g27 from './gallery/gallery27.jpg';

export const CATEGORIES = {
  PORTRAITS: 'portraits',
  HEADSHOTS: 'headshots',
  EVENTS: 'events',
};

// Hero slideshow configuration - EDIT THESE TO CUSTOMIZE
export const heroSlides = [
  {
    title: 'Events',
    subtitle: 'Celebrations & Occasions',
    image: g1,
  },
  {
    title: 'Portraits',
    subtitle: 'Personality & Presence',
    image: g2,
  },
  {
    title: 'Headshots',
    subtitle: 'Professional & Polished',
    image: g3,
  },
];

export const galleryImages = [
  { id: 1, src: g1, category: CATEGORIES.PORTRAITS },
  { id: 2, src: g2, category: CATEGORIES.PORTRAITS },
  { id: 3, src: g3, category: CATEGORIES.PORTRAITS },
  { id: 4, src: g4, category: CATEGORIES.PORTRAITS },
  { id: 5, src: g5, category: CATEGORIES.PORTRAITS },
  { id: 6, src: g6, category: CATEGORIES.PORTRAITS },
  { id: 7, src: g7, category: CATEGORIES.HEADSHOTS },
  { id: 8, src: g8, category: CATEGORIES.HEADSHOTS },
  { id: 9, src: g9, category: CATEGORIES.HEADSHOTS },
  { id: 10, src: g10, category: CATEGORIES.HEADSHOTS },
  { id: 11, src: g11, category: CATEGORIES.PORTRAITS },
  { id: 12, src: g12, category: CATEGORIES.PORTRAITS },
  { id: 13, src: g13, category: CATEGORIES.PORTRAITS },
  { id: 14, src: g14, category: CATEGORIES.PORTRAITS },
  { id: 15, src: g15, category: CATEGORIES.PORTRAITS },
  { id: 16, src: g16, category: CATEGORIES.PORTRAITS },
  { id: 17, src: g17, category: CATEGORIES.PORTRAITS },
  { id: 18, src: g18, category: CATEGORIES.PORTRAITS },
  { id: 19, src: g19, category: CATEGORIES.PORTRAITS },
  { id: 20, src: g20, category: CATEGORIES.PORTRAITS },
  { id: 21, src: g21, category: CATEGORIES.PORTRAITS },
  { id: 22, src: g22, category: CATEGORIES.HEADSHOTS },
  { id: 23, src: g23, category: CATEGORIES.HEADSHOTS },
  { id: 24, src: g24, category: CATEGORIES.HEADSHOTS },
  { id: 25, src: g25, category: CATEGORIES.HEADSHOTS },
  { id: 26, src: g26, category: CATEGORIES.HEADSHOTS },
  { id: 27, src: g27, category: CATEGORIES.HEADSHOTS },
];
