'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PAYPAL_URL } from '@/lib/copy';
import LoadingStates from '@/components/LoadingStates';
import { SiteNavigation } from '@/components/SiteNavigation';
import { SiteFooterContent } from '@/components/SiteFooterContent';

export default function Donate() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <SiteNavigation />
      
      {/* Hero Section */}
      <section className="relative bg-[#427d78] overflow-hidden" style={{ paddingBlock: '48px' }} aria-label="Donation page hero">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://ukiahseniorcenter.org/wp-content/uploads/2024/07/ukiah-senior-center-banner-image.jpg"
            fill
            className="object-cover"
            alt=""
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="text-center" style={{ maxWidth: '860px', marginInline: 'auto' }}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-['Jost',sans-serif] font-bold text-white" style={{ lineHeight: '1.15', marginBottom: 'var(--space-5)' }}>
              Support the Ukiah Senior Center
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-['Bitter',serif]" style={{ lineHeight: '1.5', fontWeight: '500' }}>
              Your donation provides essential meals, activities, and support to seniors in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#fafbff]" style={{ paddingBlock: 'var(--space-6)' }}>
        <div className="container">
          
          {/* Quick Value Prop */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-['Jost',sans-serif] font-bold text-[#427d78]" style={{ marginBottom: 'var(--space-3)', lineHeight: '1.2' }}>
              Make Your Donation
            </h2>
            <p className="text-lg md:text-xl text-[#666] font-['Bitter',serif]" style={{ marginBottom: 0, maxWidth: '800px', marginInline: 'auto', lineHeight: '1.7' }}>
              100% of donations support meals, activities, and services for seniors in Ukiah.
            </p>
          </div>

          {/* Quick Tip Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded p-4" style={{ marginBottom: 'var(--space-4)', maxWidth: '800px', marginInline: 'auto' }}>
            <p className="text-sm md:text-base text-blue-900 font-['Bitter',serif]" style={{ marginBottom: 0, lineHeight: '1.6' }}>
              <strong>💡 Tip:</strong> When prompted, set Zeffy tip to <strong>$0</strong> so 100% goes to seniors.
            </p>
          </div>

          {/* Donation Form Card */}
          <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="relative" style={{position:'relative',overflow:'hidden',height:'450px',width:'100%'}} role="region" aria-label="Zeffy donation form">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-lg z-10">
                  <LoadingStates size="lg" />
                  <p className="text-lg text-gray-600 font-['Bitter',serif] font-medium" style={{ marginTop: 'var(--space-3)' }}>Loading donation form...</p>
                  <div className="w-full max-w-md space-y-3" style={{ marginTop: 'var(--space-4)', paddingInline: 'var(--space-4)' }}>
                    <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              )}
              <iframe 
                title='Donation form powered by Zeffy - use this form to make a secure donation to Ukiah Senior Center' 
                style={{position: 'absolute', border: 0, top:0,left:0,bottom:0,right:0,width:'100%',height:'100%'}} 
                src='https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center'
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
          </div>

          {/* Alternative Payment Method */}
          <div className="card text-center" style={{ marginBottom: 'var(--space-6)' }}>
            <h3 className="text-3xl md:text-4xl font-['Jost',sans-serif] font-bold text-[#427d78]" style={{ marginBottom: 'var(--space-4)' }}>
              Prefer PayPal?
            </h3>
            <p className="text-lg md:text-xl text-[#666] font-['Bitter',serif]" style={{ marginBottom: 'var(--space-5)', maxWidth: '700px', marginInline: 'auto', lineHeight: '1.8' }}>
              You can also donate using PayPal:
            </p>
            <a 
              href={PAYPAL_URL}
              className="inline-flex items-center bg-[#427d78] hover:bg-[#5eb3a1] text-white rounded-sm font-['Montserrat',sans-serif] font-semibold text-base uppercase transition-all duration-300 border-2 border-[#427d78] hover:border-[#5eb3a1] shadow-md"
              style={{ padding: '20px 40px', minHeight: '60px' }}
              aria-label="Donate using PayPal instead of Zeffy"
            >
              Donate via PayPal
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
            <h3 className="text-3xl md:text-4xl font-['Jost',sans-serif] font-bold text-[#427d78] text-center" style={{ marginBottom: 'var(--space-5)' }}>
              Your Donation is Secure
            </h3>
            <p className="text-center text-lg md:text-xl text-[#666] font-['Bitter',serif] font-medium" style={{ marginBottom: 'var(--space-5)', maxWidth: '800px', marginInline: 'auto', lineHeight: '1.8' }}>
              🔒 Encrypted • ✓ PCI-compliant • 📄 Tax-deductible receipts
            </p>
            
            {/* Payment method icons */}
            <div className="flex flex-wrap items-center justify-center" style={{ gap: 'var(--space-4)' }}>
              <span className="text-base md:text-lg font-['Montserrat',sans-serif] font-semibold text-[#666]">We accept:</span>
              <svg width="56" height="40" viewBox="0 0 32 20" fill="none" aria-label="Visa">
                <rect width="32" height="20" rx="3" fill="#1434CB"/>
                <text x="16" y="13" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">VISA</text>
              </svg>
              <svg width="56" height="40" viewBox="0 0 32 20" fill="none" aria-label="Mastercard">
                <rect width="32" height="20" rx="3" fill="#EB001B"/>
                <circle cx="12" cy="10" r="7" fill="#FF5F00"/>
                <circle cx="20" cy="10" r="7" fill="#F79E1B"/>
              </svg>
              <svg width="56" height="40" viewBox="0 0 32 20" fill="none" aria-label="American Express">
                <rect width="32" height="20" rx="3" fill="#006FCF"/>
                <text x="16" y="13" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">AMEX</text>
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white" style={{ paddingBlock: 'var(--space-6)' }}>
        <div className="container">
          <address className="text-center not-italic text-lg md:text-xl text-[#666] font-['Bitter',serif]" style={{ lineHeight: '1.8' }}>
            <strong className="text-[#427d78] font-['Jost',sans-serif] text-2xl md:text-3xl block font-bold" style={{ marginBottom: 'var(--space-3)' }}>Ukiah Senior Center</strong>
            <span className="text-xl block" style={{ marginBottom: 'var(--space-2)' }}>499 Leslie St, Ukiah, CA 95482</span>
            <div className="text-xl">
              <a href="tel:+17074624343" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">(707) 462-4343</a>
              <span className="mx-2">•</span>
              <span>501(c)3 Non-Profit • Tax ID# 23-7258082</span>
            </div>
          </address>
        </div>
      </section>

      <SiteFooterContent />
    </>
  );
}
