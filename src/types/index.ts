// Donation types
export interface DonationAmount {
  id: string;
  amount: number;
  label: string;
  isCustom?: boolean;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'zephy' | 'paypal' | 'other';
  enabled: boolean;
}

export interface DonationData {
  amount: number;
  frequency: 'one-time' | 'monthly' | 'yearly';
  method: string;
  donorInfo?: {
    name?: string;
    email?: string;
    anonymous?: boolean;
  };
}

export type ToastType = 'success' | 'error' | 'warning' | 'info';
