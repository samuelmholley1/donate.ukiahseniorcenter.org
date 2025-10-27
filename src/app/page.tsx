'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ZeffyModal } from '@/components/ZeffyModal';
import { PAYPAL_URL } from '@/lib/copy';

export default function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const donateButtonRef = useRef<HTMLButtonElement>(null);

  const handleZeffyClick = () => {
    setIsLoading(true);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[100vh] py-12 px-4">
        <div className="max-w-[640px] w-full">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Ukiah Senior Center"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
              priority
            />
          </div>

          <div 
            className="rounded-(--radius) bg-(--card) shadow-xl ring-1 ring-black/5 p-8 md:px-6 md:py-6 text-center relative overflow-hidden"
          >
            {/* Radial gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_50%_at_50%_0%,rgba(255,255,255,0.6),transparent_70%)]" />
            
            <h1 className="relative text-4xl font-semibold tracking-tight">
              Support the Ukiah Senior Center
            </h1>
            <p className="relative mt-3 text-[15px] leading-7 text-neutral-600">
              Your donation provides essential meals, activities, and support to seniors in our community.
            </p>
            
            <div className="relative mt-8 space-y-3 flex flex-col items-center">
              <button 
                ref={donateButtonRef}
                onClick={handleZeffyClick}
                disabled={isLoading}
                data-testid="donate-open"
                className="h-11 w-[280px] rounded-md bg-(--teal) text-white font-medium hover:bg-(--tealD) focus:outline-none focus:ring-2 focus:ring-(--ring) inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {/* 16px lock icon */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 8V7a3 3 0 016 0v3H9z"/>
                </svg>
                Donate Securely
              </button>
              <a 
                href={PAYPAL_URL}
                className="h-11 w-[280px] rounded-md border border-(--border) text-(--ink) hover:bg-neutral-50 inline-flex items-center justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-(--ring) transition-colors"
              >
                Use PayPal instead
              </a>
            </div>
            
            <p className="relative mt-4 text-xs text-neutral-500">
              Encrypted • PCI-compliant • Tax-deductible receipts
            </p>
            
            {/* Payment method icons */}
            <div className="relative mt-3 flex items-center justify-center gap-3 opacity-60">
              {/* Visa */}
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-auto">
                <rect width="24" height="16" rx="2" fill="#1434CB"/>
                <path d="M9.5 10L7 5h-2l3.5 10h2L15 5h-2L9.5 10Z" fill="white"/>
              </svg>
              {/* Mastercard */}
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-auto">
                <rect width="24" height="16" rx="2" fill="#EB001B"/>
                <circle cx="9" cy="8" r="6" fill="#FF5F00"/>
                <circle cx="15" cy="8" r="6" fill="#0066B2"/>
              </svg>
              {/* AmEx */}
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-auto">
                <rect width="24" height="16" rx="2" fill="#006FCF"/>
                <text x="12" y="10" fill="white" fontSize="6" fontWeight="bold" textAnchor="middle">AMEX</text>
              </svg>
              {/* ACH */}
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-auto">
                <rect width="24" height="16" rx="2" fill="#003366"/>
                <text x="12" y="10" fill="white" fontSize="5" fontWeight="bold" textAnchor="middle">ACH</text>
              </svg>
              {/* Apple Pay */}
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="h-4 w-auto">
                <rect width="24" height="16" rx="2" fill="black"/>
                <text x="12" y="10" fill="white" fontSize="5" fontWeight="bold" textAnchor="middle">Pay</text>
              </svg>
            </div>
          </div>
          
          <p className="mt-4 text-center text-[11px] text-neutral-500">
            Ukiah Senior Center • 499 Leslie St, Ukiah, CA 95482 • (707) 462-4343 • 501(c)3 • Tax ID# 23-7258082
          </p>
        </div>
      </section>      {/* Zeffy Modal */}
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
