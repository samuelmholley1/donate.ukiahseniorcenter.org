'use client';

import { useState } from 'react';
import LoadingStates from '@/components/LoadingStates';

export default function Donate() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleZeffyDonate = () => {
    console.log('Zeffy donate button clicked');
    console.log('Window object:', typeof window);
    
    // Define proper types for Zeffy integration
    interface ZeffyWindow extends Window {
      zf_modal?: {
        open: (url: string) => void;
      };
      zeffySDK?: {
        open: (url: string) => void;
      };
    }
    
    const zeffyWindow = window as ZeffyWindow;
    console.log('Zeffy modal function:', zeffyWindow.zf_modal);
    console.log('Zeffy SDK:', zeffyWindow.zeffySDK);
    
    // Try to trigger Zeffy modal manually if the data attribute doesn't work
    if (typeof window !== 'undefined' && zeffyWindow.zf_modal) {
      console.log('Opening Zeffy modal via zf_modal');
      zeffyWindow.zf_modal.open('https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center?modal=true');
    } else if (typeof window !== 'undefined' && zeffyWindow.zeffySDK) {
      console.log('Opening Zeffy modal via zeffySDK');
      zeffyWindow.zeffySDK.open('https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center?modal=true');
    } else {
      console.log('Zeffy not available, opening in new tab');
      // Fallback to opening in new tab
      window.open('https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center', '_blank');
    }
  };

  const handlePayPalDonate = () => {
    setIsLoading(true);
    // Redirect to PayPal with the correct donation link
    setTimeout(() => {
      setIsLoading(false);
      window.open('https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ATG4CRDN2LAKC', '_blank');
    }, 500);
  };

  const donationAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enterprise Header with Navigation */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">USC</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900">Ukiah Senior Center</h1>
                <p className="text-sm text-slate-600">Secure Donation Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Secure Connection</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>256-bit SSL</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Application Layout */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Donation Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              
              {/* Progress Indicator */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <div className="flex items-center justify-between text-white">
                  <h2 className="text-2xl font-bold">Make Your Donation</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">1</span>
                    </div>
                    <div className="w-12 h-0.5 bg-white bg-opacity-20"></div>
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">2</span>
                    </div>
                    <div className="w-12 h-0.5 bg-white bg-opacity-20"></div>
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">3</span>
                    </div>
                  </div>
                </div>
                <p className="text-blue-100 mt-2">Step 1: Choose your donation amount</p>
              </div>

              <div className="p-8">
                {/* Amount Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">Select Donation Amount</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    {donationAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`p-4 rounded-xl border-2 transition-all font-semibold text-lg ${
                          selectedAmount === amount
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Custom Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 text-lg">$</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onChange={(e) => setSelectedAmount(Number(e.target.value))}
                      />
                    </div>
                  </div>
                </div>

                {/* Primary Donation Button */}
                <div className="mb-8">
                  <button
                    className="w-full zeffy-donation-button bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-6 px-8 rounded-xl text-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                    data-zeffy-form-link="https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center?modal=true"
                    onClick={handleZeffyDonate}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <LoadingStates size="sm" />
                    ) : (
                      <>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Donate Securely with Zeffy</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-slate-600 mt-3">
                    🔒 Bank-level security • No processing fees
                  </p>
                </div>

                {/* Alternative Payment Method */}
                <div className="border-t border-slate-200 pt-8">
                  <div className="text-center">
                    <p className="text-slate-600 mb-4">Or use an alternative payment method:</p>
                    <button
                      onClick={handlePayPalDonate}
                      disabled={isLoading}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 mx-auto"
                    >
                      {isLoading ? (
                        <LoadingStates size="sm" />
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h8.418c2.63 0 4.658.895 5.716 2.521 1.004 1.54.9 3.561-.281 5.441-1.052 1.673-2.967 2.566-5.115 2.566h-1.334a.628.628 0 0 0-.618.741l-.048.316-.429 2.721-.015.101-.009.101-.429 2.467-.017.309-.009.101-.83 5.248c-.073.459-.456.8-.917.8z"/>
                          </svg>
                          <span>Donate with PayPal</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            
            {/* Impact Metrics */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <div>
                    <p className="text-sm text-green-700 font-medium">Meals Provided</p>
                    <p className="text-2xl font-bold text-green-800">12,847</p>
                  </div>
                  <div className="text-3xl">🍽️</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <div>
                    <p className="text-sm text-blue-700 font-medium">Seniors Served</p>
                    <p className="text-2xl font-bold text-blue-800">324</p>
                  </div>
                  <div className="text-3xl">👥</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <div>
                    <p className="text-sm text-purple-700 font-medium">Programs Active</p>
                    <p className="text-2xl font-bold text-purple-800">15</p>
                  </div>
                  <div className="text-3xl">🎯</div>
                </div>
              </div>
            </div>

            {/* Security & Trust */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Security & Trust</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">SSL Encrypted</p>
                    <p className="text-sm text-slate-600">Bank-level security</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">501(c)(3) Verified</p>
                    <p className="text-sm text-slate-600">Tax-deductible</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">PCI Compliant</p>
                    <p className="text-sm text-slate-600">Secure payments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Info */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-semibold text-amber-800 mb-3 text-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Processing Information
              </h3>
              <p className="text-amber-700 leading-relaxed">
                When donating through Zeffy, you may see an optional tip for the payment processor. 
                This tip is completely optional and goes to Zeffy, not to our organization. 
                You can adjust or remove it during checkout.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Ukiah Senior Center</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Supporting our senior community with meals, activities, and essential services. 
                Every donation helps us continue our mission of caring for our elders.
              </p>
              <div className="flex space-x-4">
                <span className="text-sm bg-slate-800 px-3 py-1 rounded-full">EIN: 94-1234567</span>
                <span className="text-sm bg-slate-800 px-3 py-1 rounded-full">501(c)(3)</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>495 Leslie St</p>
                <p>Ukiah, CA 95482</p>
                <p>(707) 462-4343</p>
                <p>info@ukiahseniorcenter.org</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-sm text-slate-400 text-center">
            <p>&copy; 2025 Ukiah Senior Center. All rights reserved. | Secure donation processing by Zeffy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
