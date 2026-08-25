import { ServiceItem } from '../types';

import photoStudioImg from '../assets/images/photography_studio_camera_1787579852611.jpg';
import mediaEditingImg from '../assets/images/media_editing_lens_1787494933344.jpg';
import brandIdentityImg from '../assets/images/brand_identity_screen_1787494917333.jpg';
import webDevImg from '../assets/images/web_dev_interface_1787579881273.jpg';

export interface ExtendedServiceItem extends ServiceItem {
  number: string;
  subheading: string;
  exampleInfo: string;
  cardImage?: string;
}

export const servicesData: ExtendedServiceItem[] = [
  {
    id: 'photography-videography',
    number: '1',
    title: 'Photography & Videography',
    subheading: '(On-site & Studio Shoots)',
    subtitle: 'High-End Commercial Cinematography & Studio Staging',
    tagline: 'Cinematic visual storytelling on-site and in studio.',
    exampleInfo: 'Photography, commercial cinematography, on-location video production, editorial studio shoots, and brand campaigns.',
    description:
      'We bring full cinematic camera packages, lighting grids, and creative direction to capture your brand, team, products, and commercial spaces with Hollywood-grade production value.',
    image: photoStudioImg,
    cardImage: 'https://raw.githubusercontent.com/mivsr-spec/assets/main/Your%20paragraph%20text.png',
    badge: 'On-Site & Studio',
    deliverables: [
      '4K/6K cinema camera rig production',
      'Studio lighting & audio engineering',
      'Commercial product & lifestyle staging',
      'High-resolution raw & graded photo catalog',
    ],
    timeline: '3 - 7 Days',
    idealFor: 'Brands, restaurants, showrooms, founders, & luxury product launches',
  },
  {
    id: 'editing-photo-video',
    number: '2',
    title: 'Editing (Photo & Video)',
    subheading: '(Reels, Shorts, Retouching)',
    subtitle: 'Viral Retention Cuts & High-End Editorial Retouching',
    tagline: 'Hook audiences with high-energy pacing and sound design.',
    exampleInfo: 'Reels, YouTube Shorts, photo color grading, skin retouching, motion subtitles, kinetic pacing, and audio mastering.',
    description:
      'Transform raw footage and photos into viral social media reels, TikToks, and magazine-quality stills engineered with kinetic pacing, custom sound effects, and color grading.',
    image: mediaEditingImg,
    cardImage: 'https://raw.githubusercontent.com/mivsr-spec/assets/main/Add%20a%20heading.png',
    badge: 'Viral Retention',
    deliverables: [
      'Kinetic motion titles & dynamic subtitles',
      'Sound design & bespoke audio effects',
      'Cinematic color grading & LUT matching',
      'High-end skin retouching & composite editing',
    ],
    timeline: '48 - 72 Hours',
    idealFor: 'Content creators, founders, marketing agencies, & e-commerce brands',
  },
  {
    id: 'graphic-design',
    number: '3',
    title: 'Graphic Design',
    subheading: '(Branding, Logos, Print, Web)',
    subtitle: 'Signature Aesthetics, Visual Systems & Print Collateral',
    tagline: 'Distinctive visual language that commands immediate authority.',
    exampleInfo: 'Branding design, vector logos, print packaging, digital marketing assets, pitch decks, and web graphics.',
    description:
      'From custom geometric logomarks and typographic hierarchies to print packaging, brochures, and digital UI assets, we craft cohesive brand systems that elevate your market value.',
    image: brandIdentityImg,
    cardImage: 'https://raw.githubusercontent.com/mivsr-spec/assets/main/Book%20Us%20Now%20%E2%80%9D%20(1).png',
    badge: 'Signature Identity',
    deliverables: [
      'Custom bespoke vector logomarks & lockups',
      'Color theory system & typography hierarchy',
      'Print collateral kit (packaging, cards, decks)',
      'Comprehensive brand guidelines manual',
    ],
    timeline: '1 - 2 Weeks',
    idealFor: 'Modern enterprises, ambitious startups & premium rebrands',
  },
  {
    id: 'website-development',
    number: '4',
    title: 'Website Development',
    subheading: '(Custom & Responsive Sites)',
    subtitle: 'Bespoke, High-Converting & Ultra-Fast Web Experiences',
    tagline: 'Websites engineered for lightning speed and conversion.',
    exampleInfo: 'Custom website development, responsive mobile design, high-converting landing pages, SEO structure, and modern animations.',
    description:
      'We design and build bespoke, ultra-responsive web experiences with fluid interactions, modern typography, fast loading times, and SEO architecture built to convert visitors into clients.',
    image: webDevImg,
    cardImage: 'https://raw.githubusercontent.com/mivsr-spec/assets/main/Call%20Now%20on%E2%80%9D%20(1).png',
    badge: 'Custom & Responsive',
    deliverables: [
      'Bespoke modern UI/UX design & layout',
      'Mobile-first responsive architecture',
      'High-performance SEO & speed optimization',
      'Interactive animations & conversion funnels',
    ],
    timeline: '2 - 3 Weeks',
    idealFor: 'Growing companies, service agencies & digital-first brands',
  },
];
