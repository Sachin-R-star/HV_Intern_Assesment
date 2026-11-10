import React, { useState } from 'react';
import { Plus, Trash2, Camera, Eye, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection({
  data,
  isEditMode,
  onUpdateText,
  onOpenImagePicker,
  onAddGalleryItem,
  onRemoveGalleryItem
}) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const openLightbox = (idx) => {
    if (!isEditMode) {
      setActiveLightboxIndex(idx);
    }
  };

  const closeLightbox = () => setActiveLightboxIndex(null);

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : data.items.length - 1));
    }
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev < data.items.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-[1.5px] bg-gold-500" />
          <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
            {data.sectionTag || 'PORTFOLIO'}
          </span>
          <span className="w-6 h-[1.5px] bg-gold-500" />
        </div>

        <h2
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateText('gallery.title', e.currentTarget.innerText)}
          className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight mb-2 ${
            isEditMode ? 'editable-field' : ''
          }`}
        >
          {data.title || "My Gallery"}
        </h2>

        <p
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateText('gallery.subtitle', e.currentTarget.innerText)}
          className={`text-xs sm:text-sm text-gray-500 max-w-md ${
            isEditMode ? 'editable-field' : ''
          }`}
        >
          {data.subtitle || "Selected Haute Couture & Editorial Works"}
        </p>

        {/* Add Card Button (Visible in Edit Mode or if user wants to add manually) */}
        {isEditMode && (
          <button
            onClick={onAddGalleryItem}
            className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-gold-500 hover:bg-gold-600 text-white shadow-md hover:shadow-gold-glow flex items-center gap-1.5 transition-all"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Add Gallery Capsule</span>
          </button>
        )}
      </div>

      {/* Capsule Gallery Grid (Signature Figma Stadium Pill Frames) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-center">
        {data.items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group relative flex flex-col items-center"
          >
            {/* The Stadium Pill Frame */}
            <div
              onClick={() => openLightbox(idx)}
              className="relative w-full aspect-[1/2.2] max-w-[220px] rounded-full overflow-hidden shadow-xl border-2 border-gold-300/60 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-gold-500 bg-gold-100 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80";
                }}
              />

              {/* Gradient Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Pill Header highlight */}
              <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-white/30 to-transparent rounded-t-full pointer-events-none" />

              {/* Content overlay inside pill bottom */}
              <div className="absolute inset-x-0 bottom-6 px-3 text-center text-white pointer-events-none">
                <span className="text-[10px] uppercase tracking-wider text-gold-300 font-medium block">
                  {item.category}
                </span>
                <p className="font-serif font-bold text-xs sm:text-sm line-clamp-1">
                  {item.title}
                </p>
                <span className="text-[9px] text-gray-300 opacity-80">{item.year}</span>
              </div>

              {/* Hover quick preview icon */}
              {!isEditMode && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-gold-800 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              )}

              {/* Edit Mode Buttons */}
              {isEditMode && (
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenImagePicker(`gallery.items.${idx}.image`, item.image);
                    }}
                    className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-gold-500 text-white flex items-center gap-1 shadow hover:bg-gold-600 transition-colors"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Change</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveGalleryItem(idx);
                    }}
                    className="p-1.5 rounded-full bg-red-600/90 text-white hover:bg-red-700 transition-colors shadow"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>

            {/* Editable meta below pill (in Edit Mode) */}
            {isEditMode && (
              <div className="mt-3 text-center w-full px-2 space-y-1">
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateText(`gallery.items.${idx}.title`, e.currentTarget.innerText)}
                  className="text-xs font-semibold text-gray-800 editable-field"
                >
                  {item.title}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateText(`gallery.items.${idx}.category`, e.currentTarget.innerText)}
                  className="text-[10px] text-gold-700 editable-field uppercase"
                >
                  {item.category}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && data.items[activeLightboxIndex] && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl max-h-[90vh] flex flex-col items-center"
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={data.items[activeLightboxIndex].image}
              alt={data.items[activeLightboxIndex].title}
              className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl border border-gold-500/30"
            />

            <div className="text-center text-white mt-4">
              <h4 className="font-serif text-lg font-bold">{data.items[activeLightboxIndex].title}</h4>
              <p className="text-xs text-gold-400 uppercase tracking-widest">{data.items[activeLightboxIndex].category} • {data.items[activeLightboxIndex].year}</p>
            </div>

            {/* Prev / Next buttons */}
            <button
              onClick={prevLightbox}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hidden sm:flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextLightbox}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hidden sm:flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

