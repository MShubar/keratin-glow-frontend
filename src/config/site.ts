export const SITE_URL = 'https://www.keratinglow.bh';
export const SITE_NAME = 'Keratin Glow';
export const SITE_TAGLINE = 'Hair Master in the GCC';

export const PHONE_E164 = '+97333263906';
export const PHONE_DISPLAY = '+973 3326 3906';
export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=97333263906';
export const INSTAGRAM_URL = 'https://www.instagram.com/keratinglow_bh/';
export const INSTAGRAM_HANDLE = '@keratinglow_bh';
export const MAPS_URL = 'https://maps.app.goo.gl/Qw9yFp3MLCGncCnz5';
export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5063.4202353867195!2d50.47492395736732!3d26.18435372014316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49b10030d38e03%3A0x98ae3cadb957cafd!2sKeratin%20Glow!5e0!3m2!1sen!2sbh!4v1766471199043!5m2!1sen!2sbh';

export const GEO = {
  latitude: 26.184354,
  longitude: 50.474924,
};

export const ADDRESS = {
  streetAddress: '5FPG+88C, Janabiyah',
  addressLocality: 'Al Janabiyah',
  addressRegion: 'Northern Governorate',
  addressCountry: 'BH',
  plusCode: '5FPG+88C',
  display: '5FPG+88C, Janabiyah, Kingdom of Bahrain',
  displayLines: ['5FPG+88C, Janabiyah', 'Kingdom of Bahrain'],
};

export type OpeningHoursEntry = {
  day: string;
  opens: string;
  closes: string;
  display: string;
};

export const OPENING_HOURS: OpeningHoursEntry[] = [
  { day: 'Monday', opens: '10:00', closes: '20:00', display: '10:00 AM – 8:00 PM' },
  { day: 'Tuesday', opens: '09:00', closes: '20:00', display: '9:00 AM – 8:00 PM' },
  { day: 'Wednesday', opens: '10:00', closes: '20:00', display: '10:00 AM – 8:00 PM' },
  { day: 'Thursday', opens: '10:00', closes: '20:00', display: '10:00 AM – 8:00 PM' },
  { day: 'Friday', opens: '10:00', closes: '20:00', display: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', opens: '10:00', closes: '20:00', display: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', opens: '10:00', closes: '20:00', display: '10:00 AM – 8:00 PM' },
];

export const OPENING_HOURS_SUMMARY = 'Open daily · Tue 9 AM – 8 PM · Other days 10 AM – 8 PM';

/** Schema.org OpeningHoursSpecification for JSON-LD */
export const SCHEMA_OPENING_HOURS = OPENING_HOURS.map(({ day, opens, closes }) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: day,
  opens,
  closes,
}));

export const SEO = {
  title: 'Keratin Glow | Keratin Treatment & Hair Salon in Bahrain',
  titleAr: 'كيراتين جلو | صالون كيراتين وعلاج الشعر في البحرين',
  description:
    'Keratin Glow — Bahrain\'s trusted hair salon for keratin treatments, nanoplasty, botox protein, balayage & hair coloring in Janabiyah. Book via WhatsApp +973 3326 3906.',
  descriptionAr:
    'كيراتين جلو — صالون شعر موثوق في البحرين لعلاجات الكيراتين والنانوبلاستي والصبغة والبالياج في الجنبية. احجز عبر واتساب.',
  keywords: [
    'keratin treatment bahrain',
    'hair salon bahrain',
    'keratin glow',
    'nanoplasty bahrain',
    'hair straightening bahrain',
    'balayage bahrain',
    'hair color bahrain',
    'keratin janabiyah',
    'صالون كيراتين البحرين',
    'علاج الكيراتين البحرين',
    'تسريح الشعر البحرين',
  ].join(', '),
  ogImage: `${SITE_URL}/og-image.webp`,
};

export const SERVICES = [
  'Keratin Treatment',
  'Hair Botox',
  'Protein Treatment',
  'Nanoplasty',
  'Hair Straightening',
  'Balayage',
  'Hair Coloring',
  'Cold Restoration',
  'Hair Repair Treatment',
];
