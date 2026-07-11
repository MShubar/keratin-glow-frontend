export type GalleryItem = {
  id: string;
  title: string;
  treatment: string;
  description: string;
  before: string;
  after: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'keratin-1',
    title: 'Silky Smooth Keratin',
    treatment: 'Keratin Treatment',
    description: 'Frizzy, wavy hair transformed into straight, glossy, nourished hair.',
    before: '/gallery/keratin-1-before.webp',
    after: '/gallery/keratin-1-after.webp',
  },
  {
    id: 'nanoplasty-1',
    title: 'Complete Straightening',
    treatment: 'Nanoplasty',
    description: 'Tight curls straightened with long-lasting, protected results.',
    before: '/gallery/nanoplasty-1-before.webp',
    after: '/gallery/nanoplasty-1-after.webp',
  },
  {
    id: 'balayage-1',
    title: 'Balayage Refresh',
    treatment: 'Balayage',
    description: 'Natural sun-kissed color with healthy, vibrant shine.',
    before: '/gallery/balayage-1-before.webp',
    after: '/gallery/balayage-1-after.webp',
  },
];
