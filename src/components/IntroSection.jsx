import React from 'react';
import { ChevronRight, Award, Camera, Sparkles, Heart } from 'lucide-react';

export default function IntroSection({
  data,
  isEditMode,
  onUpdateText,
  onOpenImagePicker,
  onAboutClick,
  onHireClick
}) {
  return (
    <section id="intro" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 overflow-hidden">
      
      {/* Decorative background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-gold-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Side: Large Circular Avatar with Floating Satellite Circles */}
        <div className="lg:col-span-6 flex justify-center relative">
          
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Outer Golden Halo Rings */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-gold-300/40 animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-1 rounded-full border border-gold-400/50 pointer-events-none" />

            {/* Central Main Circle Portrait */}
            <div
              onClick={() => isEditMode && onOpenImagePicker('intro.mainImage', data.mainImage)}
              className={`w-full h-full rounded-full overflow-hidden border-4 border-gold-500 shadow-2xl relative group bg-gold-100 ${
                isEditMode ? 'editable-image-container cursor-pointer' : ''
              }`}
            >
              <img
                src={data.mainImage}
                alt="Hogari Marai Portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80";
                }}
              />

              {/* Golden gradient overlay on image hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Edit Icon on hover */}
              {isEditMode && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-xs font-semibold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-6 h-6 text-gold-400" />
                  <span>Change Portrait</span>
                </div>
              )}
            </div>

            {/* Satellite Circle 1: Bottom-Left (Haute Couture) */}
            {data.satellites?.[0] && (
              <div
                onClick={() => isEditMode && onOpenImagePicker('intro.satellites.0.image', data.satellites[0].image)}
                className={`absolute -bottom-2 -left-2 sm:bottom-0 sm:left-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-white shadow-xl animate-float-medium bg-white group cursor-pointer ${
                  isEditMode ? 'ring-2 ring-gold-500 ring-offset-2' : ''
                }`}
                title={data.satellites[0].label}
              >
                <img
                  src={data.satellites[0].image}
                  alt={data.satellites[0].label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-gold-600/10 group-hover:bg-gold-600/0 transition-colors" />
              </div>
            )}

            {/* Satellite Circle 2: Bottom-Right (Monochrome / Studio) */}
            {data.satellites?.[1] && (
              <div
                onClick={() => isEditMode && onOpenImagePicker('intro.satellites.1.image', data.satellites[1].image)}
                className={`absolute -bottom-3 right-6 sm:bottom-2 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-white shadow-xl animate-float-delayed bg-white group cursor-pointer ${
                  isEditMode ? 'ring-2 ring-gold-500 ring-offset-2' : ''
                }`}
                title={data.satellites[1].label}
              >
                <img
                  src={data.satellites[1].image}
                  alt={data.satellites[1].label}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform"
                />
              </div>
            )}

            {/* Satellite Circle 3: Top-Right (Runway 2024 / Rating) */}
            {data.satellites?.[2] && (
              <div
                onClick={() => isEditMode && onOpenImagePicker('intro.satellites.2.image', data.satellites[2].image)}
                className={`absolute top-4 -right-3 sm:top-8 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-gold-400 shadow-xl animate-float-slow bg-white group cursor-pointer ${
                  isEditMode ? 'ring-2 ring-gold-500 ring-offset-2' : ''
                }`}
                title={data.satellites[2].label}
              >
                <img
                  src={data.satellites[2].image}
                  alt={data.satellites[2].label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
            )}

            {/* Floating Luxury Heart / Muse Badge */}
            <div className="absolute top-0 left-6 p-2 rounded-full glass-card border border-gold-400/40 shadow-gold-subtle text-gold-600 animate-float-slow">
              <Sparkles className="w-4 h-4" />
            </div>

          </div>

        </div>

        {/* Right Side: Editorial Heading, Biography & Floating Buttons */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Section Sub-heading */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[1.5px] bg-gold-500" />
            <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
              {data.sectionTag || 'OVERVIEW'}
            </span>
          </div>

          {/* Heading: My Intro */}
          <h2
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => onUpdateText('intro.title', e.currentTarget.innerText)}
            className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight relative ${
              isEditMode ? 'editable-field' : ''
            }`}
          >
            {data.title || "My Intro"}
            <span className="block w-16 h-1 bg-gradient-to-r from-gold-500 to-transparent mt-2 mx-auto lg:mx-0 rounded-full" />
          </h2>

          {/* Intro Description */}
          <p
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => onUpdateText('intro.description', e.currentTarget.innerText)}
            className={`text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-8 max-w-xl ${
              isEditMode ? 'editable-field' : ''
            }`}
          >
            {data.description || "Welcome to my portfolio. With over 8 years gracing international runways, luxury fashion campaigns, and haute couture editorials across Paris, Milan, and Tokyo."}
          </p>

          {/* Highly Attractive Floating Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
            
            {/* ABOUT ME Button */}
            <button
              onClick={onAboutClick}
              className="group relative px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-white gold-gradient-bg shadow-gold-glow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shine-hover flex items-center gap-2"
            >
              <span
                contentEditable={isEditMode}
                suppressContentEditableWarning
                onBlur={(e) => {
                  e.stopPropagation();
                  onUpdateText('intro.aboutBtnText', e.currentTarget.innerText);
                }}
                className={isEditMode ? 'editable-field' : ''}
              >
                {data.aboutBtnText || "ABOUT ME"}
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>

            {/* HIRE ME Button */}
            <button
              onClick={onHireClick}
              className="group relative px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-gold-800 bg-white hover:bg-gold-50 border border-gold-400/80 shadow-md hover:shadow-gold-subtle transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 shine-hover"
            >
              <span
                contentEditable={isEditMode}
                suppressContentEditableWarning
                onBlur={(e) => {
                  e.stopPropagation();
                  onUpdateText('intro.hireBtnText', e.currentTarget.innerText);
                }}
                className={isEditMode ? 'editable-field' : ''}
              >
                {data.hireBtnText || "HIRE ME"}
              </span>
              <ChevronRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>

          </div>

          {/* Quick Metrics / Awards row */}
          <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gold-200/50 w-full max-w-md">
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-gray-900">8+</p>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider">Years Runway</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-gold-600">35+</p>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider">Magazine Covers</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-gray-900">140+</p>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider">Campaigns</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

