import React, { useState } from 'react';
import { Send, CheckCircle2, Globe, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, PinterestIcon, BehanceIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection({
  data,
  isEditMode,
  onUpdateText
}) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setIsSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d5a73e', '#e8c374', '#c28e2d']
    });
  };

  const renderSocialIcon = (name) => {
    switch (name?.toLowerCase()) {
      case 'instagram':
        return <InstagramIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedInIcon className="w-4 h-4" />;
      case 'pinterest':
        return <PinterestIcon className="w-4 h-4" />;
      case 'behance':
        return <BehanceIcon className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-gold-300/40 relative overflow-hidden">
        
        {/* Subtle decorative gold top bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 gold-gradient-bg" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Heading & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-[1.5px] bg-gold-500" />
                <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
                  {data.sectionTag || 'CONNECT'}
                </span>
              </div>

              {/* "Short Message" Heading */}
              <h2
                contentEditable={isEditMode}
                suppressContentEditableWarning
                onBlur={(e) => onUpdateText('contact.title', e.currentTarget.innerText)}
                className={`text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3 tracking-tight ${
                  isEditMode ? 'editable-field' : ''
                }`}
              >
                {data.title || "Short Message"}
              </h2>

              <p
                contentEditable={isEditMode}
                suppressContentEditableWarning
                onBlur={(e) => onUpdateText('contact.subtitle', e.currentTarget.innerText)}
                className={`text-sm text-gray-600 font-light mb-6 leading-relaxed ${
                  isEditMode ? 'editable-field' : ''
                }`}
              >
                {data.subtitle || "Available for worldwide fashion weeks, magazine editorials & brand partnerships."}
              </p>

              {/* Direct Details */}
              <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateText('contact.email', e.currentTarget.innerText)}
                    className={isEditMode ? 'editable-field' : ''}
                  >
                    {data.email || "hogari@maraistudio.com"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateText('contact.agentPhone', e.currentTarget.innerText)}
                    className={isEditMode ? 'editable-field' : ''}
                  >
                    {data.agentPhone || "+33 (0)1 42 68 55 90"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateText('contact.agency', e.currentTarget.innerText)}
                    className={isEditMode ? 'editable-field' : ''}
                  >
                    {data.agency || "Elite Paris / Storm Models London"}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Social Icons */}
            <div className="pt-8">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Follow My Journeys
              </p>
              <div className="flex items-center gap-3">
                {data.socials?.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white hover:bg-gold-500 hover:text-white text-gray-700 shadow-md hover:shadow-gold-glow flex items-center justify-center transition-all duration-300 hover:-translate-y-1 animate-float-medium border border-gray-200 hover:border-gold-500"
                    style={{ animationDelay: `${idx * 0.4}s` }}
                    title={soc.name}
                  >
                    {renderSocialIcon(soc.name)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white/70 rounded-2xl p-6 sm:p-8 border border-gold-200/60 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center mb-4 shadow-inner animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Message Delivered</h3>
                <p className="text-sm text-gray-600 max-w-sm mb-6">
                  Thank you for reaching out. Hogari's management team will review your inquiry and reply within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 rounded-full text-xs font-semibold text-gold-700 bg-gold-100 hover:bg-gold-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Jean-Luc Dupont"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@luxurybrand.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Message / Project Brief</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Details about your runway, editorial shoot, campaign, or collaboration dates..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all resize-none"
                  />
                </div>

                {/* Floating Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-sm font-semibold tracking-wider text-white gold-gradient-bg shadow-gold-glow hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 shine-hover"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Short Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-gray-500 space-y-2">
        <p className="font-serif tracking-wider text-gray-700 font-medium">
          HOGARI MARAI • OFFICIAL FASHION PORTFOLIO
        </p>
        <p className="text-[11px] text-gray-400">
          Recreated with precision from the Figma Specification • Fully Responsive & In-Browser Editable
        </p>
      </footer>

    </section>
  );
}
