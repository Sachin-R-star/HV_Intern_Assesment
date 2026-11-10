import React from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, Edit3, Eye, Sliders, RotateCcw } from 'lucide-react';

export default function ViewportToolbar({
  viewMode,
  setViewMode,
  isEditMode,
  setIsEditMode,
  onOpenDrawer,
  onReset
}) {
  return (
    <aside className="sticky top-0 z-40 bg-[#161413]/95 text-white backdrop-blur-md border-b border-gold-500/20 px-4 py-2.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping" />
            <span className="font-serif tracking-wider font-bold text-gold-300 text-sm sm:text-base">
              HOGARI MARAI
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
            Figma Live Landing Page
          </span>
        </div>

        {/* Viewport switcher */}
        <div className="flex items-center bg-black/40 border border-white/10 rounded-full p-1 gap-1">
          <button
            onClick={() => setViewMode('full')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
              viewMode === 'full'
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Fluid Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Fluid</span>
          </button>
          
          <button
            onClick={() => setViewMode('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
              viewMode === 'desktop'
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Desktop 1200px"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Desktop</span>
          </button>

          <button
            onClick={() => setViewMode('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
              viewMode === 'tablet'
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Tablet 768px"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tablet</span>
          </button>

          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
              viewMode === 'mobile'
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Mobile iPhone 390px"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mobile (390px)</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              isEditMode
                ? 'bg-gold-500 text-black font-bold shadow-gold-glow animate-pulse'
                : 'bg-white/10 hover:bg-white/20 text-gray-200'
            }`}
          >
            {isEditMode ? <Eye className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5 text-gold-400" />}
            <span>{isEditMode ? 'Preview Mode' : '✏️ Edit Mode'}</span>
          </button>

          <button
            onClick={onOpenDrawer}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gold-600/30 hover:bg-gold-600/50 text-gold-200 border border-gold-500/40 transition-colors"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CMS Panel</span>
          </button>

          <button
            onClick={onReset}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
            title="Reset to default Figma values"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
}

