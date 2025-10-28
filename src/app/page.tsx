'use client';

import Image from 'next/image';
import { PAYPAL_URL } from '@/lib/copy';

export default function Donate() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen py-16 px-4" aria-label="Donation page">
        <div className="max-w-[800px] w-full">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Ukiah Senior Center logo"
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
              priority
            />
          </div>

          <div 
            className="rounded-(--radius) bg-(--card) shadow-lg p-10 md:p-12 text-center relative"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              Support the Ukiah Senior Center
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', lineHeight: '1.8'}}>
              Your donation provides essential meals, activities, and support to seniors in our community.
            </p>
            
            {/* Important Tip Notice */}
            <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-400 rounded-lg text-left" role="alert" aria-labelledby="tip-notice">
              <h2 id="tip-notice" className="text-xl md:text-2xl font-bold mb-4 text-blue-900" style={{fontSize: 'clamp(1.25rem, 3vw, 1.5rem)'}}>
                💡 Important: Set Zeffy Tip to $0
              </h2>
              <p className="text-base md:text-lg text-blue-900 mb-4 leading-relaxed" style={{fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.8'}}>
                When you fill out the donation form below, Zeffy will ask if you want to leave a tip. 
                <strong className="font-bold"> Please set this tip amount to $0</strong> so 100% of your donation goes directly to the Ukiah Senior Center.
              </p>
              <div className="bg-white p-4 rounded border-2 border-blue-400">
                <Image
                  src="/zero_tip.png"
                  alt="Screenshot showing how to set Zeffy tip to zero during checkout. The image shows the tip selection area where you can click to enter a custom amount of zero dollars."
                  width={420}
                  height={210}
                  className="mx-auto"
                  quality={95}
                  priority
                />
                <p className="text-base text-gray-900 mt-4 text-center font-medium" style={{fontSize: 'clamp(0.9375rem, 2vw, 1rem)'}}>
                  Look for the tip section and click the custom amount to enter $0
                </p>
              </div>
            </div>
            
            {/* Zeffy Embed */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{fontSize: 'clamp(1.5rem, 3vw, 2rem)'}}>
                Donation Form
              </h2>
              <div style={{position:'relative',overflow:'hidden',height:'450px',width:'100%'}} role="region" aria-label="Zeffy donation form">
                <iframe 
                  title='Donation form powered by Zeffy - use this form to make a secure donation to Ukiah Senior Center' 
                  style={{position: 'absolute', border: 0, top:0,left:0,bottom:0,right:0,width:'100%',height:'100%'}} 
                  src='https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center'
                ></iframe>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-base mb-3 font-medium" style={{fontSize: 'clamp(1rem, 2vw, 1.125rem)'}}>
                Or use PayPal:
              </p>
              <a 
                href={PAYPAL_URL}
                className="h-14 w-full max-w-[400px] rounded-md border-2 border-(--teal) text-(--ink) hover:bg-gray-50 inline-flex items-center justify-center text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-(--ring) transition-colors"
                style={{fontSize: 'clamp(1rem, 2vw, 1.125rem)'}}
                aria-label="Donate using PayPal instead of Zeffy"
              >
                Use PayPal instead
              </a>
            </div>
            
            <p className="text-base mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(0.9375rem, 2vw, 1rem)', fontWeight: '500' }}>
              🔒 Encrypted • ✓ PCI-compliant • 📄 Tax-deductible receipts
            </p>
            
            {/* Payment method icons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <span className="text-base font-semibold" style={{ color: 'var(--ink)', fontSize: 'clamp(0.9375rem, 2vw, 1rem)' }}>We accept:</span>
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
          
          <address className="mt-8 text-center text-base not-italic" style={{ color: 'var(--copy)', fontSize: 'clamp(0.875rem, 2vw, 1rem)', lineHeight: '1.8' }}>
            <strong>Ukiah Senior Center</strong><br/>
            499 Leslie St, Ukiah, CA 95482<br/>
            <a href="tel:+17074624343" className="hover:underline focus:outline-none focus:ring-2 focus:ring-(--ring) rounded">(707) 462-4343</a> • 501(c)3 • Tax ID# 23-7258082
          </address>
        </div>
      </section>
    </>
  );
}
