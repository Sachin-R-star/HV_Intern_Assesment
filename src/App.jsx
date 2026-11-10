import React, { useState, useEffect } from 'react';
import ResponsivePreviewBar from './components/ResponsivePreviewBar';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import HighlightedQuoteSection from './components/HighlightedQuoteSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import EditorDrawer from './components/EditorDrawer';
import ImagePickerModal from './components/ImagePickerModal';
import { INITIAL_DATA } from './data/initialData';
import { Sliders, Edit3, Eye, Sparkles } from 'lucide-react';

export default function App() {
  // Load saved content from localStorage or fallback to Figma Initial Data
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('hogari_portfolio_data');
      return saved ? JSON.parse(saved) : INITIAL_DATA;
    } catch (e) {
      return INITIAL_DATA;
    }
  });

  // Responsive mode: 'full' | 'desktop' | 'tablet' | 'mobile'
  const [viewMode, setViewMode] = useState('full');
  
  // Edit mode toggle
  const [isEditMode, setIsEditMode] = useState(false);
  
  // CMS Drawer toggle
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Image Picker Modal state
  const [imagePicker, setImagePicker] = useState({
    isOpen: false,
    fieldPath: '',
    currentImage: ''
  });

  // Utility to update nested object by dot notation path (e.g. "hero.name" or "gallery.items.0.image")
  const updateNestedField = (path, value) => {
    setData((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      const parts = path.split('.');
      let current = copy;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
      current[parts[parts.length - 1]] = value;
      return copy;
    });
  };

  const handleOpenImagePicker = (fieldPath, currentImage) => {
    setImagePicker({
      isOpen: true,
      fieldPath,
      currentImage
    });
  };

  const handleSelectImage = (newImageUrl) => {
    if (imagePicker.fieldPath) {
      updateNestedField(imagePicker.fieldPath, newImageUrl);
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all content and layout back to the original Figma design?")) {
      setData(INITIAL_DATA);
      localStorage.removeItem('hogari_portfolio_data');
    }
  };

  const handleAddGalleryItem = () => {
    const newItem = {
      id: `gal-${Date.now()}`,
      title: "Couture Showcase",
      category: "Fashion Editorial",
      year: "2024",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85"
    };
    setData((prev) => ({
      ...prev,
      gallery: {
        ...prev.gallery,
        items: [...prev.gallery.items, newItem]
      }
    }));
  };

  const handleRemoveGalleryItem = (index) => {
    setData((prev) => ({
      ...prev,
      gallery: {
        ...prev.gallery,
        items: prev.gallery.items.filter((_, idx) => idx !== index)
      }
    }));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToIntro = () => {
    const el = document.getElementById('intro');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Content wrapper depending on viewMode
  const renderFramedContent = () => {
    const content = (
      <main className={`min-h-screen bg-[#F6F4F0] text-[#1a1614] pb-16 ${isEditMode ? 'edit-mode-active' : ''}`}>
        
        {/* Navigation */}
        <HeaderNav
          isEditMode={isEditMode}
          onToggleEditMode={() => setIsEditMode(!isEditMode)}
          onHireClick={scrollToContact}
        />

        {/* Hero Section */}
        <HeroSection
          data={data.hero}
          isEditMode={isEditMode}
          onUpdateText={updateNestedField}
          onOpenImagePicker={handleOpenImagePicker}
          onScrollToContact={scrollToContact}
        />

        {/* My Intro Section */}
        <IntroSection
          data={data.intro}
          isEditMode={isEditMode}
          onUpdateText={updateNestedField}
          onOpenImagePicker={handleOpenImagePicker}
          onAboutClick={scrollToIntro}
          onHireClick={scrollToContact}
        />

        {/* Highlighted Quote Box (The marked section from Figma screenshot) */}
        <div id="philosophy">
          <HighlightedQuoteSection
            data={data.quoteBox}
            isEditMode={isEditMode}
            onUpdateText={updateNestedField}
          />
        </div>

        {/* My Gallery Section */}
        <GallerySection
          data={data.gallery}
          isEditMode={isEditMode}
          onUpdateText={updateNestedField}
          onOpenImagePicker={handleOpenImagePicker}
          onAddGalleryItem={handleAddGalleryItem}
          onRemoveGalleryItem={handleRemoveGalleryItem}
        />

        {/* Contact Section ("Short Message") */}
        <ContactSection
          data={data.contact}
          isEditMode={isEditMode}
          onUpdateText={updateNestedField}
        />

      </main>
    );

    if (viewMode === 'full') {
      return content;
    }

    if (viewMode === 'desktop') {
      return (
        <div className="py-8 px-4 flex justify-center bg-gray-900 min-h-screen overflow-x-auto">
          <div className="w-full max-w-[1240px] bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-800">
            {/* Fake browser bar */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-gray-400 font-mono ml-4">hogarimarai.fashion/editorial</span>
            </div>
            {content}
          </div>
        </div>
      );
    }

    if (viewMode === 'tablet') {
      return (
        <div className="py-8 px-4 flex justify-center bg-gray-900 min-h-screen overflow-x-auto">
          <div className="w-[768px] bg-white rounded-3xl shadow-2xl overflow-hidden border-[12px] border-gray-800">
            {content}
          </div>
        </div>
      );
    }

    if (viewMode === 'mobile') {
      return (
        <div className="py-8 px-4 flex justify-center bg-gray-900 min-h-screen overflow-x-auto">
          {/* Realistic iPhone frame matching the mobile screen in Figma */}
          <div className="w-[390px] bg-white rounded-[44px] shadow-2xl overflow-hidden border-[12px] border-gray-800 relative">
            {/* Dynamic Island / Notch */}
            <div className="w-32 h-5 bg-black rounded-b-xl mx-auto z-40 relative flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#111] border border-gray-700" />
            </div>
            {content}
            {/* Home indicator bar */}
            <div className="w-36 h-1 bg-black/40 rounded-full mx-auto my-2" />
          </div>
        </div>
      );
    }

    return content;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#161413]">
      
      {/* Top Preview Bar for device switching & controls */}
      <ResponsivePreviewBar
        viewMode={viewMode}
        setViewMode={setViewMode}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onReset={handleResetDefaults}
      />

      {/* Main Landing Page View */}
      <div className="flex-1">
        {renderFramedContent()}
      </div>

      {/* Floating Action Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsEditMode(!isEditMode)}
          className={`p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 ${
            isEditMode
              ? 'bg-gold-500 text-black font-bold shadow-gold-glow animate-pulse'
              : 'bg-black/80 hover:bg-black text-gold-300 border border-gold-500/40 backdrop-blur-md'
          }`}
          title={isEditMode ? "Switch to Preview Mode" : "Switch to Edit Mode"}
        >
          {isEditMode ? <Eye className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
          <span className="text-xs font-semibold hidden sm:inline">
            {isEditMode ? 'Preview Mode' : 'Live Edit'}
          </span>
        </button>

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="p-3.5 rounded-full bg-gold-600 hover:bg-gold-500 text-white shadow-xl hover:shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95 border border-gold-400"
          title="Open CMS Editor Panel"
        >
          <Sliders className="w-5 h-5" />
        </button>
      </div>

      {/* Side CMS Customizer Drawer */}
      <EditorDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        data={data}
        onUpdateFullData={setData}
        onOpenImagePicker={handleOpenImagePicker}
        onReset={handleResetDefaults}
      />

      {/* Image Picker / Uploader Modal */}
      <ImagePickerModal
        isOpen={imagePicker.isOpen}
        onClose={() => setImagePicker({ ...imagePicker, isOpen: false })}
        onSelectImage={handleSelectImage}
        currentImage={imagePicker.currentImage}
      />

    </div>
  );
}

