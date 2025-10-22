// Donation page copy - centralized for easy editing

export const COPY = {
  // Main page
  headline: 'Support Ukiah Senior Center',
  subhead: 'Your donation helps provide meals, activities, and support to seniors in our community.',
  
  // Buttons
  primaryButton: 'Donate Securely with Zeffy',
  secondaryButton: 'Donate with PayPal',
  
  // Modal
  modalTitle: 'Make Your Donation',
  modalProcessingInfo: 'During checkout, you may see an optional tip for the payment processor. This tip goes to Zeffy, not to our organization. You can set it to $0 or adjust it as you prefer.',
  closeButton: 'Close',
  
  // Footer
  orgName: 'Ukiah Senior Center',
  ein: 'EIN: 94-1234567',
  address: '495 Leslie St, Ukiah, CA 95482',
  phone: '(707) 462-4343',
  privacyLink: 'Privacy Policy',
} as const;

// URLs - replace these with actual URLs
export const ZEFFY_EMBED_URL = 'https://www.zeffy.com/embed/donation-form/support-ukiah-senior-center';
export const PAYPAL_URL = 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ATG4CRDN2LAKC';
