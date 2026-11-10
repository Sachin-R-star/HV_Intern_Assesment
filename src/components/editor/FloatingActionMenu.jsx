import React from 'react';
import { Sliders, Edit3, Eye } from 'lucide-react';

export default function FloatingActionMenu({
  isEditMode,
  onToggleEditMode,
  onOpenDrawer
}) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <button
        onClick={onToggleEditMode}
        className={`p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 ${
          isEditMode
            ? 'bg-gold-500 text-black font-bold shadow-gold-glow animate-pulse'
            : 'bg-black/85 hover:bg-black text-gold-300 border border-gold-500/40 backdrop-blur-md'
        }`}
        title={isEditMode ? "Exit Edit Mode" : "Turn on Edit Mode"}
      >
        {isEditMode ? <Eye className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
        <span className="text-xs font-semibold hidden sm:inline">
          {isEditMode ? 'Preview Mode' : 'Live Edit'}
        </span>
      </button>

      <button
        onClick={onOpenDrawer}
        className="p-3.5 rounded-full bg-gold-600 hover:bg-gold-500 text-white shadow-xl hover:shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95 border border-gold-400"
        title="Open CMS Editor Drawer"
      >
        <Sliders className="w-5 h-5" />
      </button>
    </div>
  );
}

