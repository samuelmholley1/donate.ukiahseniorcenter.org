'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/Button';
import { ZeffyModal } from '@/components/ZeffyModal';
import { COPY, PAYPAL_URL } from '@/lib/copy';

export default function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const donateButtonRef = useRef<HTMLButtonElement>(null);

  const handleZeffyClick = () => {
    setIsModalOpen(true);
  };

  const handlePayPalClick = () => {
    // Log analytics event
    if (typeof window !== 'undefined') {
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'paypal_click' });
      }
      console.log('[Analytics] paypal_click');
    }
    
    // Open PayPal in a popup window (more contained than full tab)
    const width = 800;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    window.open(
      PAYPAL_URL,
      'PayPal Donation',
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
    );
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-xl w-full text-center space-y-12">
            
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                {COPY.headline}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {COPY.subhead}
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <Button
                ref={donateButtonRef}
                variant="primary"
                onClick={handleZeffyClick}
                className="w-full max-w-md mx-auto block"
              >
                {COPY.primaryButton}
              </Button>
              
              <Button
                variant="secondary"
                onClick={handlePayPalClick}
                className="w-full max-w-md mx-auto block"
              >
                {COPY.secondaryButton}
              </Button>
            </div>
          </div>
        </main>

        {/* Minimal Footer */}
        <footer className="py-6 px-6 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-slate-600">
              <span className="font-medium">{COPY.orgName}</span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span>{COPY.ein}</span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="hidden sm:inline">{COPY.address}</span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                {COPY.privacyLink}
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Zeffy Modal */}
      <ZeffyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

// Type declaration for dataLayer
declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
