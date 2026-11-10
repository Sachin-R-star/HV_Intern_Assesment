import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onBookingClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex items-center justify-between">
        
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full gold-gradient-bg flex items-center justify-center text-white font-serif font-bold text-base shadow-md group-hover:scale-105 transition-transform">
            H
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gold-700 transition-colors">
              Hogari Marai
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-gold-600 font-semibold -mt-1">
              Haute Couture • Editorial
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-gray-700 uppercase">
          <a href="#intro" className="hover:text-gold-600 transition-colors">Intro</a>
          <a href="#statement" className="hover:text-gold-600 transition-colors">Statement</a>
          <a href="#gallery" className="hover:text-gold-600 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-gold-600 transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBookingClick}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-gold-900 bg-gold-100/80 hover:bg-gold-200 border border-gold-300 transition-all shine-hover"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            <span>Book Model</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/95 backdrop-blur-xl border border-gold-300/40 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-sm font-medium animate-fadeIn">
          <a
            href="#intro"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 hover:text-gold-600 py-1 border-b border-gray-100"
          >
            Intro & Overview
          </a>
          <a
            href="#statement"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 hover:text-gold-600 py-1 border-b border-gray-100"
          >
            Editorial Statement
          </a>
          <a
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 hover:text-gold-600 py-1 border-b border-gray-100"
          >
            Gallery Capsules
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 hover:text-gold-600 py-1"
          >
            Short Message & Inquiries
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookingClick();
            }}
            className="w-full py-2.5 rounded-full text-xs font-semibold text-white gold-gradient-bg shadow-md text-center"
          >
            Book Model Now
          </button>
        </div>
      )}
    </header>
  );
}

