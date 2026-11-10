import { useState, useCallback } from 'react';
import { DEFAULT_CONTENT } from '../constants/defaultContent';
import { setNestedProperty, downloadJson, triggerGoldConfetti } from '../utils/helpers';

const STORAGE_KEY = 'hogari_marai_landing_content_v1';

export function usePortfolio() {
  const [content, setContent] = useState(() => {
    try {
      const persisted = localStorage.getItem(STORAGE_KEY);
      return persisted ? JSON.parse(persisted) : DEFAULT_CONTENT;
    } catch (err) {
      console.warn('Failed to parse cached portfolio content, falling back to defaults.', err);
      return DEFAULT_CONTENT;
    }
  });

  const [viewMode, setViewMode] = useState('full'); // 'full' | 'desktop' | 'tablet' | 'mobile'
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const [imagePicker, setImagePicker] = useState({
    isOpen: false,
    fieldPath: '',
    currentValue: '',
    title: 'Replace Image'
  });

  const updateField = useCallback((path, value) => {
    setContent((prev) => {
      const next = setNestedProperty(prev, path, value);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        // storage quota might be hit if storing big base64 images
      }
      return next;
    });
  }, []);

  const setFullContent = useCallback((newContent) => {
    setContent(newContent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    } catch (e) {
      console.warn('Could not sync to localStorage', e);
    }
  }, []);

  const addGalleryItem = useCallback(() => {
    const freshItem = {
      id: `gal-${Date.now()}`,
      title: 'Milan Editorial Showcase',
      category: 'Haute Couture',
      year: new Date().getFullYear().toString(),
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85'
    };
    setContent((prev) => {
      const updated = {
        ...prev,
        gallery: {
          ...prev.gallery,
          items: [...prev.gallery.items, freshItem]
        }
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
    triggerGoldConfetti(0.7);
  }, []);

  const removeGalleryItem = useCallback((index) => {
    setContent((prev) => {
      const updated = {
        ...prev,
        gallery: {
          ...prev.gallery,
          items: prev.gallery.items.filter((_, idx) => idx !== index)
        }
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const resetToDefaults = useCallback(() => {
    if (window.confirm('Reset all page contents back to the pristine Figma design specification?')) {
      setContent(DEFAULT_CONTENT);
      localStorage.removeItem(STORAGE_KEY);
      triggerGoldConfetti(0.3);
    }
  }, []);

  const exportConfig = useCallback(() => {
    downloadJson(content, `hogari-marai-landing-${new Date().toISOString().slice(0, 10)}.json`);
  }, [content]);

  const importConfig = useCallback((parsedJson) => {
    if (!parsedJson || typeof parsedJson !== 'object') {
      throw new Error('Invalid JSON payload');
    }
    setFullContent(parsedJson);
    triggerGoldConfetti(0.4);
  }, [setFullContent]);

  const openImagePicker = useCallback((fieldPath, currentValue, title = 'Replace Image') => {
    setImagePicker({
      isOpen: true,
      fieldPath,
      currentValue,
      title
    });
  }, []);

  const closeImagePicker = useCallback(() => {
    setImagePicker((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const handleApplyPickedImage = useCallback((newUrl) => {
    if (imagePicker.fieldPath) {
      updateField(imagePicker.fieldPath, newUrl);
    }
    closeImagePicker();
  }, [imagePicker.fieldPath, updateField, closeImagePicker]);

  return {
    content,
    updateField,
    setFullContent,
    addGalleryItem,
    removeGalleryItem,
    resetToDefaults,
    exportConfig,
    importConfig,
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
  };
}

