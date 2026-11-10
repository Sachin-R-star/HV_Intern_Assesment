import React from 'react';
import { Quote, Sparkles, Star, CheckCircle } from 'lucide-react';

export default function HighlightedQuoteSection({
  data,
  isEditMode,
  onUpdateText
}) {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Container marked in Figma with blue selection box */}
      <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-white/90 backdrop-blur-xl border-2 border-gold-400/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        
        {/* Subtle decorative gold corner ribbons / accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-200/40 via-gold-100/10 to-transparent pointer-events-none rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold-300/30 via-transparent to-transparent pointer-events-none rounded-bl-3xl" />

        {/* Top Header Row with Badge & Rating */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
          
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shadow-inner">
              <Quote className="w-4 h-4 rotate-180" />
            </span>
            <span
              contentEditable={isEditMode}
              suppressContentEditableWarning
              onBlur={(e) => onUpdateText('quoteBox.badge', e.currentTarget.innerText)}
              className={`text-xs font-bold tracking-widest text-gold-700 uppercase ${
                isEditMode ? 'editable-field' : ''
              }`}
            >
              {data.badge || "EDITORIAL STATEMENT"}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-300/60 text-gold-800 text-xs font-semibold shadow-sm animate-float-slow">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span
              contentEditable={isEditMode}
              suppressContentEditableWarning
              onBlur={(e) => onUpdateText('quoteBox.highlightBadge', e.currentTarget.innerText)}
              className={isEditMode ? 'editable-field' : ''}
            >
              {data.highlightBadge || "4.8 ★ Global Editorial Rating"}
            </span>
          </div>

        </div>

        {/* Main Quote Title */}
        <h3
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateText('quoteBox.title', e.currentTarget.innerText)}
          className={`text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 leading-snug ${
            isEditMode ? 'editable-field' : ''
          }`}
        >
          {data.title || "Curated Aesthetics & Vision"}
        </h3>

        {/* Main Editorial Text Body */}
        <p
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateText('quoteBox.text', e.currentTarget.innerText)}
          className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-light italic mb-8 relative z-10 ${
            isEditMode ? 'editable-field' : ''
          }`}
        >
          "{data.text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Fashion is not merely an aesthetic—it is the unspoken architecture of emotion, light, and timeless living art."}"
        </p>

        {/* Signature & Credit Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gold-200/70 relative z-10">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-white font-serif font-bold text-sm shadow-md">
              HM
            </div>
            <div>
              <p
                contentEditable={isEditMode}
                suppressContentEditableWarning
                onBlur={(e) => onUpdateText('quoteBox.author', e.currentTarget.innerText)}
                className={`text-sm font-bold text-gray-900 font-serif ${isEditMode ? 'editable-field' : ''}`}
              >
                {data.author || "Hogari Marai"}
              </p>
              <p
                contentEditable={isEditMode}
                suppressContentEditableWarning
                onBlur={(e) => onUpdateText('quoteBox.authorTitle', e.currentTarget.innerText)}
                className={`text-xs text-gray-500 ${isEditMode ? 'editable-field' : ''}`}
              >
                {data.authorTitle || "Featured in Vogue & Harper's Bazaar"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gold-700 font-medium">
            <CheckCircle className="w-4 h-4 text-gold-600" />
            <span>Verified Persona & Editorial Release</span>
          </div>

        </div>

      </div>

    </section>
  );
}

