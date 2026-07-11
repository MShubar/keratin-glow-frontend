export type GalleryPhotoFit = {
  /** CSS object-fit scale via transform (1 = no zoom) */
  scale?: number;
  /** CSS object-position value */
  position?: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  treatment: string;
  description: string;
  before: string;
  after: string;
  beforeFit?: GalleryPhotoFit;
  afterFit?: GalleryPhotoFit;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'keratin-1',
    title: 'Silky Smooth Keratin',
    treatment: 'Keratin Treatment',
    description: 'Dry, frizzy hair transformed into straight, glossy, nourished hair.',
    before: '/gallery/keratin-before.webp',
    after: '/gallery/keratin-after.webp',
    beforeFit: { scale: 1, position: 'center 8%' },
    afterFit: { scale: 1.4, position: 'center 28%' },
  },
  {
    id: 'nanoplasty-1',
    title: 'Complete Straightening',
    treatment: 'Nanoplasty',
    description: 'Tight curly volume transformed into long, sleek, glossy straight hair.',
    before: '/gallery/nanoplasty-before.webp',
    after: '/gallery/nanoplasty-after.webp',
    beforeFit: { scale: 1.2, position: 'center 12%' },
    afterFit: { scale: 1.1, position: 'center 2%' },
  },
  {
    id: 'hair-extension-1',
    title: 'Hair Extension Transformation',
    treatment: 'Hair Extension',
    description: 'Added length and volume with natural-looking blonde hair extensions.',
    before: '/gallery/hair-extension-before.webp',
    after: '/gallery/hair-extension-after.webp',
    beforeFit: { scale: 1, position: 'center 2%' },
    afterFit: { scale: 1.6, position: 'center 35%' },
  },
];
