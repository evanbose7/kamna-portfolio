import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, Play, ArrowUpRight, ExternalLink, X, Film, Tv, Wand2, Compass, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const InstagramIcon = ({ className = 'w-4 h-4 text-white' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const CATEGORY_CARDS = [
  {
    id: 'problem-solving',
    title: 'PROBLEM SOLVING AND CAMPAIGN VIDEOS',
    subtitle: 'STRATEGIC BRAND NARRATIVES',
    description: 'Playful editorial narratives, bold imagery & graphic campaign storytelling.',
    icon: Film,
    projects: [
      { id: 'ps-1', title: 'MEMOIRE EDITORIAL CAMPAIGN 01', description: 'A visually striking reel introducing Memoire through a playful editorial narrative, using bold imagery and graphic elements to communicate its story.', aspectRatio: '9/16', videoUrl: '/assets/memoire-reel.mp4' },
      { id: 'ps-2', title: 'QUIRKY EDITORIAL BRAND FILM 02', description: 'Cinematic close-ups, quick cuts, playful camera movement, and expressive text overlays give the video a quirky, entertaining feel.', aspectRatio: '9/16', videoUrl: '/assets/brand-campaign-2.mp4' },
      { id: 'ps-3', title: 'PRABHU PRASAD ICE CREAM STORY 03', description: 'AI-illustrated visuals, gentle character animation, close-up product shots, and emotional storytelling create a nostalgic, homely feel.', aspectRatio: '9/16', videoUrl: '/assets/prabhuprasad-icecream.mp4' },
    ],
  },
  {
    id: 'social-content',
    title: 'SOCIAL CONTENT',
    subtitle: 'SHORT-FORM VIRAL REELS',
    description: 'Pacing, hook design, and audio integration built to stop the scroll.',
    icon: Film,
    projects: [
      { id: 'sc-1', title: 'POV: Found the best side hustle (Paid per reel) 💰', description: 'Hook design and luxury audio timing for feed retention.', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-1.jpg', url: 'https://www.instagram.com/reel/DTS2wbWk2Nk/?igsh=bTNtN2xvZXh2cTRq' },
      { id: 'sc-2', title: 'Earn Money Via Reels 💵', description: 'Creator-led video bringing aesthetic visual rhythm and audience engagement.', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-2.jpg', url: 'https://www.instagram.com/reel/DTDD_1rDKQP/?igsh=MXYya3dvaTFydGtrZw==' },
      { id: 'sc-3', title: 'To anyone who is scared to create content 📸', description: 'Platform-native hook design and dynamic editing structure for organic reach.', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-3.jpg', url: 'https://www.instagram.com/reel/DS4qmEQjJLn/?igsh=MTl3aHI1c2g1OTE=' },
      { id: 'sc-4', title: 'Ep 2 Indie Filmmaker Berozgar:( Making My Film 🎥', description: 'Aesthetic visual sequence with crisp audio timing and elevated pacing.', aspectRatio: '9/16', thumbnail: '/assets/reel-thumb-4.jpg', url: 'https://www.instagram.com/reel/DSCoQNZjCH7/?igsh=Y3ZjbDA5eDBmdmtt' },
    ],
  },
  {
    id: 'youtube',
    title: 'YOUTUBE VIDEOS',
    subtitle: 'CINEMATIC CHANNEL PRODUCTION',
    description: 'Longer stories, narrative essays, and branded YouTube episodes.',
    icon: Tv,
    projects: [
      { id: 'yt-1', title: '10th BOARD RESULT | Tears, Celebration & Heartbreaks', description: 'Complete YouTube production: strategy, hook design, and narrative flow.', aspectRatio: '16/9', thumbnail: '/assets/yt-thumb-1.jpg', url: 'https://youtu.be/UN3Nqzh-nrQ?si=glKRxw3dFc2vYPqM' },
      { id: 'yt-2', title: 'Messi Aur Billu Ki Kahani (PART 1)', description: 'Documentary-style YouTube episode following an idea from first thought to final execution.', aspectRatio: '16/9', thumbnail: '/assets/yt-thumb-2.jpg', url: 'https://www.youtube.com/watch?v=A-OdwRbfPNA' },
    ],
  },
  {
    id: 'food',
    title: 'FOOD',
    subtitle: 'GOURMET & CULINARY',
    description: 'Artisanal food, luxury desserts & culinary stories.',
    icon: Wand2,
    projects: [
      { id: 'food-1', title: 'ARTISANAL DESSERT FILM 01', description: 'Cinematic food cinematography highlighting textures, flavor profiles, and artisanal passion.', aspectRatio: '9/16', videoUrl: '/assets/food-1.mp4' },
      { id: 'food-3', title: 'VOICEOVER FOOD STORY 02', description: 'Narrative-driven culinary reel with rich audio score and voiceover storytelling.', aspectRatio: '9/16', videoUrl: '/assets/food-3.mp4' },
      { id: 'food-4', title: 'SEASONAL MENU SPECIAL 03', description: 'Visual feast capturing vibrant colors and sensory culinary experiences.', aspectRatio: '9/16', videoUrl: '/assets/food-4.mp4' },
      { id: 'food-5', title: 'CHOCO ICECREAM BAR 04', description: 'A sleek, minimal chocolate ice cream bar comes to life with a clean, premium visual style.', aspectRatio: '9/16', videoUrl: '/assets/choco-icecream-bar.mp4' },
    ],
  },
  {
    id: 'architecture',
    title: 'ARCHITECTURE & INTERIOR DESIGN',
    subtitle: 'SPATIAL & EDITORIAL',
    description: 'Spatial storytelling, architectural tours & luxury interiors.',
    icon: Compass,
    projects: [
      { id: 'arch-1', title: 'ARTSIGNIA ARCHITECTURAL STORY 01', description: 'Cinematic architectural documentary showcasing spatial innovation, refined lighting, and design excellence.', aspectRatio: '9/16', videoUrl: '/assets/architecture-1.mp4' },
      { id: 'arch-2', title: 'MODERN INTERIOR FEATURE 02', description: 'Elegant spatial camera movements showcasing light, luxury textures, and design.', aspectRatio: '9/16', videoUrl: '/assets/architecture-2.mp4' },
      { id: 'arch-3', title: 'CREATIVE DESIGN TOUR 03', description: 'Editorial tour exploring architectural rhythm, material harmony, and atmosphere.', aspectRatio: '9/16', videoUrl: '/assets/architecture-3.mp4' },
      { id: 'arch-4', title: 'GURU GOBIND MUSEUM ARCHITECTURE', description: 'Monumental architectural storytelling preserving heritage through modern lens.', aspectRatio: '9/16', videoUrl: '/assets/architecture-4.mp4' },
    ],
  },
  {
    id: 'jewelry',
    title: 'JEWELRY (INTERNATIONAL BRANDS)',
    subtitle: 'LUXURY & CRAFTSMANSHIP',
    description: 'High-end jewelry films, international brand stories & luxury craftsmanship.',
    icon: Sparkles,
    projects: [
      { id: 'jwl-1', title: 'FINE JEWELRY REEL 01', description: 'Macro reflections and diamond brilliance captured in high-contrast luxury grade.', aspectRatio: '9/16', videoUrl: '/assets/jewellery-1.mp4' },
      { id: 'jwl-2', title: 'LUXURY CRAFTSMANSHIP 02', description: 'Sensory storytelling highlighting gold textures, artisan details, and elegance.', aspectRatio: '9/16', videoUrl: '/assets/jewellery-2.mp4' },
      { id: 'jwl-3', title: 'INTERNATIONAL BRAND FEATURE 03', description: 'Editorial global brand film designed for international luxury campaigns.', aspectRatio: '9/16', videoUrl: '/assets/jewellery-3.mp4' },
      { id: 'jwl-4', title: 'SOD LUXURY JEWELRY REEL 04', description: 'Refined craftsmanship, elegant lighting, and high-contrast macro details for luxury jewelry campaigns.', aspectRatio: '9/16', videoUrl: '/assets/sod-jewellery-reel.mp4' },
    ],
  },
  {
    id: 'wellbeing',
    title: 'WELLBEING & ESSENTIAL OILS',
    subtitle: 'MIND, MOVEMENT & ESSENTIAL OILS',
    description: 'Holistic wellness, essential oils & mindful living films.',
    icon: Sparkles,
    projects: [
      { id: 'wb-5', title: 'MODERN WELLNESS COMPOSITION 01', description: 'Minimal compositions, controlled camera movement, and layered visuals create a polished, modern wellness aesthetic.', aspectRatio: '9/16', videoUrl: '/assets/wellbeing-august.mp4' },
      { id: 'wb-2', title: 'MINDFUL MOVEMENT REEL 02', description: 'Serene camera work and rhythmic pacing designed for wellness brand engagement.', aspectRatio: '9/16', videoUrl: '/assets/wellbeing-2.mp4' },
      { id: 'wb-3', title: 'HOLISTIC LIFESTYLE FILM 03', description: 'Warm editorial lighting and natural imagery focusing on vitality and balance.', aspectRatio: '9/16', videoUrl: '/assets/wellbeing-3.mp4' },
      { id: 'wb-4', title: 'VETIVER ESSENTIAL OIL STORY', description: 'Discover the timeless richness of Vetiver Oil, crafted for a deep, earthy and luxurious aroma.', aspectRatio: '9/16', videoUrl: '/assets/vetiver-essential-oil.mp4' },
      { id: 'wb-1', title: 'ELANURA WELLNESS STORY 05', description: 'Ambient visual essay celebrating holistic health, essential oils, and wellness.', aspectRatio: '9/16', videoUrl: '/assets/wellbeing-1.mp4' },
    ],
  },
  {
    id: 'animation',
    title: 'ANIMATION',
    subtitle: '3D MOTION & VFX',
    description: '3D motion design, visual effects & animated storytelling.',
    icon: Wand2,
    projects: [
      { id: 'anim-1', title: 'CREATIVE ANIMATION REEL 01', description: 'Dynamic 3D animation, fluid visual effects, and high-speed motion design.', aspectRatio: '9/16', videoUrl: '/assets/food-2.mp4' },
    ],
  },
];

export default function BrandCollaborationsSection() {
  const [activeCardIds, setActiveCardIds] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeFullscreenVideo, setActiveFullscreenVideo] = useState(null);
  const [modalScrollTop, setModalScrollTop] = useState(0);

  // Desktop Internal Carousel States
  const [desktopReelIndex, setDesktopReelIndex] = useState(0);
  const [desktopYtIndex, setDesktopYtIndex] = useState(0);

  const modalScrollContainerRef = useRef(null);

  const scrollModalLeft = () => {
    if (modalScrollContainerRef.current) {
      const container = modalScrollContainerRef.current;
      const firstCard = container.firstElementChild;
      const scrollDistance = firstCard ? firstCard.offsetWidth + 20 : 340;
      container.scrollTo({
        left: container.scrollLeft - scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  const scrollModalRight = () => {
    if (modalScrollContainerRef.current) {
      const container = modalScrollContainerRef.current;
      const firstCard = container.firstElementChild;
      const scrollDistance = firstCard ? firstCard.offsetWidth + 20 : 340;
      container.scrollTo({
        left: container.scrollLeft + scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenCategoryCard = (card) => {
    const currentY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    setModalScrollTop(currentY);
    setSelectedCard(card);
  };

  const [isYtHovered, setIsYtHovered] = useState(false);
  const ytHoverTimerRef = useRef(null);

  const handleYtMouseEnter = () => {
    if (ytHoverTimerRef.current) clearTimeout(ytHoverTimerRef.current);
    ytHoverTimerRef.current = setTimeout(() => {
      setIsYtHovered(true);
    }, 1000);
  };

  const handleYtMouseLeave = () => {
    if (ytHoverTimerRef.current) clearTimeout(ytHoverTimerRef.current);
    setIsYtHovered(false);
  };

  const desktopReelThumbnails = [
    '/assets/reel-thumb-1.jpg',
    '/assets/reel-thumb-2.jpg',
    '/assets/reel-thumb-3.jpg',
    '/assets/reel-thumb-4.jpg',
  ];

  const desktopReelTitles = [
    'POV: Found the best side hustle (Paid per reel) 💰',
    'Earn Money Via Reels 💵',
    'To anyone who is scared to create content 📸',
    'Ep 2 Indie Filmmaker Berozgar:( Making My Film 🎥',
  ];

  const desktopYtThumbnails = [
    '/assets/yt-thumb-1.jpg',
    '/assets/yt-thumb-2.jpg',
  ];

  const desktopYtMp4Previews = [
    '/assets/yt-preview-1.mp4',
    '/assets/yt-preview-2.mp4',
  ];

  const desktopYtTitles = [
    '10th BOARD RESULT | Tears, Celebration & Heartbreaks | Official Film',
    'Messi Aur Billu Ki Kahani (PART 1)',
  ];

  const desktopYtUrls = [
    'https://youtu.be/UN3Nqzh-nrQ?si=glKRxw3dFc2vYPqM',
    'https://www.youtube.com/watch?v=A-OdwRbfPNA',
  ];

  // Mobile Portfolio Video Categories (Extracted from ARII WEBSITE)
  const mobilePortfolioSections = [
    {
      id: 'problem-solving',
      eyebrowLabel: '01 / 06 ✦ STRATEGIC BRAND NARRATIVES',
      title: 'PROBLEM SOLVING AND CAMPAIGN VIDEOS',
      subhead: 'Playful editorial narratives, bold imagery & graphic campaign storytelling.',
      icon: Film,
      accentColor: '#E91E8C',
      projects: [
        { id: 'ps-1', numberLabel: '01 / 03', title: 'MEMOIRE EDITORIAL CAMPAIGN 01', description: 'A visually striking reel introducing Memoire through a playful editorial narrative, using bold imagery and graphic elements to communicate its story.', gradientBg: 'from-[#E91E8C]/40 via-[#1A0A2E] to-[#FFB3CB]/30', videoUrl: '/assets/memoire-reel.mp4' },
        { id: 'ps-2', numberLabel: '02 / 03', title: 'QUIRKY EDITORIAL BRAND FILM 02', description: 'Cinematic close-ups, quick cuts, playful camera movement, and expressive text overlays give the video a quirky, entertaining feel.', gradientBg: 'from-[#FFB3CB]/40 via-[#1A0A2E] to-[#E91E8C]/30', videoUrl: '/assets/brand-campaign-2.mp4' },
        { id: 'ps-3', numberLabel: '03 / 03', title: 'PRABHU PRASAD ICE CREAM STORY 03', description: 'AI-illustrated visuals, gentle character animation, close-up product shots, and emotional storytelling create a nostalgic, homely feel.', gradientBg: 'from-[#E91E8C]/40 via-[#1A0A2E] to-[#FFB3CB]/30', videoUrl: '/assets/prabhuprasad-icecream.mp4' },
      ],
    },
    {
      id: 'food',
      eyebrowLabel: '01 / 05 ✦ GOURMET & CULINARY',
      title: 'FOOD',
      subhead: 'Artisanal food, luxury desserts & culinary stories.',
      icon: Wand2,
      accentColor: '#FF9BD2',
      projects: [
        { id: 'food-1', numberLabel: '01 / 04', title: 'ARTISANAL DESSERT FILM 01', description: 'Cinematic food cinematography highlighting textures, flavor profiles, and artisanal passion.', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#FFB6E6]/30', videoUrl: '/assets/food-1.mp4' },
        { id: 'food-3', numberLabel: '02 / 04', title: 'VOICEOVER FOOD STORY 02', description: 'Narrative-driven culinary reel with rich audio score and voiceover storytelling.', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/food-3.mp4' },
        { id: 'food-4', numberLabel: '03 / 04', title: 'SEASONAL MENU SPECIAL 03', description: 'Visual feast capturing vibrant colors and sensory culinary experiences.', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/food-4.mp4' },
        { id: 'food-5', numberLabel: '04 / 04', title: 'CHOCO ICECREAM BAR 04', description: 'A sleek, minimal chocolate ice cream bar comes to life with a clean, premium visual style.', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/choco-icecream-bar.mp4' },
      ],
    },
    {
      id: 'architecture',
      eyebrowLabel: '02 / 05 ✦ SPATIAL & EDITORIAL',
      title: 'ARCHITECTURE & INTERIOR DESIGN',
      subhead: 'Spatial storytelling, architectural tours & luxury interiors.',
      icon: Compass,
      accentColor: '#FFB6E6',
      projects: [
        { id: 'arch-1', numberLabel: '01 / 04', title: 'ARTSIGNIA ARCHITECTURAL STORY 01', description: 'Cinematic architectural documentary showcasing spatial innovation, refined lighting, and design excellence.', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/architecture-1.mp4' },
        { id: 'arch-2', numberLabel: '02 / 04', title: 'MODERN INTERIOR FEATURE 02', description: 'Elegant spatial camera movements showcasing light, luxury textures, and design.', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/architecture-2.mp4' },
        { id: 'arch-3', numberLabel: '03 / 04', title: 'CREATIVE DESIGN TOUR 03', description: 'Editorial tour exploring architectural rhythm, material harmony, and atmosphere.', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/architecture-3.mp4' },
        { id: 'arch-4', numberLabel: '04 / 04', title: 'GURU GOBIND MUSEUM ARCHITECTURE', description: 'Monumental architectural storytelling preserving heritage through modern lens.', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/architecture-4.mp4' },
      ],
    },
    {
      id: 'jewellery',
      eyebrowLabel: '03 / 05 ✦ LUXURY & ELEGANCE',
      title: 'JEWELLERY (INTERNATIONAL BRANDS)',
      subhead: 'High jewelry visual storytelling & international campaigns.',
      icon: Heart,
      accentColor: '#FF9BD2',
      projects: [
        { id: 'jewel-1', numberLabel: '01 / 04', title: 'FINE JEWELRY REEL 01', description: 'Macro reflections and diamond brilliance captured in high-contrast luxury grade.', gradientBg: 'from-[#FF9BD2]/40 via-[#1F0A33] to-[#B388FF]/30', videoUrl: '/assets/jewellery-1.mp4' },
        { id: 'jewel-2', numberLabel: '02 / 04', title: 'LUXURY CRAFTSMANSHIP 02', description: 'Sensory storytelling highlighting gold textures, artisan details, and elegance.', gradientBg: 'from-[#B388FF]/40 via-[#1F0A33] to-[#FFB6E6]/30', videoUrl: '/assets/jewellery-2.mp4' },
        { id: 'jewel-3', numberLabel: '03 / 04', title: 'INTERNATIONAL BRAND FEATURE 03', description: 'Editorial global brand film designed for international luxury campaigns.', gradientBg: 'from-[#FFB6E6]/40 via-[#1F0A33] to-[#FF9BD2]/30', videoUrl: '/assets/jewellery-3.mp4' },
        { id: 'jewel-4', numberLabel: '04 / 04', title: 'SOD LUXURY JEWELRY REEL 04', description: 'Refined craftsmanship, elegant lighting, and high-contrast macro details for luxury jewelry campaigns.', gradientBg: 'from-[#FF9BD2]/40 via-[#1F0A33] to-[#B388FF]/30', videoUrl: '/assets/sod-jewellery-reel.mp4' },
      ],
    },
    {
      id: 'wellbeing',
      eyebrowLabel: '04 / 05 ✦ MIND, MOVEMENT & ESSENTIAL OILS',
      title: 'WELLBEING & ESSENTIAL OILS',
      subhead: 'Holistic wellness, essential oils & mindful living films.',
      icon: Sparkles,
      accentColor: '#FF9BD2',
      projects: [
        { id: 'wb-5', numberLabel: '01 / 05', title: 'MODERN WELLNESS COMPOSITION 01', description: 'Minimal compositions, controlled camera movement, and layered visuals create a polished, modern wellness aesthetic.', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#B388FF]/30', videoUrl: '/assets/wellbeing-august.mp4' },
        { id: 'wb-2', numberLabel: '02 / 05', title: 'MINDFUL MOVEMENT REEL 02', description: 'Serene camera work and rhythmic pacing designed for wellness brand engagement.', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FFB6E6]/30', videoUrl: '/assets/wellbeing-2.mp4' },
        { id: 'wb-3', numberLabel: '03 / 05', title: 'HOLISTIC LIFESTYLE FILM 03', description: 'Warm editorial lighting and natural imagery focusing on vitality and balance.', gradientBg: 'from-[#FFB6E6]/40 via-[#1A0A2E] to-[#6D4AFF]/30', videoUrl: '/assets/wellbeing-3.mp4' },
        { id: 'wb-4', numberLabel: '04 / 05', title: 'VETIVER ESSENTIAL OIL STORY', description: 'Discover the timeless richness of Vetiver Oil, crafted for a deep, earthy and luxurious aroma.', gradientBg: 'from-[#6D4AFF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/vetiver-essential-oil.mp4' },
        { id: 'wb-1', numberLabel: '05 / 05', title: 'ELANURA WELLNESS STORY 05', description: 'Ambient visual essay celebrating holistic health, essential oils, and wellness.', gradientBg: 'from-[#FF9BD2]/40 via-[#1A0A2E] to-[#B388FF]/30', videoUrl: '/assets/wellbeing-1.mp4' },
      ],
    },
    {
      id: 'animation',
      eyebrowLabel: '05 / 05 ✦ MOTION & ANIMATION',
      title: 'ANIMATION',
      subhead: '3D motion design, visual effects & animated storytelling.',
      icon: Wand2,
      accentColor: '#FFB6E6',
      projects: [
        { id: 'anim-1', numberLabel: '01 / 01', title: 'CREATIVE ANIMATION REEL 01', description: 'Dynamic 3D animation, fluid visual effects, and high-speed motion design.', gradientBg: 'from-[#B388FF]/40 via-[#1A0A2E] to-[#FF9BD2]/30', videoUrl: '/assets/food-2.mp4' },
      ],
    },
  ];

  const handleCarouselScroll = (sectionId, e) => {
    const target = e.currentTarget;
    const scrollLeft = target.scrollLeft;
    const cardWidth = target.clientWidth;
    const newIdx = Math.max(0, Math.round(scrollLeft / cardWidth));

    if (activeCardIds[sectionId] !== newIdx) {
      setActiveCardIds((prev) => ({
        ...prev,
        [sectionId]: newIdx,
      }));
    }
  };

  return (
    <section id="works" className="bg-[#0A0A0A] scroll-mt-6 py-12 sm:py-24 md:py-28 relative overflow-x-hidden w-full max-w-full">
      
      {/* Background ambient glowing halos */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-96 h-96 bg-[#E91E8C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 bg-[#FFB3CB]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-8 sm:mb-14 px-5 sm:px-8 md:px-10 text-center">
        <h2
          className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          BRAND CONTENT
        </h2>
        <p className="hidden md:block text-xs uppercase tracking-widest text-[#F5F0EB]/40 mt-3">
          Collaborations · Campaigns · Proven Results
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 💻 1. DESKTOP ONLY: BENTO GRID CATEGORIES */}
      {/* ========================================================================= */}
      <div className="hidden lg:grid w-full max-w-[1440px] mx-auto grid-cols-12 gap-6 relative z-20 px-6 mb-16">
        
        {/* CARD 01 — PROBLEM SOLVING AND CAMPAIGN VIDEOS */}
        <div
          onClick={() => handleOpenCategoryCard(CATEGORY_CARDS[0])}
          className="
            relative col-span-12 row-span-1 min-h-[300px] lg:min-h-[360px] rounded-[28px] overflow-hidden p-6 sm:p-8
            border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#E91E8C]/70 hover:shadow-[0_0_40px_rgba(233,30,140,0.4)] hover:-translate-y-1 hover:scale-[1.002]
            transition-all duration-300 flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="absolute inset-0 z-0">
            <video
              src="/assets/memoire-reel.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-65 group-hover:opacity-85 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12071B]/95 via-[#12071B]/60 to-black/30 z-10" />
          </div>

          <div className="relative flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              <Film className="w-3.5 h-3.5 text-[#E91E8C]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                FEATURED CAMPAIGN
              </span>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/15 border border-white/25 text-[#FFF7FF] backdrop-blur-md group-hover:bg-[#E91E8C] group-hover:text-[#100719] flex items-center justify-center transition-colors shadow-lg">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="relative space-y-1.5 z-30 max-w-3xl pt-8">
            <span className="text-xs font-mono font-bold text-[#E91E8C] uppercase tracking-widest block">
              NEW ✦ STRATEGIC NARRATIVE
            </span>
            <h3 className="font-display font-black text-2xl lg:text-3xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#FFB3CB] transition-colors drop-shadow-md">
              PROBLEM SOLVING AND CAMPAIGN VIDEOS
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF7FF]/90 line-clamp-2 leading-relaxed drop-shadow-md">
              A visually striking reel introducing Memoire through a playful editorial narrative, using bold imagery and graphic elements to communicate its story.
            </p>
          </div>
        </div>

        {/* CARD 02 — FOOD */}
        <div
          onClick={() => handleOpenCategoryCard(CATEGORY_CARDS[3])}
          className="
            relative col-span-6 row-span-1 min-h-[250px] lg:min-h-[320px] rounded-[28px] overflow-hidden p-6
            border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#FF9BD2]/70 hover:shadow-[0_0_35px_rgba(255,155,210,0.35)] hover:-translate-y-1 hover:scale-[1.005]
            transition-all duration-300 flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/food_bento_bg.jpg"
              alt="Food Category Background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12071B]/90 via-[#12071B]/35 to-black/20 z-10" />
          </div>

          <div className="relative flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              <Wand2 className="w-3.5 h-3.5 text-[#FF9BD2]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                GOURMET & CULINARY
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/15 border border-white/25 text-[#FFF7FF] backdrop-blur-md group-hover:bg-[#FF9BD2] group-hover:text-[#100719] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="relative space-y-1 z-30 pt-4">
            <h3 className="font-display font-black text-2xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#FF9BD2] transition-colors drop-shadow-md">
              FOOD
            </h3>
            <p className="text-xs text-[#FFF7FF]/90 line-clamp-2 drop-shadow-md">
              Artisanal food, luxury desserts & culinary stories.
            </p>
          </div>
        </div>

        {/* CARD 03 — ARCHITECTURE & INTERIOR DESIGN */}
        <div
          onClick={() => handleOpenCategoryCard(CATEGORY_CARDS[4])}
          className="
            relative col-span-6 row-span-1 min-h-[250px] lg:min-h-[320px] rounded-[28px] overflow-hidden p-6
            border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#C4A1FF]/70 hover:shadow-[0_0_35px_rgba(196,161,255,0.35)] hover:-translate-y-1 hover:scale-[1.005]
            transition-all duration-300 flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/architecture_bento_bg.jpg"
              alt="Architecture & Interior Design Category Background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12071B]/90 via-[#12071B]/35 to-black/20 z-10" />
          </div>

          <div className="relative flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-[#C4A1FF]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                SPATIAL & EDITORIAL
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/15 border border-white/25 text-[#FFF7FF] backdrop-blur-md group-hover:bg-[#C4A1FF] group-hover:text-[#100719] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="relative space-y-1 z-30 pt-4">
            <h3 className="font-display font-black text-2xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#C4A1FF] transition-colors drop-shadow-md">
              ARCHITECTURE & INTERIOR DESIGN
            </h3>
            <p className="text-xs text-[#FFF7FF]/90 line-clamp-2 drop-shadow-md">
              Spatial storytelling, architectural tours & luxury interiors.
            </p>
          </div>
        </div>

        {/* CARD 04 — JEWELRY */}
        <div
          onClick={() => handleOpenCategoryCard(CATEGORY_CARDS[5])}
          className="
            relative col-span-4 row-span-1 min-h-[200px] lg:min-h-[240px] rounded-[28px] overflow-hidden p-5
            border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#FF9BD2]/70 hover:shadow-[0_0_35px_rgba(255,155,210,0.35)] hover:-translate-y-1 hover:scale-[1.005]
            transition-all duration-300 flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/jewelry_bento_bg.jpg"
              alt="Jewelry Category Background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12071B]/90 via-[#12071B]/35 to-black/20 z-10" />
          </div>

          <div className="relative flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9BD2]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                LUXURY & CRAFTSMANSHIP
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/15 border border-white/25 text-[#FFF7FF] backdrop-blur-md group-hover:bg-[#FF9BD2] group-hover:text-[#100719] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="relative space-y-0.5 z-30 pt-3">
            <h3 className="font-display font-black text-xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#FF9BD2] transition-colors drop-shadow-md">
              JEWELRY (INTERNATIONAL BRANDS)
            </h3>
            <p className="text-[11px] text-[#FFF7FF]/90 line-clamp-2 drop-shadow-md">
              High-end jewelry films & brand stories.
            </p>
          </div>
        </div>

        {/* CARD 05 — WELLBEING & ESSENTIAL OILS */}
        <div
          onClick={() => handleOpenCategoryCard(CATEGORY_CARDS[6])}
          className="
            relative col-span-4 row-span-1 min-h-[200px] lg:min-h-[240px] rounded-[28px] overflow-hidden p-5
            border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#B388FF]/70 hover:shadow-[0_0_35px_rgba(179,136,255,0.35)] hover:-translate-y-1 hover:scale-[1.005]
            transition-all duration-300 flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/wellbeing_bento_bg.jpg"
              alt="Wellbeing & Essential Oils Category Background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12071B]/90 via-[#12071B]/35 to-black/20 z-10" />
          </div>

          <div className="relative flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#B388FF]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                MIND, MOVEMENT & ESSENTIAL OILS
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/15 border border-white/25 text-[#FFF7FF] backdrop-blur-md group-hover:bg-[#B388FF] group-hover:text-[#100719] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="relative space-y-0.5 z-30 pt-3">
            <h3 className="font-display font-black text-xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#B388FF] transition-colors drop-shadow-md">
              WELLBEING & ESSENTIAL OILS
            </h3>
            <p className="text-[11px] text-[#FFF7FF]/90 line-clamp-2 drop-shadow-md">
              Holistic wellness, essential oils & mindful living films.
            </p>
          </div>
        </div>

        {/* CARD 06 — ANIMATION */}
        <div
          onClick={() => handleOpenCategoryCard(CATEGORY_CARDS[7])}
          className="
            relative col-span-4 row-span-1 min-h-[200px] lg:min-h-[240px] rounded-[28px] overflow-hidden p-5
            border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]
            hover:border-[#FFB6E6]/70 hover:shadow-[0_0_35px_rgba(255,182,230,0.35)] hover:-translate-y-1 hover:scale-[1.005]
            transition-all duration-300 flex flex-col justify-between cursor-pointer group gpu-layer
          "
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/animation_bento_bg.jpg"
              alt="Animation Category Background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12071B]/90 via-[#12071B]/35 to-black/20 z-10" />
          </div>

          <div className="relative flex items-center justify-between z-30">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              <Wand2 className="w-3.5 h-3.5 text-[#FFB6E6]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFF7FF] uppercase">
                3D MOTION & VFX
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/15 border border-white/25 text-[#FFF7FF] backdrop-blur-md group-hover:bg-[#FFB6E6] group-hover:text-[#100719] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="relative space-y-0.5 z-30 pt-3">
            <h3 className="font-display font-black text-xl text-[#FFF7FF] tracking-tight uppercase group-hover:text-[#FFB6E6] transition-colors drop-shadow-md">
              ANIMATION
            </h3>
            <p className="text-[11px] text-[#FFF7FF]/90 line-clamp-2 drop-shadow-md">
              3D motion design & animated storytelling.
            </p>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 📱 2. MOBILE PHONE ONLY: SINGLE CARD PER SWIPE VIDEO CAROUSELS */}
      {/* ========================================================================= */}
      <div className="block lg:hidden w-full max-w-full overflow-x-hidden px-4 space-y-10 mb-6">
        {mobilePortfolioSections.map((section) => {
          const Icon = section.icon;

          return (
            <div key={section.id} className="w-full space-y-4">
              
              {/* SUBSECTION HEADER */}
              <div className="w-full flex flex-col justify-between gap-1 border-b border-white/10 pb-3">
                <h4 className="font-black text-xl text-[#FFF7FF] tracking-tight uppercase flex items-center gap-2">
                  <Icon className="w-4.5 h-4.5" style={{ color: section.accentColor }} />
                  {section.title}
                </h4>
                <p className="text-xs font-serif italic text-white/60">
                  {section.subhead}
                </p>
              </div>

              {/* HORIZONTAL SWIPE CAROUSEL (EXACTLY 1 CARD PER SWIPE) */}
              <div
                onScroll={(e) => handleCarouselScroll(section.id, e)}
                className="w-full flex flex-row flex-nowrap items-stretch overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-0"
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                  touchAction: 'pan-x pan-y',
                }}
              >
                {section.projects.map((proj) => {
                  return (
                    <div
                      key={proj.id}
                      onClick={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.muted = false;

                          const handleExitFullscreen = () => {
                            video.muted = true;
                            video.removeEventListener('webkitendfullscreen', handleExitFullscreen);
                            document.removeEventListener('fullscreenchange', handleExitFullscreen);
                          };

                          video.addEventListener('webkitendfullscreen', handleExitFullscreen);
                          document.addEventListener('fullscreenchange', () => {
                            if (!document.fullscreenElement) {
                              handleExitFullscreen();
                            }
                          });

                          if (video.requestFullscreen) {
                            video.requestFullscreen().catch(() => {});
                          } else if (video.webkitEnterFullscreen) {
                            video.webkitEnterFullscreen();
                          }
                        }
                      }}
                      className="w-full shrink-0 snap-center flex flex-col justify-between space-y-3 px-1 cursor-pointer"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <div
                        className={`
                          relative w-full max-w-[310px] mx-auto rounded-[24px] overflow-hidden
                          border border-white/15 bg-gradient-to-br ${proj.gradientBg}
                          shadow-[0_16px_45px_rgba(0,0,0,0.6)]
                          aspect-[9/16] transition-all duration-300
                        `}
                      >
                        <video
                          src={proj.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover rounded-[24px]"
                        />

                        <div className="absolute top-3 left-3 z-20 pointer-events-none">
                          <span className="px-2.5 py-0.5 rounded-full bg-black/70 border border-white/20 font-mono text-[11px] font-bold text-[#FF9BD2]">
                            {proj.numberLabel}
                          </span>
                        </div>

                        {proj.id !== 'ps-2' && (
                          <div className="absolute top-3 right-3 z-20 pointer-events-none px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#FFB3CB] text-white font-mono text-[10px] font-black tracking-widest shadow-lg">
                            AI
                          </div>
                        )}

                        <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                          <span className="font-bold text-xs text-white leading-snug line-clamp-1">
                            {proj.title}
                          </span>
                        </div>

                        <div className="absolute inset-0 z-10 pointer-events-none rounded-[24px] shadow-[inset_0_0_25px_rgba(0,0,0,0.75)]" />
                      </div>

                      <div className="space-y-1 px-1 text-center max-w-[310px] mx-auto">
                        <h4 className="font-bold text-sm text-white tracking-tight uppercase">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-normal">
                          {proj.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 3. DESKTOP INTERACTIVE ARCHIVE SHOWCASE MODAL */}
      {/* ========================================================================= */}
      {typeof document !== 'undefined' && selectedCard && createPortal(
        <div
          style={{
            position: 'absolute',
            top: `${modalScrollTop}px`,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999999999,
          }}
          className="flex items-center justify-center p-4 sm:p-6 select-none overflow-hidden"
        >
          <div
            onClick={() => setSelectedCard(null)}
            className="absolute inset-0 bg-black/85 backdrop-blur-2xl z-0 cursor-pointer transition-opacity duration-300"
          />

          <div
            className={`
              relative z-10 w-full ${selectedCard.projects.length > 3 ? 'max-w-6xl' : 'max-w-5xl'} max-h-[96vh] rounded-[36px]
              border border-[#FF9BD2]/40 bg-[#140824] p-5 sm:p-7
              shadow-[0_0_90px_rgba(255,155,210,0.45)] flex flex-col justify-between
              overflow-y-auto selection:bg-[#FF9BD2] selection:text-[#100719] transition-all duration-300
            `}
          >
            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-[#FFF7FF] hover:bg-[#FF9BD2] hover:text-[#100719] hover:border-[#FF9BD2] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1.5 border-b border-white/15 pb-4 pr-12">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF9BD2] uppercase tracking-widest">
                <selectedCard.icon className="w-4 h-4" />
                <span>{selectedCard.subtitle}</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#FFF7FF] tracking-tight uppercase">
                {selectedCard.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF7FF]/75 max-w-2xl">
                {selectedCard.description}
              </p>
            </div>

            <div className="relative w-full py-4">
              {selectedCard.projects.length > 3 && (
                <button
                  type="button"
                  onClick={scrollModalLeft}
                  aria-label="Scroll left"
                  className="
                    absolute left-0 top-1/2 -translate-y-1/2 z-30
                    w-11 h-11 rounded-full bg-black/80 border border-white/30 text-white
                    hover:bg-[#FF9BD2] hover:text-[#100719] hover:border-[#FF9BD2]
                    shadow-[0_0_35px_rgba(255,155,210,0.5)] backdrop-blur-xl
                    flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95
                    -translate-x-2 sm:-translate-x-4
                  "
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              <div
                ref={modalScrollContainerRef}
                style={{ scrollBehavior: 'smooth' }}
                className={
                  selectedCard.projects.length > 3
                    ? "flex flex-row overflow-x-auto gap-5 pb-1 no-scrollbar scroll-smooth snap-x items-stretch w-full px-1"
                    : "grid grid-cols-1 md:grid-cols-3 gap-5 w-full items-stretch"
                }
              >
              {selectedCard.projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className={
                    selectedCard.projects.length > 3
                      ? "flex-none w-[270px] sm:w-[300px] md:w-[320px] rounded-[24px] border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] p-3.5 sm:p-4 flex flex-col justify-between space-y-3 hover:border-[#FF9BD2]/60 hover:shadow-[0_15px_40px_rgba(255,155,210,0.25)] transition-all duration-300 group/card snap-start"
                      : "w-full rounded-[24px] border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] p-3.5 sm:p-4 flex flex-col justify-between space-y-3 hover:border-[#FF9BD2]/60 hover:shadow-[0_15px_40px_rgba(255,155,210,0.25)] transition-all duration-300 group/card"
                  }
                >
                  <div
                    onClick={() => {
                      setActiveFullscreenVideo({
                        url: proj.videoUrl || proj.url || '/assets/food-1.mp4',
                        title: proj.title,
                      });
                    }}
                    className="relative w-full aspect-[9/16] max-h-[260px] sm:max-h-[280px] rounded-[18px] overflow-hidden border border-white/15 bg-black shadow-lg cursor-pointer group/vid"
                  >
                    {proj.videoUrl ? (
                      <video
                        src={proj.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-[18px]"
                      />
                    ) : proj.thumbnail ? (
                      <img src={proj.thumbnail} alt={proj.title} className="w-full h-full object-cover rounded-[18px]" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#FF9BD2]/40 to-[#1A0A2E] flex items-center justify-center" />
                    )}

                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover/vid:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full bg-[#FF9BD2] text-[#100719] shadow-[0_0_30px_rgba(255,155,210,0.8)] flex items-center justify-center transform scale-90 group-hover/vid:scale-100 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/65 border border-white/20 font-mono text-[11px] font-bold text-[#FF9BD2] backdrop-blur-md">
                        0{idx + 1} / 0{selectedCard.projects.length}
                      </span>
                    </div>

                    {proj.id !== 'ps-2' && (
                      <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#FFB3CB] text-white font-mono text-[10px] font-black tracking-widest shadow-lg backdrop-blur-md">
                        AI
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-[#FFF7FF] leading-snug group-hover/card:text-[#FF9BD2] transition-colors line-clamp-1">
                        {proj.title}
                      </h4>
                      <p className="text-[11px] text-[#FFF7FF]/70 line-clamp-2 mt-0.5 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveFullscreenVideo({
                          url: proj.videoUrl || proj.url || '/assets/food-1.mp4',
                          title: proj.title,
                        });
                      }}
                      className="
                        w-full py-2.5 rounded-full bg-[#FF9BD2] text-[#100719] border border-[#FF9BD2]
                        font-mono font-bold text-xs uppercase tracking-widest
                        hover:bg-[#FFF7FF] hover:border-[#FFF7FF] hover:scale-[1.02]
                        shadow-[0_0_25px_rgba(255,155,210,0.5)] transition-all duration-300
                        flex items-center justify-center gap-2 cursor-pointer mt-1 group/play
                      "
                    >
                      <div className="w-4 h-4 rounded-full bg-[#100719] text-[#FF9BD2] flex items-center justify-center group-hover/play:scale-110 transition-transform">
                        <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                      </div>
                      <span>PLAY FULLSCREEN</span>
                    </button>
                  </div>
                </div>
              ))}
              </div>

              {selectedCard.projects.length > 3 && (
                <button
                  type="button"
                  onClick={scrollModalRight}
                  aria-label="Scroll right"
                  className="
                    absolute right-0 top-1/2 -translate-y-1/2 z-30
                    w-11 h-11 rounded-full bg-black/80 border border-white/30 text-white
                    hover:bg-[#FF9BD2] hover:text-[#100719] hover:border-[#FF9BD2]
                    shadow-[0_0_35px_rgba(255,155,210,0.5)] backdrop-blur-xl
                    flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95
                    translate-x-2 sm:translate-x-4
                  "
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center justify-between">
              <span className="text-xs font-mono text-white/50 uppercase">
                ARI CINEMATIC ARCHIVE ✦ 2026
              </span>

              <a
                href="https://www.instagram.com/ariimakesfilms?igsh=a3JmMWJsM3duczEy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedCard(null)}
                className="px-6 py-2.5 rounded-full bg-[#FF9BD2] text-[#100719] font-mono font-bold text-xs hover:bg-[#FFF7FF] transition-all shadow-[0_0_20px_rgba(255,155,210,0.5)] cursor-pointer"
              >
                START A PROJECT WITH ARI ✦
              </a>
            </div>

          </div>
        </div>,
        document.body
      )}

      {/* ========================================================================= */}
      {/* 4. DESKTOP FULLSCREEN VIDEO THEATER OVERLAY */}
      {/* ========================================================================= */}
      {typeof document !== 'undefined' && activeFullscreenVideo && createPortal(
        <div
          style={{
            position: 'absolute',
            top: `${modalScrollTop}px`,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999999999,
          }}
          className="flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-3xl select-none"
        >
          <div
            onClick={() => setActiveFullscreenVideo(null)}
            className="absolute inset-0 bg-black/90 cursor-pointer z-0"
          />

          <div
            className="
              relative z-10 w-full max-w-5xl rounded-3xl overflow-hidden
              border border-[#FF9BD2]/50 bg-black shadow-[0_0_120px_rgba(255,155,210,0.5)]
              flex flex-col items-center justify-center transition-all duration-300
            "
          >
            <button
              type="button"
              onClick={() => setActiveFullscreenVideo(null)}
              aria-label="Close fullscreen video"
              className="
                absolute top-4 right-4 z-50 flex h-11 w-11 items-center justify-center
                rounded-full bg-black/70 border border-white/20 text-white
                hover:bg-[#FF9BD2] hover:text-[#100719] hover:border-[#FF9BD2]
                transition-all duration-300 cursor-pointer shadow-2xl
              "
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full aspect-[9/16] max-h-[80vh] flex items-center justify-center bg-black">
              <video
                src={activeFullscreenVideo.url}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>

            <div className="w-full p-4 sm:p-5 bg-gradient-to-t from-[#140824] via-[#140824]/90 to-transparent border-t border-white/15 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#FF9BD2] font-bold uppercase tracking-widest block">
                  NOW PLAYING FULLSCREEN
                </span>
                <h4 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight">
                  {activeFullscreenVideo.title}
                </h4>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
