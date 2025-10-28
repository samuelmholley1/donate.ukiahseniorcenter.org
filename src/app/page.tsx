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
      <section className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
        <div className="max-w-[800px] w-full">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Ukiah Senior Center"
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
              priority
            />
          </div>

          <div 
            className="rounded-(--radius) bg-(--card) shadow-lg p-10 md:p-12 text-center relative"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Support the Ukiah Senior Center
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8">
              Your donation provides essential meals, activities, and support to seniors in our community.
            </p>
            
            <div className="space-y-4 flex flex-col items-center mb-6">
              <button 
                ref={donateButtonRef}
                onClick={handleZeffyClick}
                disabled={isLoading}
                data-testid="donate-open"
                className="h-12 w-full max-w-[320px] rounded-md bg-(--teal) text-white font-semibold text-lg hover:bg-(--tealD) focus:outline-none focus:ring-2 focus:ring-(--ring) inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 8V7a3 3 0 016 0v3H9z"/>
                </svg>
                Donate Securely
              </button>
              <a 
                href={PAYPAL_URL}
                className="h-11 w-full max-w-[320px] rounded-md border-2 border-(--border) text-(--ink) hover:bg-gray-50 inline-flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-(--ring) transition-colors"
              >
                Use PayPal instead
              </a>
            </div>
            
            <p className="text-sm mb-3" style={{ color: 'var(--mute)' }}>
              Encrypted • PCI-compliant • Tax-deductible receipts
            </p>
            
            {/* Payment method icons */}
            <div className="flex items-center justify-center gap-4 opacity-50">
              <span className="text-xs font-medium" style={{ color: 'var(--mute)' }}>We accept:</span>
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="3" fill="#1434CB"/>
                <text x="16" y="13" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">VISA</text>
              </svg>
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="3" fill="#EB001B"/>
                <circle cx="12" cy="10" r="7" fill="#FF5F00"/>
                <circle cx="20" cy="10" r="7" fill="#F79E1B"/>
              </svg>
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="3" fill="#006FCF"/>
                <text x="16" y="13" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">AMEX</text>
              </svg>
            </div>
          </div>
          
          <p className="mt-6 text-center text-xs" style={{ color: 'var(--mute)' }}>
            Ukiah Senior Center • 499 Leslie St, Ukiah, CA 95482<br/>
            (707) 462-4343 • 501(c)3 • Tax ID# 23-7258082
          </p>
        </div>
      </section>

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
