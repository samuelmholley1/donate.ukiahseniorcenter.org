'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { ZeffyModal } from '@/components/ZeffyModal';
import { PAYPAL_URL, tagline, securityLine, footerLegal } from '@/lib/copy';

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
      <div className="space-y-6 mt-10">
        <h1 className="text-3xl font-bold text-center">
          Support the Ukiah Senior Center
        </h1>
        
        <p className="text-lg text-center text-gray-600">
          {tagline}
        </p>
        
        <div className="space-y-6">
          <div className="flex justify-center">
            <Button
              ref={donateButtonRef}
              variant="primary"
              onClick={handleZeffyClick}
              className="flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Donate Securely
            </Button>
          </div>
          
          <div className="text-center">
            <button
              onClick={handlePayPalClick}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Use PayPal instead
            </button>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            {securityLine}
          </div>
        </div>
        
        <footer className="text-center text-xs text-gray-400 border-t pt-4">
          {footerLegal}
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
