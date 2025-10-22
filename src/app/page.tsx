'use client';

import { useState } from 'react';
import LoadingStates from '@/components/LoadingStates';

export default function Donate() {
  const [isLoading, setIsLoading] = useState(false);

  const handleZeffyDonate = () => {
    console.log('Zeffy donate button clicked');
    console.log('Window object:', typeof window);
    console.log('Zeffy modal function:', (window as any).zf_modal);
    console.log('Zeffy SDK:', (window as any).zeffySDK);
    
    // Try to trigger Zeffy modal manually if the data attribute doesn't work
    if (typeof window !== 'undefined' && (window as any).zf_modal) {
      console.log('Opening Zeffy modal via zf_modal');
      (window as any).zf_modal.open('https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center?modal=true');
    } else if (typeof window !== 'undefined' && (window as any).zeffySDK) {
      console.log('Opening Zeffy modal via zeffySDK');
      (window as any).zeffySDK.open('https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center?modal=true');
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

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="bg-blue-600 py-8">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Support Our Senior Center
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your donation helps provide meals, activities, and support to seniors in our community
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto py-16 px-8">
        
        {/* Primary Donation Button */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Make a Secure Donation
          </h2>
          
          <button
            className="zeffy-donation-button bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-16 rounded-2xl text-2xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mb-8 block mx-auto"
            data-zeffy-form-link="https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center?modal=true"
            onClick={handleZeffyDonate}
            disabled={isLoading}
          >
            {isLoading ? <LoadingStates size="sm" /> : 'Donate Now'}
          </button>

          <p className="text-lg text-gray-600 mb-8">
            Safe and secure donation processing
          </p>
        </div>

        {/* Tip Information - Simplified */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12 rounded-r-lg">
          <h3 className="font-semibold text-blue-800 mb-3 text-xl">
            💡 About Processing Tips
          </h3>
          <p className="text-blue-700 text-lg leading-relaxed">
            You may see an optional tip during checkout. This tip goes to the payment processor, not to us. 
            You can remove or adjust it if you prefer.
          </p>
        </div>

        {/* Alternative Payment */}
        <div className="text-center border-t-2 border-gray-200 pt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Prefer PayPal?
          </h3>
          <button
            onClick={handlePayPalDonate}
            disabled={isLoading}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-5 px-12 rounded-xl text-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <LoadingStates size="sm" /> : 'Donate with PayPal'}
          </button>
        </div>

        {/* Simple Impact Statement */}
        <div className="text-center mt-16 bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Your donation makes a difference
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every contribution helps us provide nutritious meals, engaging activities, 
            and essential services to seniors in our community.
          </p>
        </div>

        {/* Tax Information */}
        <div className="text-center mt-12 text-gray-500 text-lg">
          <p>Ukiah Senior Center is a 501(c)(3) nonprofit organization.</p>
          <p className="mt-2">Your donation is tax-deductible.</p>
        </div>
      </div>
    </div>
  );
}
