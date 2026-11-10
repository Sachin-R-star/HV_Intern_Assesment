import React, { useState } from 'react';
import { Star, MessageSquare, UserPlus, Check, Sparkles, Camera } from 'lucide-react';
import EditableText from '../common/EditableText';
import { triggerGoldConfetti } from '../../utils/helpers';

const PILL_HEIGHTS = [
  'h-[260px] sm:h-[320px] md:h-[400px]',
  'h-[320px] sm:h-[380px] md:h-[470px]',
  'h-[340px] sm:h-[410px] md:h-[500px]',
  'h-[300px] sm:h-[360px] md:h-[440px]',
  'h-[240px] sm:h-[300px] md:h-[370px]',
];

export default function HeroSection({
  data,
  isEditMode,
  onUpdateText,
  onOpenImagePicker,
  onMessageClick
}) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(62);

  const toggleFollow = (e) => {
    e.stopPropagation();
    if (!isFollowing) {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
      triggerGoldConfetti(0.4);
    } else {
      setIsFollowing(false);
      setFollowerCount((prev) => Math.max(0, prev - 1));
    }
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-16 md:py-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-300/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left column: Typography, stats badge & interactions */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-[1.5px] bg-gold-500 hidden lg:inline-block" />
            <EditableText
              as="span"
              value={data.kicker || "I'm"}
              isEditable={isEditMode}
              onSave={(val) => onUpdateText('hero.kicker', val)}
              className="text-gold-600 font-serif italic text-lg sm:text-xl tracking-wide uppercase"
            />
          </div>

          <EditableText
            as="h1"
            value={data.name || "Hogari Marai"}
            isEditable={isEditMode}
            onSave={(val) => onUpdateText('hero.name', val)}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-gray-900 leading-none mb-3"
          />

          <EditableText
            as="p"
            value={data.title || "Fashion Model & Editorial Muse"}
            isEditable={isEditMode}
            onSave={(val) => onUpdateText('hero.title', val)}
            className="text-sm sm:text-base text-gray-600 font-light max-w-sm mb-6"
          />

          {/* Floating Stats Pill (Signature Figma Component) */}
          <div className="relative group w-full max-w-xs sm:max-w-sm mb-8">
            <div className="glass-card shadow-luxury rounded-2xl p-2 sm:p-2.5 flex items-center justify-between gap-2 border border-gold-300/40 animate-float-medium hover:shadow-gold-glow transition-all duration-300">
              
              <button
                onClick={toggleFollow}
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

              <div className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl gold-gradient-bg text-white text-center shadow-md flex flex-col items-center justify-center">
                <span className="text-base sm:text-lg font-bold leading-tight">
                  {followerCount}K
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-wider uppercase opacity-90">
                  {data.stats.label || 'Followers'}
                </span>
              </div>

              <button
                onClick={onMessageClick}
                className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-gold-50 text-gray-800 shadow-sm border border-gray-200 transition-all flex items-center justify-center gap-1.5 shine-hover"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
                <span>{data.stats.messageBtnText || 'Message'}</span>
              </button>

            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-gold-500" />
            <EditableText
              as="span"
              value={data.location || "Paris • Milan • Tokyo • New York"}
              isEditable={isEditMode}
              onSave={(val) => onUpdateText('hero.location', val)}
            />
          </div>

        </div>

        {/* Right column: 5 vertical capsule columns */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2 relative">
          <div 
            onClick={() => isEditMode && onOpenImagePicker('hero.image', data.image, 'Change Hero Model Image')}
            className={`relative flex items-center justify-center gap-2 sm:gap-3.5 md:gap-4 p-2 select-none ${
              isEditMode ? 'editable-image-container cursor-pointer' : ''
            }`}
          >
            {PILL_HEIGHTS.map((heightClass, idx) => (
              <div
                key={idx}
                className={`relative w-12 sm:w-16 md:w-20 lg:w-24 ${heightClass} rounded-full overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-2 border-gold-300/50`}
              >
                <div className="absolute inset-0 gold-pill-gradient opacity-90" />
                <img
                  src={data.image}
                  alt="Hogari Marai Fashion Editorial"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-normal group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: `${(idx / 4) * 100}% center` }}
                  onError={(e) => {
                    e.currentTarget.src = data.fallbackImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gold-400/30 via-transparent to-gold-700/50 pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/40 to-transparent rounded-t-full pointer-events-none" />
              </div>
            ))}

            {/* Floating Rating Badge */}
            <div className="absolute -bottom-4 right-4 sm:right-8 glass-card-dark text-white px-3.5 py-1.5 rounded-full shadow-gold-glow border border-gold-400/50 flex items-center gap-1.5 animate-float-delayed">
              <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
              <span className="text-xs font-bold tracking-wider text-gold-200">
                {data.stats.rating || '4.8'}
              </span>
              <span className="text-[10px] text-gray-400">/ 5.0</span>
            </div>

            {/* Sparkle decorative accent */}
            <div className="absolute -top-3 left-4 sm:left-12 w-8 h-8 rounded-full bg-gold-400/20 backdrop-blur-md border border-gold-400/40 flex items-center justify-center animate-float-slow shadow-gold-subtle">
              <Sparkles className="w-4 h-4 text-gold-600" />
            </div>

            {isEditMode && (
              <div className="absolute top-2 right-2 bg-black/75 text-white px-3 py-1.5 rounded-full shadow-lg border border-gold-400 flex items-center gap-1.5 text-xs">
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

