'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
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
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Support the Ukiah Senior Center
        </h1>
        
        <div className="mt-12 space-y-8">
          <p className="text-xl text-center text-gray-600">
            {tagline}
          </p>
          
          <div className="space-y-6">
            <div className="flex justify-center">
              <Button
                ref={donateButtonRef}
                variant="primary"
                onClick={handleZeffyClick}
                disabled={isLoading}
                className="flex items-center gap-2 rounded-full w-64"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                )}
                {isLoading ? 'Loading...' : 'Donate Securely'}
              </Button>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handlePayPalClick}
                className="bg-transparent border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg w-64 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Use PayPal instead
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-500">
              {securityLine}
            </div>
            
            {/* Credit Card Logos */}
            <div className="flex justify-center items-center space-x-4 opacity-60">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v16H4V4zm1 1v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
              </svg>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v16H4V4zm1 1v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
              </svg>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v16H4V4zm1 1v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
              </svg>
            </div>
          </div>
          
          <footer className="text-center text-sm text-gray-600 pt-8 pb-8">
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
