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
    description: 'Dry, frizzy hair transformed into straight, glossy, nourished hair.',
    before: '/gallery/keratin-before.webp',
    after: '/gallery/keratin-after.webp',
  },
  {
    id: 'nanoplasty-1',
    title: 'Complete Straightening',
    treatment: 'Nanoplasty',
    description: 'Tight curly volume transformed into long, sleek, glossy straight hair.',
    before: '/gallery/nanoplasty-before.webp',
    after: '/gallery/nanoplasty-after.webp',
  },
  {
    id: 'hair-extension-1',
    title: 'Hair Extension Transformation',
    treatment: 'Hair Extension',
    description: 'Added length and volume with natural-looking blonde hair extensions.',
    before: '/gallery/hair-extension-before.webp',
    after: '/gallery/hair-extension-after.webp',
  },
];
