'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
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
        <div className="max-w-[520px] w-full">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-xl">
                <Image
                  src="/logo.png"
                  alt="Ukiah Senior Center"
                  width={120}
                  height={120}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--ink)' }}>
                Support the Ukiah Senior Center
              </h1>
              
              <p className="text-base md:text-lg leading-relaxed text-neutral-600">
                {tagline}
              </p>
            </div>
            
            {/* Visual Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>
              <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>
            </div>
            
            <div className="space-y-4">
              <button
                ref={donateButtonRef}
                onClick={handleZeffyClick}
                disabled={isLoading}
                className="h-16 w-full rounded-2xl font-semibold text-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-offset-2 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                style={{ 
                  backgroundColor: 'var(--accent)',
                  color: '#ffffff'
                }}
                data-testid="donate-open"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Opening…
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Donate Securely
                  </>
                )}
              </button>
              
              <button
                onClick={handlePayPalClick}
                className="h-14 w-full rounded-2xl border-2 font-semibold text-base hover:bg-neutral-50 transition-all hover:scale-[1.01]"
                style={{ 
                  borderColor: 'var(--border)',
                  color: 'var(--ink)'
                }}
              >
                Use PayPal instead
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-3 text-sm text-neutral-500 flex-wrap">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Encrypted</span>
              </div>
              <span className="text-neutral-300">•</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
                <span>PCI-compliant</span>
              </div>
              <span className="text-neutral-300">•</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Tax-deductible</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center text-xs text-neutral-400 leading-relaxed">
            {footerLegal}
          </footer>
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
