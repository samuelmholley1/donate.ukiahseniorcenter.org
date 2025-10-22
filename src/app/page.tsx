'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
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
      <div className="min-h-screen bg-white flex flex-col">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-xl w-full text-center space-y-10">
            
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="Ukiah Senior Center"
                width={120}
                height={120}
                className="rounded-xl"
                priority
              />
            </div>

            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                {COPY.headline}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">
                {COPY.subhead}
              </p>
            </div>

            {/* Primary Donate Button - Centered */}
            <div className="pt-4 flex flex-col items-center">
              <Button
                ref={donateButtonRef}
                variant="primary"
                onClick={handleZeffyClick}
                className="w-auto px-16"
              >
                {COPY.primaryButton}
              </Button>
              
              {/* Trust badge */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure & encrypted donation
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Minimal Footer */}
        <footer className="py-8 px-6 border-t border-slate-100 bg-slate-50">
          <div className="max-w-7xl mx-auto space-y-4">
            {/* PayPal alternative - subtle */}
            <div className="text-center pb-2">
              <button
                onClick={handlePayPalClick}
                className="text-sm text-slate-500 hover:text-slate-700 underline transition-colors"
              >
                Prefer PayPal? Click here
              </button>
            </div>
            
            {/* Footer info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-slate-600">
              <span className="font-medium">{COPY.orgName}</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>{COPY.ein}</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="hidden sm:inline">{COPY.address}</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">
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
