import React from 'react';
import { Globe } from 'lucide-react';

export default function SocialIcon({ name, className = "w-4 h-4" }) {
  switch (name?.toLowerCase()) {
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case 'pinterest':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="4" x2="12" y2="20"></line>
          <path d="M8 8a4 4 0 1 1 8 0c0 3-2 6-5 6"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      );
    case 'behance':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8h5a2.5 2.5 0 0 1 0 5H3V8z"></path>
          <path d="M3 13h5.5a2.5 2.5 0 0 1 0 5H3v-5z"></path>
          <path d="M14 13.5a3.5 3.5 0 1 0 4.5-3.3c-1.5-.4-4.5.3-4.5 3.3z"></path>
          <line x1="15" y1="7" x2="19" y2="7"></line>
        </svg>
      );
    default:
      return <Globe className={className} />;
  }
}

