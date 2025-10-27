'use client';

import { useState, useRef } from 'react';
import { ZeffyModal } from '@/components/ZeffyModal';
import { PAYPAL_URL, tagline, securityLine, footerLegal } from '@/lib/copy';

export default function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const donateButtonRef = useRef<HTMLButtonElement>(null);

  const handleZeffyClick = () => {
    setIsLoading(true);
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
    
    // Open PayPal in a popup window
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
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-[480px] w-full space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--ink)' }}>
              Support the Ukiah Senior Center
            </h1>
            
            <p className="text-base md:text-lg leading-relaxed text-neutral-600">
              {tagline}
            </p>
          </div>
          
          <div className="space-y-4 flex flex-col items-center">
            <button
              ref={donateButtonRef}
              onClick={handleZeffyClick}
              disabled={isLoading}
              className="h-14 w-full max-w-[320px] rounded-xl font-semibold text-base hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--accent)',
                color: '#ffffff'
              }}
              data-testid="donate-open"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Opening…
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Donate Securely
                </>
              )}
            </button>
            
            <button
              onClick={handlePayPalClick}
              className="h-14 w-full max-w-[320px] rounded-xl border-2 font-semibold text-base hover:bg-neutral-50 transition-all"
              style={{ 
                borderColor: 'var(--border)',
                color: 'var(--ink)'
              }}
            >
              Use PayPal instead
            </button>
          </div>
          
          <div className="text-center space-y-6 pt-4">
            <div className="text-sm text-neutral-500">
              {securityLine}
            </div>
            
            <footer className="text-xs text-neutral-400 leading-relaxed">
              {footerLegal}
            </footer>
          </div>
        </div>
      </div>

      {/* Zeffy Modal */}
      <ZeffyModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setIsLoading(false);
        }} 
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
