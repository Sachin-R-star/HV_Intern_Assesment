import React, { useState } from 'react';
import { X, Upload, Link, Check, Sparkles } from 'lucide-react';
import { IMAGE_PRESETS } from '../data/imagePresets';

export default function ImagePickerModal({ isOpen, onClose, onSelectImage, currentImage, title = "Change Image" }) {
  const [activeTab, setActiveTab] = useState('presets'); // 'presets' | 'upload' | 'url'
  const [customUrl, setCustomUrl] = useState('');
  const [selectedPreset, setSelectedPreset] = useState(currentImage);
  const [uploadedBase64, setUploadedBase64] = useState(null);

  if (!isOpen) return null;

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedBase64(reader.result);
        setSelectedPreset(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = () => {
    if (activeTab === 'url' && customUrl.trim()) {
      onSelectImage(customUrl.trim());
    } else if (uploadedBase64 && activeTab === 'upload') {
      onSelectImage(uploadedBase64);
    } else if (selectedPreset) {
      onSelectImage(selectedPreset);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gold-300/40 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gold-50/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-600 animate-spin-slow" />
            <h3 className="text-lg font-serif font-bold text-gray-900">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 bg-gray-50/50 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('presets')}
            className={`pb-3 px-4 text-sm font-medium transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'presets'
                ? 'border-gold-600 text-gold-700 font-semibold'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Curated Presets
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`pb-3 px-4 text-sm font-medium transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'upload'
                ? 'border-gold-600 text-gold-700 font-semibold'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Upload className="w-4 h-4" />
            Upload File
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`pb-3 px-4 text-sm font-medium transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'url'
                ? 'border-gold-600 text-gold-700 font-semibold'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Link className="w-4 h-4" />
            Direct Image URL
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'presets' && (
            <div>
              <p className="text-xs text-gray-500 mb-3">Choose from high-fashion studio presets or the exact Figma cutouts:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {IMAGE_PRESETS.map((preset) => {
                  const isSelected = selectedPreset === preset.url;
                  return (
                    <div
                      key={preset.id}
                      onClick={() => setSelectedPreset(preset.url)}
                      className={`group relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all aspect-[3/4] bg-gray-100 ${
                        isSelected
                          ? 'border-gold-600 ring-4 ring-gold-200/50 shadow-md scale-[1.02]'
                          : 'border-transparent hover:border-gold-400/50'
                      }`}
                    >
                      <img
                        src={preset.url}
                        alt={preset.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                        <p className="text-[11px] font-medium truncate">{preset.name}</p>
                        <span className="text-[9px] text-gold-300 uppercase tracking-wider">{preset.category}</span>
                      </div>
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold-600 text-white flex items-center justify-center shadow-lg">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="space-y-4">
              <label className="border-2 border-dashed border-gold-300/80 hover:border-gold-500 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors bg-gold-50/20 hover:bg-gold-50/40">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="w-14 h-14 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center mb-3 shadow-inner">
                  <Upload className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Click to upload or drag & drop</span>
                <span className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP, or SVG up to 10MB</span>
              </label>

              {uploadedBase64 && (
                <div className="mt-4 p-4 border border-gold-200 rounded-xl bg-gold-50/30 flex items-center gap-4">
                  <img
                    src={uploadedBase64}
                    alt="Uploaded preview"
                    className="w-16 h-16 rounded-lg object-cover border border-gold-300"
                  />
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Image successfully loaded</p>
                    <p className="text-[11px] text-gray-500">Ready to replace current image</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'url' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Paste Direct Image URL</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/... or any web image link"
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500"
                  />
                </div>
              </div>
              {customUrl && (
                <div className="mt-4 p-4 border border-gold-200 rounded-xl bg-gold-50/20">
                  <p className="text-xs text-gray-600 mb-2">Live Preview:</p>
                  <img
                    src={customUrl}
                    alt="URL preview"
                    className="w-32 h-32 rounded-lg object-cover border border-gold-300 shadow"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 shadow-md hover:shadow-gold-glow transition-all active:scale-95"
          >
            Update Image
          </button>
        </div>

      </div>
    </div>
  );
}

