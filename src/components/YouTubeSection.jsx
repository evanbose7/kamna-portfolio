import React, { useState, useEffect, useRef } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown, Volume2, VolumeX, ExternalLink, X } from 'lucide-react';
import { YoutubeIcon } from './Icons';

export default function YouTubeSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideoId, setHoveredVideoId] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Mobile Active Video & Strict 1.5s Thumbnail Delay State
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [activePreviewVideoId, setActivePreviewVideoId] = useState(null);
  const [isSectionInView, setIsSectionInView] = useState(false);

  // Refs for mobile swipe container & timers
  const sectionRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const mobileTimerRef = useRef(null);

  const youtubeChannelUrl = 'https://www.youtube.com/@Kidwithcrayons';

  const videos = [
    {
      id: 'video-1',
      title: '10th BOARD RESULT | Tears, Celebration & Heartbreaks | Official Film',
      thumbnail: '/assets/yt-thumb-1.jpg',
      mp4Preview: '/assets/yt-preview-1.mp4',
      youtubeId: 'UN3Nqzh-nrQ',
      youtubeUrl: 'https://youtu.be/UN3Nqzh-nrQ?si=glKRxw3dFc2vYPqM',
      duration: '12:45',
      rating: 'U/A 13+',
      quality: '1080P',
      tags: ['Short Film', 'Storytelling', 'Arnav Films'],
    },
    {
      id: 'video-2',
      title: 'Messi Aur Billu Ki Kahani (PART 1)',
      thumbnail: '/assets/yt-thumb-2.jpg',
      mp4Preview: '/assets/yt-preview-2.mp4',
      youtubeId: 'A-OdwRbfPNA',
      youtubeUrl: 'https://www.youtube.com/watch?v=A-OdwRbfPNA',
      duration: '08:30',
      rating: 'U/A 13+',
      quality: 'HD',
      tags: ['Storytelling', 'Comedy', 'Arnav Films'],
    },
  ];

  const youtubeShorts = [
    {
      id: 'short-1',
      title: 'When LORD GANESHA saved a DOG',
      thumbnail: '/assets/short-1-thumb.jpg',
      youtubeUrl: 'https://youtube.com/shorts/YTU_5wlTdV4?si=J_zxORJxDxSQDG1m',
      views: '1.2M views',
      duration: '0:45',
    },
    {
      id: 'short-2',
      title: 'Same Age, Different Life: This Video Will Move You to Tears',
      thumbnail: '/assets/short-2-thumb.jpg',
      youtubeUrl: 'https://youtube.com/shorts/bJPll8S4Q2A?si=mMxXdMKf36A9Ka-G',
      views: '850K views',
      duration: '0:58',
    },
  ];

  // Desktop Hover Handlers
  const handleMouseEnter = (id) => {
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

  // IntersectionObserver to detect when section enters mobile screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionInView(true);
          } else {
            setIsSectionInView(false);
            setActivePreviewVideoId(null);
            if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Strict 1.5s Delay Timer: Shows Thumbnail First -> Waits 1.5s -> Plays Video
  useEffect(() => {
    if (window.innerWidth >= 768 || !isSectionInView) {
      setActivePreviewVideoId(null);
      if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
      return;
    }

    // Step 1: Force active preview to null (Thumbnail ONLY mode)
    setActivePreviewVideoId(null);
    setIsVideoLoaded(false);

    if (mobileTimerRef.current) {
      clearTimeout(mobileTimerRef.current);
    }

    // Step 2: Wait exactly 1500ms (1.5 seconds) while user views thumbnail
    mobileTimerRef.current = setTimeout(() => {
      const targetVideo = videos[activeMobileIndex];
      if (targetVideo) {
        setActivePreviewVideoId(targetVideo.id);
      }
    }, 1500);

    return () => {
      if (mobileTimerRef.current) {
        clearTimeout(mobileTimerRef.current);
      }
    };
  }, [activeMobileIndex, isSectionInView]);

  // Track Mobile Horizontal Swipe Position
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const cardWidth = container.offsetWidth * 0.8;
    const newIndex = Math.min(
      videos.length - 1,
      Math.max(0, Math.round(container.scrollLeft / cardWidth))
    );

    if (newIndex !== activeMobileIndex) {
      setActivePreviewVideoId(null);
      setActiveMobileIndex(newIndex);
    }
  };

  return (
    <section ref={sectionRef} id="youtube" className="bg-[#0A0A0A] scroll-mt-6 pt-12 sm:pt-20 md:pt-24 pb-16 sm:pb-20 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E91E8C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold text-red-500 uppercase tracking-widest mb-4">
            <YoutubeIcon className="w-4 h-4 text-red-500" />
            YouTube
          </div>
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#F5F0EB]"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Featured Videos
          </h2>
        </div>

        {/* --- ⚡ YOUTUBE SHORTS SECTION (Just before previous videos) --- */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-5 px-1">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight flex items-center gap-2">
                <YoutubeIcon className="w-5 h-5 text-red-500" />
                YouTube Shorts
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest">
              2 Viral Shorts
            </span>
          </div>

          <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x sm:snap-none snap-mandatory grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pb-4 sm:pb-0 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
            {youtubeShorts.map((short) => (
              <a
                key={short.id}
                href={short.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative w-[80vw] max-w-[300px] sm:w-full shrink-0 sm:shrink snap-center sm:snap-none
                  aspect-[9/14] sm:aspect-[9/15] rounded-3xl overflow-hidden bg-[#181818] border border-white/20
                  shadow-[0_15px_45px_rgba(0,0,0,0.5)] hover:border-red-500/90 hover:shadow-[0_0_40px_rgba(239,68,68,0.5)]
                  transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 cursor-pointer hover:-translate-y-1.5
                "
              >
                {/* Background Image - Brightened */}
                <img
                  src={short.thumbnail}
                  alt={short.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-110 sm:brightness-115 group-hover:brightness-125"
                />

                {/* Ambient Light Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5 z-10" />

                {/* Top Badges */}
                <div className="relative z-20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white font-mono text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-md">
                    <YoutubeIcon className="w-3.5 h-3.5 text-white" />
                    <span>SHORTS</span>
                  </div>

                  {/* Views Badge */}
                  <div className="px-3 py-1 rounded-full bg-black/80 border border-white/25 text-red-400 font-mono text-[11px] font-bold backdrop-blur-md shadow-md">
                    {short.views}
                  </div>
                </div>

                {/* Center Hover Play Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white shadow-[0_0_35px_rgba(239,68,68,0.85)] flex items-center justify-center opacity-90 group-hover:scale-110 group-hover:opacity-100 group-hover:bg-red-600 transition-all duration-300">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-20 space-y-1.5 pt-6">
                  <h4 className="font-display font-bold text-sm sm:text-lg text-white leading-snug group-hover:text-red-400 transition-colors line-clamp-2 drop-shadow-md">
                    {short.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-white/70 font-mono pt-1">
                    <span>Watch Short</span>
                    <span className="flex items-center gap-1 text-red-400 font-bold group-hover:translate-x-1 transition-transform">
                      Open <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-6 pt-2 px-1 -mx-5 px-5"
        >
          {videos.map((video) => {
            const isPreviewActive = activePreviewVideoId === video.id;

            return (
              <a
                key={video.id}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[82vw] max-w-[310px] shrink-0 snap-center flex flex-col gap-3 rounded-2xl bg-[#141414] border border-white/10 p-3 shadow-lg hover:border-red-500/40 transition-colors"
              >
                {/* 16:9 Thumbnail & Video Container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black transform-gpu">
                  {/* Play Icon Badge when showing static thumbnail */}
                  {!isPreviewActive && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/25">
                      <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Static Thumbnail Poster (Always shown for the first 1.5 seconds) */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />

                  {/* Auto-Playing Video Preview */}
                  {isPreviewActive && (
                    <div className="absolute inset-0 w-full h-full z-10 overflow-hidden rounded-xl bg-black animate-fadeIn">
                      {video.mp4Preview ? (
                        <video
                          src={video.mp4Preview}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&playsinline=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${video.youtubeId}&start=10`}
                          title={video.title}
                          onLoad={() => setIsVideoLoaded(true)}
                          allow="autoplay; encrypted-media; picture-in-picture"
                          className="w-full h-full border-0 pointer-events-none object-cover"
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Info Sitting Directly Underneath */}
                <div className="flex flex-col gap-1.5 px-1 pb-1">
                  <div className="flex items-center justify-between text-[11px] text-white/60">
                    <span className="font-bold text-red-400 uppercase tracking-wider">{video.tags.join(' • ')}</span>
                    <span>{video.duration}</span>
                  </div>
                  <h3 className="font-bold text-sm text-white leading-snug line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-[11px] text-white/40 pt-1">
                    <span className="flex items-center gap-1 text-red-500 font-bold ml-auto">
                      Watch on YouTube <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* --- 🖥 DESKTOP VIEW: NETFLIX HOVER SHOWCASE --- */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 max-w-4xl mx-auto relative z-10 pt-8 pb-32 overflow-visible">
          {videos.map((video, index) => {
            const isHovered = hoveredVideoId === video.id;

            const transformOriginClass =
              index === 0
                ? 'origin-left'
                : index === videos.length - 1
                ? 'origin-right'
                : 'origin-center';

            return (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={handleMouseLeave}
                className="relative aspect-video w-auto cursor-pointer select-none overflow-visible"
              >
                {/* 1. Default Clean Static Thumbnail */}
                <div className="w-full h-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg relative group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* 2. Desktop Floating Netflix Hover Overlay */}
                <div
                  className={`absolute top-0 left-0 right-0 z-50 rounded-2xl overflow-hidden bg-[#181818] border border-red-600 shadow-[0_30px_70px_rgba(229,9,20,0.75)] transform-gpu will-change-transform transition-all duration-450 ease-[cubic-bezier(0.25,1,0.5,1)] ${transformOriginClass} ${
                    isHovered
                      ? 'opacity-100 scale-108 -translate-y-4 pointer-events-auto'
                      : 'opacity-0 scale-100 translate-y-0 pointer-events-none'
                  }`}
                  style={{ minWidth: '100%' }}
                >
                  {/* Top Video Preview Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    {/* Mute Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      aria-label="Toggle Mute"
                      className="absolute bottom-2.5 right-2.5 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-black/80 border border-white/30 text-white backdrop-blur-md transition-transform hover:scale-110 cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-red-500" />}
                    </button>

                    {/* Background Static Thumbnail Poster */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        isVideoLoaded || video.mp4Preview ? 'opacity-0' : 'opacity-100'
                      }`}
                    />

                    {/* Auto-Playing Video Preview */}
                    {isHovered && (
                      <div className="w-full h-full relative">
                        {video.mp4Preview ? (
                          <video
                            src={video.mp4Preview}
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&loop=1&playlist=${video.youtubeId}&start=10`}
                            title={video.title}
                            onLoad={() => setIsVideoLoaded(true)}
                            allow="autoplay; encrypted-media"
                            className="w-full h-[140%] -translate-y-[15%] border-0 object-cover scale-125 transition-opacity duration-500 pointer-events-none"
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Netflix Action Controls & Metadata */}
                  <div className="p-4 flex flex-col gap-3 bg-[#181818]">
                    
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
                    <div className="flex items-center gap-2 text-xs text-white/80 font-semibold pt-1">
                      <span className="rounded border border-white/40 px-1.5 py-0.5 text-[10px] text-white font-bold">
                        {video.rating}
                      </span>
                      <span className="rounded border border-white/40 px-1.5 py-0.5 text-[10px] text-white font-bold">
                        {video.quality}
                      </span>
                      <span className="text-[#F5F0EB]/70 text-[11px] font-semibold ml-auto">
                        Duration: {video.duration}
                      </span>
                    </div>

                    {/* Row 3: Title & Tags */}
                    <div className="space-y-1">
                      <h3 className="font-bold text-xs sm:text-sm text-white leading-snug line-clamp-2">
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
        <div className="mt-2 sm:mt-4 text-center relative z-20">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/10 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-red-500 transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] cursor-pointer"
          >
            <YoutubeIcon className="w-4 h-4" />
            Subscribe on YouTube
          </a>
        </div>

      </div>

      {/* 🍿 Desktop Video Info / Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[99999] hidden md:flex items-center justify-center bg-black/85 p-6 animate-backdrop-fade">
          <div className="relative w-full max-w-3xl lg:max-w-4xl rounded-2xl border border-red-500/30 bg-[#121212] p-6 shadow-[0_0_80px_rgba(229,9,20,0.6)] max-h-[88vh] flex flex-col justify-between overflow-y-auto transform-gpu will-change-transform animate-modal-pop">
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-xl hover:scale-110 transition-transform cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded Widescreen Video Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Info Directly Below Player */}
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="rounded border border-red-500/50 bg-red-500/10 px-2 py-0.5 text-[10px] font-bold text-red-500 uppercase tracking-widest">
                    {selectedVideo.rating}
                  </span>
                  <span className="text-xs font-bold text-[#FFB3CB] uppercase tracking-widest">
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
              <h3 className="text-base md:text-lg font-bold text-white leading-snug">{selectedVideo.title}</h3>
              <p className="text-xs text-[#F5F0EB]/60">
                Duration: {selectedVideo.duration}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
