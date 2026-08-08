import React, { useState, useRef } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown, Volume2, VolumeX, ExternalLink, X } from 'lucide-react';
import { YoutubeIcon } from './Icons';

export default function YouTubeSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideoId, setHoveredVideoId] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Hover timeout ref for smooth 200ms hover intent
  const hoverTimeoutRef = useRef(null);

  const videos = [
    {
      id: 'video-1',
      title: 'How I Built a 17K+ LinkedIn Audience in 12 Months (Full Blueprint)',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
      youtubeId: 'dQw4w9WgXcQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '14:20',
      views: '142K views',
      rating: 'U/A 16+',
      quality: 'HD',
      top10: true,
      tags: ['LinkedIn', 'Blueprint', 'Strategy'],
    },
    {
      id: 'video-2',
      title: 'The $5,000 Ghostwriting Masterclass: Hooks, Positioning & Client Outreach',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      youtubeId: 'L_LUpnjgPso',
      youtubeUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
      duration: '22:15',
      views: '98K views',
      rating: 'U/A 13+',
      quality: '4K',
      top10: false,
      tags: ['Ghostwriting', 'Positioning', 'Outreach'],
    },
    {
      id: 'video-3',
      title: 'Day in the Life of a 21-Year-Old Personal Branding Strategist',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      youtubeId: '3JZ_D3ELwOQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      duration: '18:45',
      views: '210K views',
      rating: 'U/A 16+',
      quality: 'HD',
      top10: true,
      tags: ['Vlog', 'Workflow', 'Daily Routine'],
    },
  ];

  const handleMouseEnter = (id) => {
    // Only trigger hover state on desktop screens (width >= 768px)
    if (window.innerWidth < 768) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsVideoLoaded(false);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredVideoId(id);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredVideoId(null);
    setIsVideoLoaded(false);
  };

  const handleCardClick = (video) => {
    // Tapping video on phone opens modal directly with video & full info visible without scrolling
    setSelectedVideo(video);
  };

  return (
    <section id="youtube" className="bg-[#0A0A0A] scroll-mt-6 py-20 sm:py-28 md:py-32 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E91E8C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold text-red-500 uppercase tracking-widest mb-4">
            <YoutubeIcon className="w-4 h-4 text-red-500" />
            Netflix Style Showcase
          </div>
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Featured Videos
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#F5F0EB]/40 mt-3">
            Swipe left & right on phone · Tap video to watch & see full info
          </p>
        </div>

        {/* Netflix Horizontal Touch Swipe Row on Mobile & 3-Column Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 sm:gap-6 md:grid md:grid-cols-3 md:gap-8 relative z-10 pb-8 pt-4 px-4 sm:px-0 -mx-4 sm:mx-0">
          {videos.map((video) => {
            const isHovered = hoveredVideoId === video.id;

            return (
              /* Fixed 16:9 Aspect Ratio Container */
              <div
                key={video.id}
                onClick={() => handleCardClick(video)}
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={handleMouseLeave}
                className="relative aspect-video w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink cursor-pointer select-none"
              >
                {/* 1. Default Clean Static Thumbnail (Fixed in grid/carousel flow) */}
                <div className="w-full h-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg relative group">
                  {video.top10 && (
                    <div className="absolute top-2 left-2 z-20 bg-red-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-md tracking-wider">
                      TOP 10
                    </div>
                  )}

                  {/* Mobile Tap Play Badge Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 md:hidden bg-black/30">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* 2. Desktop Absolute Floating Netflix Hover Overlay */}
                <div
                  className={`hidden md:block absolute top-0 left-0 right-0 z-50 rounded-2xl overflow-hidden bg-[#181818] border border-red-600 shadow-[0_30px_60px_-10px_rgba(229,9,20,0.75)] transform-gpu will-change-transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isHovered
                      ? 'opacity-100 scale-115 -translate-y-5 pointer-events-auto shadow-[0_40px_80px_rgba(229,9,20,0.5)]'
                      : 'opacity-0 scale-100 translate-y-0 pointer-events-none'
                  }`}
                  style={{ minWidth: '100%' }}
                >
                  {/* Top Video Preview Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    {video.top10 && (
                      <div className="absolute top-2 left-2 z-20 bg-red-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-md tracking-wider">
                        TOP 10
                      </div>
                    )}

                    {/* Mute Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      aria-label="Toggle Mute"
                      className="absolute bottom-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 border border-white/30 text-white backdrop-blur-md transition-transform hover:scale-110 cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-red-500" />}
                    </button>

                    {/* Background Static Thumbnail Poster */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        isVideoLoaded ? 'opacity-0' : 'opacity-100'
                      }`}
                    />

                    {/* Auto-Playing Muted Video Preview */}
                    {isHovered && (
                      <div className="w-full h-full relative pointer-events-none">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&loop=1&playlist=${video.youtubeId}&start=10`}
                          title={video.title}
                          onLoad={() => setIsVideoLoaded(true)}
                          allow="autoplay; encrypted-media"
                          className="w-full h-[140%] -translate-y-[15%] border-0 object-cover scale-125 transition-opacity duration-700"
                        />
                      </div>
                    )}
                  </div>

                  {/* Netflix Action Controls & Metadata */}
                  <div className="p-4 sm:p-5 flex flex-col gap-3 bg-[#181818]">
                    
                    {/* Row 1: Action Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <a
                          href={video.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Play Video on YouTube"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Play className="w-4 h-4 fill-black ml-0.5" />
                        </a>

                        <button
                          type="button"
                          aria-label="Add to list"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white/80 hover:border-white hover:text-white hover:scale-110 transition-all cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          aria-label="Like video"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white/80 hover:border-white hover:text-white hover:scale-110 transition-all cursor-pointer"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(video);
                        }}
                        aria-label="More Info"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white/80 hover:border-white hover:text-white hover:scale-110 transition-all cursor-pointer"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Row 2: Metadata Badges */}
                    <div className="flex items-center gap-2 text-xs text-white/70 font-semibold pt-1">
                      <span className="rounded border border-white/30 px-1.5 py-0.5 text-[10px] text-white">
                        {video.rating}
                      </span>
                      <span className="rounded border border-white/30 px-1 py-0.5 text-[10px] text-white">
                        {video.quality}
                      </span>
                      <span className="text-[#F5F0EB]/60 text-[11px]">
                        {video.duration}
                      </span>
                      <span className="text-[#F5F0EB]/40 text-[11px] ml-auto">
                        {video.views}
                      </span>
                    </div>

                    {/* Row 3: Title & Tags */}
                    <div className="space-y-1">
                      <h3 className="font-bold text-xs sm:text-sm text-white line-clamp-1">
                        {video.title}
                      </h3>
                      <p className="text-[11px] text-white/50 font-medium">
                        {video.tags.join(' • ')}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-6 sm:mt-14 text-center">
          <a
            href="https://www.youtube.com/@thekamnabhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/10 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-red-500 transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] cursor-pointer"
          >
            <YoutubeIcon className="w-4 h-4" />
            Subscribe on YouTube
          </a>
        </div>

      </div>

      {/* 🍿 Video Info / Player Modal (Centered on Screen, 0 Page Scrolling Required) */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl rounded-2xl border border-red-500/30 bg-[#121212] p-4 sm:p-6 shadow-[0_0_80px_rgba(229,9,20,0.5)] max-h-[92vh] flex flex-col justify-between overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-xl hover:scale-110 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded Widescreen Video Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Info Directly Below Player (Fit to screen, 0 page scrolling) */}
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="rounded border border-red-500/50 bg-red-500/10 px-2 py-0.5 text-[10px] font-bold text-red-500 uppercase tracking-widest">
                    {selectedVideo.rating}
                  </span>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                    {selectedVideo.tags.join(' • ')}
                  </span>
                </div>
                <a
                  href={selectedVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                >
                  Watch on YouTube <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{selectedVideo.title}</h3>
              <p className="text-xs text-[#F5F0EB]/60">
                {selectedVideo.views} · Duration: {selectedVideo.duration}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
