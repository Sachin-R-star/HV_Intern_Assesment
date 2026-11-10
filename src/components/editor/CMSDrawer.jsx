import React, { useState } from 'react';
import { 
  X, Save, RotateCcw, Download, Upload, Plus, Trash2, Camera, 
  Sparkles, Layers, Type, Image as ImageIcon, MessageSquare, Check
} from 'lucide-react';
import { triggerGoldConfetti } from '../../utils/helpers';

export default function CMSDrawer({
  isOpen,
  onClose,
  data,
  onUpdateFullData,
  onOpenImagePicker,
  onReset,
  onExport
}) {
  const [activeTab, setActiveTab] = useState('hero');
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    localStorage.setItem('hogari_marai_landing_content_v1', JSON.stringify(data));
    setSaveSuccess(true);
    triggerGoldConfetti(0.5);
    setTimeout(() => setSaveSuccess(false), 2200);
  };

  const handleImportJSON = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result);
          onUpdateFullData(parsed);
          triggerGoldConfetti(0.5);
        } catch (err) {
          alert('Invalid JSON file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleAddGalleryCard = () => {
    const newItem = {
      id: `gal-${Date.now()}`,
      title: "New Editorial Feature",
      category: "Haute Couture",
      year: "2024",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85"
    };
    onUpdateFullData({
      ...data,
      gallery: {
        ...data.gallery,
        items: [...data.gallery.items, newItem]
      }
    });
  };

  const handleRemoveGalleryItem = (index) => {
    onUpdateFullData({
      ...data,
      gallery: {
        ...data.gallery,
        items: data.gallery.items.filter((_, idx) => idx !== index)
      }
    });
  };

  return (
    <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl border-l border-gold-300/40 flex flex-col animate-slideLeft">
      
      {/* Header */}
      <div className="px-6 py-4 bg-[#161413] text-white flex items-center justify-between border-b border-gold-500/30">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gold-400" />
          <div>
            <h3 className="font-serif font-bold text-base text-gold-200">CMS & Content Control</h3>
            <p className="text-[11px] text-gray-400">Edit every text, image & layout segment</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 bg-gray-50/70 px-4 pt-2 overflow-x-auto gap-1 text-xs">
        {[
          { id: 'hero', label: 'Hero', icon: Layers },
          { id: 'intro', label: 'Intro', icon: Type },
          { id: 'quote', label: 'Marked Card', icon: Sparkles },
          { id: 'gallery', label: 'Gallery', icon: ImageIcon },
          { id: 'contact', label: 'Contact', icon: MessageSquare },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-2 border-b-2 font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'border-gold-600 text-gold-700 font-semibold bg-white rounded-t-lg'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
        
        {/* HERO TAB */}
        {activeTab === 'hero' && (
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-gray-900 border-b pb-2 text-base">Hero Section</h4>
            
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Kicker</label>
              <input
                type="text"
                value={data.hero.kicker}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    hero: { ...data.hero, kicker: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Model Name</label>
              <input
                type="text"
                value={data.hero.name}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    hero: { ...data.hero, name: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30 font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Title / Profession</label>
              <input
                type="text"
                value={data.hero.title}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    hero: { ...data.hero, title: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Followers Count</label>
                <input
                  type="text"
                  value={data.hero.stats.count}
                  onChange={(e) => {
                    onUpdateFullData({
                      ...data,
                      hero: {
                        ...data.hero,
                        stats: { ...data.hero.stats, count: e.target.value }
                      }
                    });
                  }}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30 font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Rating</label>
                <input
                  type="text"
                  value={data.hero.stats.rating}
                  onChange={(e) => {
                    onUpdateFullData({
                      ...data,
                      hero: {
                        ...data.hero,
                        stats: { ...data.hero.stats, rating: e.target.value }
                      }
                    });
                  }}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30 font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Hero Model Photo</label>
              <div className="flex items-center gap-3 p-3 border border-gold-200 rounded-xl bg-gold-50/20">
                <img
                  src={data.hero.image}
                  alt="Hero Preview"
                  className="w-12 h-16 object-cover rounded-lg border border-gold-300"
                />
                <button
                  onClick={() => onOpenImagePicker('hero.image', data.hero.image, 'Update Hero Photo')}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-gold-500 text-white hover:bg-gold-600 shadow-sm flex items-center gap-1.5 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Change Photo</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* INTRO TAB */}
        {activeTab === 'intro' && (
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-gray-900 border-b pb-2 text-base">My Intro</h4>
            
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Section Title</label>
              <input
                type="text"
                value={data.intro.title}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    intro: { ...data.intro, title: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30 font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Editorial Description</label>
              <textarea
                rows={4}
                value={data.intro.description}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    intro: { ...data.intro, description: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30 resize-none leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Main Circle Avatar</label>
              <div className="flex items-center gap-3 p-3 border border-gold-200 rounded-xl bg-gold-50/20">
                <img
                  src={data.intro.mainImage}
                  alt="Intro Main"
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold-400"
                />
                <button
                  onClick={() => onOpenImagePicker('intro.mainImage', data.intro.mainImage, 'Update Avatar')}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-gold-500 text-white hover:bg-gold-600 shadow-sm flex items-center gap-1.5 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Change Avatar</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Satellite Circular Badges</label>
              <div className="space-y-2">
                {data.intro.satellites?.map((sat, idx) => (
                  <div key={sat.id || idx} className="flex items-center justify-between p-2.5 border rounded-lg bg-gray-50">
                    <div className="flex items-center gap-2">
                      <img src={sat.image} alt={sat.label} className="w-8 h-8 rounded-full object-cover border" />
                      <span className="text-xs font-medium text-gray-700">{sat.label}</span>
                    </div>
                    <button
                      onClick={() => onOpenImagePicker(`intro.satellites.${idx}.image`, sat.image, `Update ${sat.label}`)}
                      className="text-xs text-gold-700 hover:text-gold-900 font-medium"
                    >
                      Replace
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* QUOTE / MARKED BOX TAB */}
        {activeTab === 'quote' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h4 className="font-serif font-bold text-gray-900 text-base">Figma Marked Section</h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold">
                Client Highlight
              </span>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Badge</label>
              <input
                type="text"
                value={data.quoteBox.badge}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    quoteBox: { ...data.quoteBox, badge: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
              <input
                type="text"
                value={data.quoteBox.title}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    quoteBox: { ...data.quoteBox, title: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30 font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Editorial Quote Text</label>
              <textarea
                rows={5}
                value={data.quoteBox.text}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    quoteBox: { ...data.quoteBox, text: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30 resize-none leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Author Attribution</label>
              <input
                type="text"
                value={data.quoteBox.author}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    quoteBox: { ...data.quoteBox, author: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30"
              />
            </div>
          </div>
        )}

        {/* GALLERY TAB */}
        {activeTab === 'gallery' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h4 className="font-serif font-bold text-gray-900 text-base">Gallery Capsules</h4>
              <button
                onClick={handleAddGalleryCard}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-gold-500 hover:bg-gold-600 text-white shadow-sm flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-3">
              {data.gallery.items.map((item, idx) => (
                <div key={item.id || idx} className="p-3 border border-gray-200 rounded-xl bg-gray-50 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-16 object-cover rounded-lg border border-gold-300"
                  />
                  <div className="flex-1 min-w-0">
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const updated = [...data.gallery.items];
                        updated[idx].title = e.target.value;
                        onUpdateFullData({
                          ...data,
                          gallery: { ...data.gallery, items: updated }
                        });
                      }}
                      className="w-full text-xs font-semibold px-2 py-1 bg-white border rounded mb-1"
                    />
                    <input
                      type="text"
                      value={item.category}
                      onChange={(e) => {
                        const updated = [...data.gallery.items];
                        updated[idx].category = e.target.value;
                        onUpdateFullData({
                          ...data,
                          gallery: { ...data.gallery, items: updated }
                        });
                      }}
                      className="w-full text-[11px] text-gray-600 px-2 py-0.5 bg-white border rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => onOpenImagePicker(`gallery.items.${idx}.image`, item.image, `Change ${item.title}`)}
                      className="p-1.5 rounded-lg bg-gold-100 hover:bg-gold-200 text-gold-800 transition-colors"
                      title="Change Photo"
                    >
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleRemoveGalleryItem(idx)}
                      className="p-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 transition-colors"
                      title="Delete Item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT TAB */}
        {activeTab === 'contact' && (
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-gray-900 border-b pb-2 text-base">Contact & Socials</h4>
            
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={data.contact.email}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    contact: { ...data.contact, email: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Phone</label>
              <input
                type="text"
                value={data.contact.agentPhone}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    contact: { ...data.contact, agentPhone: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Agency</label>
              <input
                type="text"
                value={data.contact.agency}
                onChange={(e) => {
                  onUpdateFullData({
                    ...data,
                    contact: { ...data.contact, agency: e.target.value }
                  });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500/30"
              />
            </div>
          </div>
        )}

      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 flex flex-col gap-2">
        <button
          onClick={handleSave}
          className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-md transition-all flex items-center justify-center gap-2 ${
            saveSuccess
              ? 'bg-emerald-600 shadow-emerald-200'
              : 'gold-gradient-bg hover:shadow-gold-glow'
          }`}
        >
          {saveSuccess ? (
            <>
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Saved Successfully</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Save Local Changes</span>
            </>
          )}
        </button>

        <div className="grid grid-cols-3 gap-2 pt-1">
          <button
            onClick={onExport}
            className="py-2 px-2 text-[11px] font-medium border border-gray-300 hover:bg-gray-100 rounded-lg flex items-center justify-center gap-1 text-gray-700 transition-colors"
          >
            <Download className="w-3 h-3 text-gold-600" />
            <span>Export</span>
          </button>

          <label className="py-2 px-2 text-[11px] font-medium border border-gray-300 hover:bg-gray-100 rounded-lg flex items-center justify-center gap-1 text-gray-700 cursor-pointer transition-colors">
            <Upload className="w-3 h-3 text-gold-600" />
            <span>Import</span>
            <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
          </label>

          <button
            onClick={onReset}
            className="py-2 px-2 text-[11px] font-medium border border-red-200 text-red-600 hover:bg-red-50 rounded-lg flex items-center justify-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

      </div>

    </aside>
  );
}

