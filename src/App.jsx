import React from 'react';
import { usePortfolio } from './hooks/usePortfolio';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ViewportToolbar from './components/layout/ViewportToolbar';
import HeroSection from './components/sections/HeroSection';
import IntroSection from './components/sections/IntroSection';
import EditorialCard from './components/sections/EditorialCard';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import CMSDrawer from './components/editor/CMSDrawer';
import ImageUploadModal from './components/editor/ImageUploadModal';
import FloatingActionMenu from './components/editor/FloatingActionMenu';

export default function App() {
  const {
    content,
    updateField,
    setFullContent,
    addGalleryItem,
    removeGalleryItem,
    resetToDefaults,
    exportConfig,
    viewMode,
    setViewMode,
    isEditMode,
    setIsEditMode,
    isDrawerOpen,
    setIsDrawerOpen,
    imagePicker,
    openImagePicker,
    closeImagePicker,
    handleApplyPickedImage
  } = usePortfolio();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToIntro = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderLandingPage = () => (
    <main className={`min-h-screen bg-[#F6F4F0] text-[#1a1614] pb-12 ${isEditMode ? 'edit-mode-active' : ''}`}>
      <Navbar onBookingClick={scrollToContact} />
      
      <HeroSection
        data={content.hero}
        isEditMode={isEditMode}
        onUpdateText={updateField}
        onOpenImagePicker={openImagePicker}
        onMessageClick={scrollToContact}
      />

      <IntroSection
        data={content.intro}
        isEditMode={isEditMode}
        onUpdateText={updateField}
        onOpenImagePicker={openImagePicker}
        onAboutClick={scrollToIntro}
        onHireClick={scrollToContact}
      />

      <EditorialCard
        data={content.quoteBox}
        isEditMode={isEditMode}
        onUpdateText={updateField}
      />

      <GallerySection
        data={content.gallery}
        isEditMode={isEditMode}
        onUpdateText={updateField}
        onOpenImagePicker={openImagePicker}
        onAddGalleryItem={addGalleryItem}
        onRemoveGalleryItem={removeGalleryItem}
      />

      <ContactSection
        data={content.contact}
        isEditMode={isEditMode}
        onUpdateText={updateField}
      />

      <Footer />
    </main>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#161413]">
      <ViewportToolbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onReset={resetToDefaults}
      />

      <div className="flex-1">
        {viewMode === 'full' && renderLandingPage()}

        {viewMode === 'desktop' && (
          <div className="py-8 px-4 flex justify-center bg-gray-900 min-h-screen overflow-x-auto">
            <div className="w-full max-w-[1240px] bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-800">
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-gray-400 font-mono ml-4">hogarimarai.fashion/editorial</span>
              </div>
              {renderLandingPage()}
            </div>
          </div>
        )}

        {viewMode === 'tablet' && (
          <div className="py-8 px-4 flex justify-center bg-gray-900 min-h-screen overflow-x-auto">
            <div className="w-[768px] bg-white rounded-3xl shadow-2xl overflow-hidden border-[12px] border-gray-800">
              {renderLandingPage()}
            </div>
          </div>
        )}

        {viewMode === 'mobile' && (
          <div className="py-8 px-4 flex justify-center bg-gray-900 min-h-screen overflow-x-auto">
            <div className="w-[390px] bg-white rounded-[44px] shadow-2xl overflow-hidden border-[12px] border-gray-800 relative">
              <div className="w-32 h-5 bg-black rounded-b-xl mx-auto z-40 relative flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#111] border border-gray-700" />
              </div>
              {renderLandingPage()}
              <div className="w-36 h-1 bg-black/40 rounded-full mx-auto my-2" />
            </div>
          </div>
        )}
      </div>

      <FloatingActionMenu
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode(!isEditMode)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      <CMSDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        data={content}
        onUpdateFullData={setFullContent}
        onOpenImagePicker={openImagePicker}
        onReset={resetToDefaults}
        onExport={exportConfig}
      />

      <ImageUploadModal
        isOpen={imagePicker.isOpen}
        onClose={closeImagePicker}
        onSelectImage={handleApplyPickedImage}
        currentValue={imagePicker.currentValue}
        title={imagePicker.title}
      />
    </div>
  );
}
