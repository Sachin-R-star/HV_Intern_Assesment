import React, { useState } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export default function HeaderNav({ isEditMode, onToggleEditMode, onHireClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
      
      {/* Brand Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full gold-gradient-bg flex items-center justify-center text-white font-serif font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
          H
        </div>
        <div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gold-700 transition-colors">
            Hogari Marai
          </span>
          <span className="block text-[9px] uppercase tracking-widest text-gold-600 font-semibold -mt-1">
            Haute Couture • Editorial
          </span>
        </div>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-gray-700 uppercase">
        <a href="#intro" className="hover:text-gold-600 transition-colors">Intro</a>
        <a href="#philosophy" className="hover:text-gold-600 transition-colors">Statement</a>
        <a href="#gallery" className="hover:text-gold-600 transition-colors">Gallery</a>
        <a href="#contact" className="hover:text-gold-600 transition-colors">Contact</a>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Quick CTA */}
        <button
          onClick={onHireClick}
          className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-gold-900 bg-gold-100/80 hover:bg-gold-200 border border-gold-300 transition-all shine-hover"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-700" />
          <span>Book Model</span>
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full inset-x-4 bg-white/95 backdrop-blur-xl border border-gold-300/40 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-sm font-medium animate-fadeIn">
          <a
            href="#intro"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800 hover:text-gold-600 py-1 border-b border-gray-100"
          >
            Intro & Overview
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800 hover:text-gold-600 py-1 border-b border-gray-100"
          >
            Editorial Statement
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800 hover:text-gold-600 py-1 border-b border-gray-100"
          >
            Gallery Capsules
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800 hover:text-gold-600 py-1"
          >
            Short Message & Inquiries
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onHireClick();
            }}
            className="w-full py-2.5 rounded-full text-xs font-semibold text-white gold-gradient-bg shadow-md text-center"
          >
            Book Model Now
          </button>
        </div>
      )}

    </nav>
  );
}

