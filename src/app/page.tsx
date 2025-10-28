'use client';

import Image from 'next/image';
import { PAYPAL_URL } from '@/lib/copy';

export default function Donate() {
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
            
            {/* Zeffy Embed */}
            <div className="mb-6">
              <div style={{position:'relative',overflow:'hidden',height:'450px',width:'100%'}}>
                <iframe 
                  title='Donation form powered by Zeffy' 
                  style={{position: 'absolute', border: 0, top:0,left:0,bottom:0,right:0,width:'100%',height:'100%'}} 
                  src='https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center'
                ></iframe>
              </div>
            </div>
            
            <div className="mb-6">
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
    </>
  );
}
