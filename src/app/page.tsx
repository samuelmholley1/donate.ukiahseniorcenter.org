'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useToast } from '@/components/Toast';
import Modal from '@/components/Modal';
import LoadingStates from '@/components/LoadingStates';

export default function Donate() {
  const [isZeffyOpen, setIsZeffyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleZeffyDonate = () => {
    setIsZeffyOpen(true);
    // TODO: Initialize Zeffy payment widget
  };

  const handlePayPalDonate = () => {
    setIsLoading(true);
    // TODO: Redirect to PayPal
    setTimeout(() => {
      setIsLoading(false);
      window.open('https://paypal.me/ukiahseniorcenter', '_blank');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto py-16 px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Support Ukiah Senior Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your donation helps us provide vital services, meals, and programs 
            to seniors in our community. Every contribution makes a difference.
          </p>
        </div>

        {/* Main Donation Card */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-8">
          
          {/* Zephy Donation Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Make a Secure Donation
            </h2>
            <p className="text-gray-600 mb-8">
              Choose your donation amount and method below
            </p>
            
            <button
              onClick={handleZeffyDonate}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-2xl text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <LoadingStates size="sm" /> : 'Donate Now'}
            </button>
          </div>

          {/* Tip Opt-out Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-2">
              💡 About Processing Tips
            </h3>
            <p className="text-blue-700 text-sm">
              During checkout, you may see an option to add a tip to cover processing fees. 
              This tip is optional and goes to the payment processor, not to Ukiah Senior Center. 
              You can choose to remove or adjust this tip if you prefer.
            </p>
          </div>

          {/* PayPal Alternative */}
          <div className="border-t pt-8">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Prefer a different payment method?</p>
              <button
                onClick={handlePayPalDonate}
                disabled={isLoading}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? <LoadingStates size="sm" /> : 'Donate via PayPal'}
              </button>
            </div>
          </div>
        </div>

        {/* Impact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="font-semibold text-gray-800 mb-2">Nutritious Meals</h3>
            <p className="text-gray-600 text-sm">Your donation helps provide healthy meals to seniors in need</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-gray-800 mb-2">Activities & Programs</h3>
            <p className="text-gray-600 text-sm">Fund engaging activities that keep our seniors active and social</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-semibold text-gray-800 mb-2">Community Support</h3>
            <p className="text-gray-600 text-sm">Enable transportation, wellness programs, and vital services</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Ukiah Senior Center is a 501(c)(3) nonprofit organization.</p>
          <p className="mt-2">Your donation is tax-deductible to the full extent allowed by law.</p>
        </div>
      </div>

      {/* Zeffy Modal */}
      <Modal
        isOpen={isZeffyOpen}
        onClose={() => setIsZeffyOpen(false)}
        title="Complete Your Donation"
      >
        <div className="p-6">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💳</div>
            <p className="text-gray-600 mb-4">Zeffy payment widget will be embedded here</p>
            <p className="text-sm text-gray-500">
              This is where the Zeffy payment processor integration will be implemented
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
