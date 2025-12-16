import React from 'react';

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#ec4899;#3b82f6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#ec4899;#3b82f6;#8b5cf6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#ec4899">
              <animate attributeName="stop-color" values="#ec4899;#3b82f6;#8b5cf6;#ec4899" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* 3x3 Grid of Rounded Squares */}
        <rect x="10" y="10" width="20" height="20" rx="5" fill="url(#grid-gradient)" />
        <rect x="40" y="10" width="20" height="20" rx="5" fill="url(#grid-gradient)" />
        <rect x="70" y="10" width="20" height="20" rx="5" fill="url(#grid-gradient)" />
        
        <rect x="10" y="40" width="20" height="20" rx="5" fill="url(#grid-gradient)" />
        {/* Center removed for 'Open' look, added small circle for 'Labs' focus */}
        <circle cx="50" cy="50" r="8" fill="url(#grid-gradient)" />
        <rect x="70" y="40" width="20" height="20" rx="5" fill="url(#grid-gradient)" />
        
        <rect x="10" y="70" width="20" height="20" rx="5" fill="url(#grid-gradient)" />
        <rect x="40" y="70" width="20" height="20" rx="5" fill="url(#grid-gradient)" />
        <rect x="70" y="70" width="20" height="20" rx="5" fill="url(#grid-gradient)" />
      </svg>
      
      <div className="flex flex-col justify-center items-start">
        <span className="text-xl font-bold leading-none animated-gradient-text">
          OpenGridLabs
        </span>
      </div>
    </div>
  );
}