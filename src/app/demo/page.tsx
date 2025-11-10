'use client';

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
      
      {/* Main Content */}
      <section className="bg-[#fafbff]" style={{ paddingBlock: 'var(--space-4)' }}>
        <div className="container">
          
          {/* Page Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-['Jost',sans-serif] font-bold text-[#427d78]" style={{ marginBottom: 'var(--space-2)', lineHeight: '1.2' }}>
              Support the Ukiah Senior Center
            </h1>
            <p className="text-base md:text-lg text-[#666] font-['Bitter',serif]" style={{ marginBottom: 0, maxWidth: '800px', marginInline: 'auto', lineHeight: '1.6' }}>
              100% of donations support meals, activities, and services for seniors in Ukiah.
            </p>
          </div>

          {/* Important Tip Notice */}
          <div className="bg-red-50 border-2 border-red-400 rounded-lg" style={{ padding: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <h3 className="text-base md:text-lg font-['Jost',sans-serif] font-bold text-red-900 text-center" style={{ marginBottom: 'var(--space-2)', lineHeight: '1.3' }}>
              ⚠️ Set Zeffy Tip to $0
            </h3>
            <p className="text-xs md:text-sm text-red-900 font-['Bitter',serif] text-center" style={{ marginBottom: 'var(--space-2)', maxWidth: '700px', marginInline: 'auto', lineHeight: '1.6' }}>
              When filling out the form below, <strong>set the tip to $0</strong> so you don&apos;t pay any fees.
            </p>
            <div className="bg-white rounded border border-red-300" style={{ padding: 'var(--space-2)', maxWidth: '400px', marginInline: 'auto' }}>
              <img
                src="/zero_tip.png"
                alt="Set Zeffy tip to zero"
                className="rounded"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  imageRendering: 'pixelated'
                }}
              />
            </div>
          </div>

          {/* Donation Form Card */}
          <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="text-center" style={{ marginBottom: 'var(--space-3)' }}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-['Jost',sans-serif] font-bold text-[#427d78]" style={{ marginBottom: 'var(--space-2)', lineHeight: '1.2' }}>Make Your Donation</h2>
              <p className="text-base md:text-lg text-[#666] font-['Bitter',serif]" style={{ marginBottom: 0, maxWidth: '600px', marginInline: 'auto', lineHeight: '1.5' }}>Choose your donation amount below</p>
            </div>
            <div className="bg-gray-50 rounded-lg border-4 border-[#427d78] relative" style={{ padding: 'var(--space-3)' }}>
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
              <div style={{position:'relative',overflow:'hidden',height:'1200px',width:'100%'}}>
                <iframe 
                  title='Donation form powered by Zeffy - use this form to make a secure donation to Ukiah Senior Center' 
                  style={{position: 'absolute', border: 0, top:0,left:0,bottom:0,right:0,width:'100%',height:'100%'}} 
                  src='https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center'
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Alternative Payment Method */}
          <div className="card text-center" style={{ marginBottom: 'var(--space-4)' }}>
            <h3 className="text-2xl md:text-3xl font-['Jost',sans-serif] font-bold text-[#427d78]" style={{ marginBottom: 'var(--space-3)' }}>
              Prefer PayPal?
            </h3>
            <p className="text-base md:text-lg text-[#666] font-['Bitter',serif]" style={{ marginBottom: 'var(--space-4)', maxWidth: '700px', marginInline: 'auto', lineHeight: '1.7' }}>
              You can also donate using PayPal:
            </p>
            <a 
              href={PAYPAL_URL}
              className="inline-flex items-center bg-[#427d78] hover:bg-[#5eb3a1] text-white rounded-sm font-['Montserrat',sans-serif] font-semibold text-sm md:text-base uppercase transition-all duration-300 border-2 border-[#427d78] hover:border-[#5eb3a1] shadow-md"
              style={{ padding: '16px 32px', minHeight: '52px' }}
              aria-label="Donate using PayPal instead of Zeffy"
            >
              Donate via PayPal
            </a>
          </div>

        </div>
      </section>

      <SiteFooterContent />
    </>
  );
}
