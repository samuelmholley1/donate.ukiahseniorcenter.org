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
      <section className="relative bg-[#427d78] py-20 overflow-hidden" aria-label="Donation page hero">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://ukiahseniorcenter.org/wp-content/uploads/2024/07/ukiah-senior-center-banner-image.jpg"
            fill
            className="object-cover"
            alt=""
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1080px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Jost',sans-serif] font-bold text-white mb-6">
            Support the Ukiah Senior Center
          </h1>
          <p className="text-xl md:text-2xl text-white/95 font-['Bitter',serif] max-w-3xl mx-auto leading-relaxed">
            Your donation provides essential meals, activities, and support to seniors in our community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#fafbff] py-16 px-4">
        <div className="max-w-[1080px] mx-auto">
          
          {/* Mission Statement Card */}
          <div className="bg-white rounded-lg shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.15)] p-8 md:p-10 mb-8">
            <h2 className="text-3xl font-['Jost',sans-serif] font-bold text-[#427d78] mb-4 text-center">
              Enhancing Quality of Life for Seniors
            </h2>
            <p className="text-lg text-[#666] font-['Bitter',serif] leading-relaxed text-center">
              For more than 50 years, we've been serving our seniors and disabled community. Every donation helps us continue this vital mission.
            </p>
            <p className="text-lg text-[#666] font-['Bitter',serif] leading-relaxed text-center">
              For more than 50 years, we've been serving our seniors and disabled community. Every donation helps us continue this vital mission.
            </p>
          </div>

          {/* Important Tip Notice */}
          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6 md:p-8 mb-8 shadow-md">
            <h2 className="text-2xl md:text-3xl font-['Jost',sans-serif] font-bold text-blue-900 mb-4">
              💡 Important: Set Zeffy Tip to $0
            </h2>
            <p className="text-base md:text-lg text-blue-900 font-['Bitter',serif] mb-6 leading-relaxed">
              When you fill out the donation form below, Zeffy will ask if you want to leave a tip. 
              <strong className="font-bold"> Please set this tip amount to $0</strong> so 100% of your donation goes directly to the Ukiah Senior Center.
            </p>
            <div className="bg-white p-4 rounded-lg border-2 border-blue-400">
              <Image
                src="/zero_tip.png"
                alt="Screenshot showing how to set Zeffy tip to zero during checkout"
                width={420}
                height={210}
                quality={95}
                className="mx-auto rounded"
              />
              <p className="text-sm md:text-base text-gray-900 mt-4 text-center font-['Bitter',serif] font-semibold">
                Look for the tip section and click the custom amount to enter $0
              </p>
            </div>
          </div>
            
          {/* Donation Form Card */}
          <div className="bg-white rounded-lg shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.15)] p-8 md:p-10 mb-8">
            <h2 className="text-3xl font-['Jost',sans-serif] font-bold text-[#427d78] mb-6 text-center">
              Make Your Donation
            </h2>
            
            <div className="relative" style={{position:'relative',overflow:'hidden',height:'450px',width:'100%'}} role="region" aria-label="Zeffy donation form">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-lg z-10">
                  <LoadingStates size="lg" />
                  <p className="mt-4 text-lg text-gray-600 font-['Bitter',serif] font-medium">Loading donation form...</p>
                  <div className="mt-6 w-full max-w-md space-y-3 px-6">
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
          <div className="bg-white rounded-lg shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.15)] p-8 md:p-10 mb-8 text-center">
            <h3 className="text-2xl font-['Jost',sans-serif] font-bold text-[#427d78] mb-4">
              Prefer PayPal?
            </h3>
            <p className="text-base md:text-lg text-[#666] font-['Bitter',serif] mb-6">
              You can also donate using PayPal:
            </p>
            <a 
              href={PAYPAL_URL}
              className="inline-block bg-[#427d78] hover:bg-[#5eb3a1] text-white px-8 py-4 rounded-sm font-['Montserrat',sans-serif] font-semibold text-sm uppercase transition-all duration-300 border-2 border-[#427d78] hover:border-[#5eb3a1] shadow-md"
              aria-label="Donate using PayPal instead of Zeffy"
            >
              Donate via PayPal
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-lg shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.15)] p-8 md:p-10 mb-8">
            <h3 className="text-2xl font-['Jost',sans-serif] font-bold text-[#427d78] mb-6 text-center">
              Your Donation is Secure
            </h3>
            <p className="text-center text-base md:text-lg text-[#666] font-['Bitter',serif] mb-6 font-medium">
              🔒 Encrypted • ✓ PCI-compliant • 📄 Tax-deductible receipts
            </p>
            
            {/* Payment method icons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm md:text-base font-['Montserrat',sans-serif] font-semibold text-[#666]">We accept:</span>
              <svg width="40" height="28" viewBox="0 0 32 20" fill="none" aria-label="Visa">
                <rect width="32" height="20" rx="3" fill="#1434CB"/>
                <text x="16" y="13" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">VISA</text>
              </svg>
              <svg width="40" height="28" viewBox="0 0 32 20" fill="none" aria-label="Mastercard">
                <rect width="32" height="20" rx="3" fill="#EB001B"/>
                <circle cx="12" cy="10" r="7" fill="#FF5F00"/>
                <circle cx="20" cy="10" r="7" fill="#F79E1B"/>
              </svg>
              <svg width="40" height="28" viewBox="0 0 32 20" fill="none" aria-label="American Express">
                <rect width="32" height="20" rx="3" fill="#006FCF"/>
                <text x="16" y="13" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">AMEX</text>
              </svg>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-white rounded-lg shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.15)] p-8 md:p-10">
            <h3 className="text-2xl font-['Jost',sans-serif] font-bold text-[#427d78] mb-6 text-center">
              Your Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🍽️</div>
                <h4 className="text-lg font-['Jost',sans-serif] font-bold text-[#427d78] mb-2">Nutritious Meals</h4>
                <p className="text-sm text-[#666] font-['Bitter',serif]">Supporting our dining room and meal delivery programs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="text-lg font-['Jost',sans-serif] font-bold text-[#427d78] mb-2">Activities & Events</h4>
                <p className="text-sm text-[#666] font-['Bitter',serif]">Funding social, creative, and health activities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🚐</div>
                <h4 className="text-lg font-['Jost',sans-serif] font-bold text-[#427d78] mb-2">Transportation</h4>
                <p className="text-sm text-[#666] font-['Bitter',serif]">Providing rides to medical appointments</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-12">
        <div className="max-w-[1080px] mx-auto px-4">
          <address className="text-center not-italic text-base md:text-lg text-[#666] font-['Bitter',serif] leading-relaxed">
            <strong className="text-[#427d78] font-['Jost',sans-serif] text-xl">Ukiah Senior Center</strong><br/>
            499 Leslie St, Ukiah, CA 95482<br/>
            <a href="tel:+17074624343" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">(707) 462-4343</a> • 
            501(c)3 Non-Profit • Tax ID# 23-7258082
          </address>
        </div>
      </section>

      <SiteFooterContent />
    </>
  );
}
