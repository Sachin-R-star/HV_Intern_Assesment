import React, { useState } from 'react';
import { Star, MessageSquare, UserPlus, Check, Sparkles, Camera } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroSection({
  data,
  isEditMode,
  onUpdateText,
  onOpenImagePicker,
  onScrollToContact
}) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(62);

  const handleFollowClick = (e) => {
    e.stopPropagation();
    if (!isFollowing) {
      setIsFollowing(true);
      setFollowerCount(prev => prev + 1);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.4 },
        colors: ['#d5a73e', '#e8c374', '#ffffff']
      });
    } else {
      setIsFollowing(false);
      setFollowerCount(prev => Math.max(0, prev - 1));
    }
  };

  // 5 vertical capsule columns with staggered heights matching the signature Figma mask
  const pillHeights = [
    'h-[260px] sm:h-[320px] md:h-[400px]',
    'h-[320px] sm:h-[380px] md:h-[470px]',
    'h-[340px] sm:h-[410px] md:h-[500px]',
    'h-[300px] sm:h-[360px] md:h-[440px]',
    'h-[240px] sm:h-[300px] md:h-[370px]',
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 md:py-16 overflow-hidden">
      
      {/* Background ambient gold gradient glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-300/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Typography, Stats pill & Action Buttons */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          {/* "I'm" Kicker */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-[1.5px] bg-gold-500 hidden lg:inline-block" />
            <span
              contentEditable={isEditMode}
              suppressContentEditableWarning
              onBlur={(e) => onUpdateText('hero.kicker', e.currentTarget.innerText)}
              className={`text-gold-600 font-serif italic text-lg sm:text-xl tracking-wide uppercase ${
                isEditMode ? 'editable-field' : ''
              }`}
            >
              {data.kicker || "I'm"}
            </span>
          </div>

          {/* Large Name: Hogari Marai */}
          <h1
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => onUpdateText('hero.name', e.currentTarget.innerText)}
            className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-gray-900 leading-none mb-3 ${
              isEditMode ? 'editable-field' : ''
            }`}
          >
            {data.name || "Hogari Marai"}
          </h1>

          {/* Subtitle / Profession */}
          <p
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => onUpdateText('hero.title', e.currentTarget.innerText)}
            className={`text-sm sm:text-base text-gray-600 font-light max-w-sm mb-6 ${
              isEditMode ? 'editable-field' : ''
            }`}
          >
            {data.title || "Fashion Model & Editorial Muse"}
          </p>

          {/* Floating Stats Pill Card (As seen in Figma!) */}
          <div className="relative group w-full max-w-xs sm:max-w-sm mb-8">
            <div className="glass-card shadow-luxury rounded-2xl p-2 sm:p-2.5 flex items-center justify-between gap-2 border border-gold-300/40 animate-float-medium hover:shadow-gold-glow transition-all duration-300">
              
              {/* Follow Button */}
              <button
                onClick={handleFollowClick}
                className={`flex-1 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 shine-hover ${
                  isFollowing
                    ? 'bg-gold-100 text-gold-800 border border-gold-400'
                    : 'bg-white hover:bg-gold-50 text-gray-800 shadow-sm border border-gray-200'
                }`}
              >
                {isFollowing ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Following</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-3.5 h-3.5 text-gold-600" />
                    <span>{data.stats.followBtnText || 'Follow'}</span>
                  </>
                )}
              </button>

              {/* Center Golden Badge: 62K Followers */}
              <div className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl gold-gradient-bg text-white text-center shadow-md flex flex-col items-center justify-center">
                <span
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateText('hero.stats.count', e.currentTarget.innerText)}
                  className={`text-base sm:text-lg font-bold leading-tight ${isEditMode ? 'editable-field' : ''}`}
                >
                  {followerCount}K
                </span>
                <span
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateText('hero.stats.label', e.currentTarget.innerText)}
                  className={`text-[10px] sm:text-[11px] tracking-wider uppercase opacity-90 ${isEditMode ? 'editable-field' : ''}`}
                >
                  {data.stats.label || 'Followers'}
                </span>
              </div>

              {/* Message Button */}
              <button
                onClick={onScrollToContact}
                className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-gold-50 text-gray-800 shadow-sm border border-gray-200 transition-all flex items-center justify-center gap-1.5 shine-hover"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
                <span>{data.stats.messageBtnText || 'Message'}</span>
              </button>

            </div>
          </div>

          {/* Location & Agency chips */}
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-gold-500" />
            <span
              contentEditable={isEditMode}
              suppressContentEditableWarning
              onBlur={(e) => onUpdateText('hero.location', e.currentTarget.innerText)}
              className={isEditMode ? 'editable-field' : ''}
            >
              {data.location || "Paris • Milan • Tokyo • New York"}
            </span>
          </div>

        </div>

        {/* Right Column: Signature Vertical Gold Capsule Pillars with Model Image */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2 relative">
          
          {/* Main Visual: 5 Staggered Stadium / Capsule Rounded Columns */}
          <div 
            onClick={() => isEditMode && onOpenImagePicker('hero.image', data.image)}
            className={`relative flex items-center justify-center gap-2 sm:gap-3.5 md:gap-4 p-2 select-none ${
              isEditMode ? 'editable-image-container cursor-pointer' : ''
            }`}
          >
            {pillHeights.map((heightClass, idx) => {
              // The central 3 pillars display the fashion model through an image window,
              // while the outer pillars feature warm golden gradients!
              const isCenterPillar = idx >= 1 && idx <= 3;
              
              return (
                <div
                  key={idx}
                  className={`relative w-12 sm:w-16 md:w-20 lg:w-24 ${heightClass} rounded-full overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-2 border-gold-300/50`}
                >
                  {/* Base Gold Gradient */}
                  <div className="absolute inset-0 gold-pill-gradient opacity-90" />

                  {/* Masked Fashion Model Image */}
                  <img
                    src={data.image}
                    alt="Hogari Marai Fashion Editorial"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-normal group-hover:scale-105 transition-transform duration-700"
                    style={{
                      // Each pill shows a slice of the full composite model
                      objectPosition: `${(idx / 4) * 100}% center`
                    }}
                    onError={(e) => {
                      e.target.src = data.fallbackImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }}
                  />

                  {/* Golden top & bottom gradient overlays for luxury luster */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gold-400/30 via-transparent to-gold-700/50 pointer-events-none" />

                  {/* Subtle shine highlight */}
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/40 to-transparent rounded-t-full pointer-events-none" />
                </div>
              );
            })}

            {/* Floating Rating Badge (As seen in Figma design!) */}
            <div className="absolute -bottom-4 right-4 sm:right-8 glass-card-dark text-white px-3.5 py-1.5 rounded-full shadow-gold-glow border border-gold-400/50 flex items-center gap-1.5 animate-float-delayed">
              <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
              <span className="text-xs font-bold tracking-wider text-gold-200">
                {data.stats.rating || '4.8'}
              </span>
              <span className="text-[10px] text-gray-400">/ 5.0</span>
            </div>

            {/* Sparkle Floating Accent */}
            <div className="absolute -top-3 left-4 sm:left-12 w-8 h-8 rounded-full bg-gold-400/20 backdrop-blur-md border border-gold-400/40 flex items-center justify-center animate-float-slow shadow-gold-subtle">
              <Sparkles className="w-4 h-4 text-gold-600" />
            </div>

            {/* Edit overlay icon indicator */}
            {isEditMode && (
              <div className="absolute top-2 right-2 bg-black/70 text-white p-2 rounded-full shadow-lg border border-gold-400 flex items-center gap-1 text-xs">
                <Camera className="w-3.5 h-3.5 text-gold-400" />
                <span>Replace Model Photo</span>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

