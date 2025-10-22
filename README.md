# Ukiah Senior Center - Donation Portal

A simple, focused donation page for supporting the Ukiah Senior Center through secure online payments.

## 🎯 Purpose

This subdomain provides a streamlined donation experience for supporters of the Ukiah Senior Center, featuring:
- Zephy payment processor integration with Senior Center branding
- Clear instructions for opting out of processor tips
- PayPal fallback option
- Mobile-responsive design optimized for donors

## 🌟 Features

### Current Features (v0.1.0)
- ✅ **Modern UI**: Clean, accessible donation interface
- ✅ **Dual Payment Options**: Zephy (primary) + PayPal (fallback)
- ✅ **Mobile Optimized**: Responsive design for all devices
- ✅ **Processor Tip Education**: Clear guidance on optional tips
- ✅ **Senior Center Branding**: Consistent visual identity
- ✅ **Impact Messaging**: Shows how donations help the community

### Planned Features (Future Releases)
- **Zephy Integration**: Live payment processing widget
- **Donation Amounts**: Preset and custom amount options
- **Recurring Donations**: Monthly/yearly giving options
- **Donor Recognition**: Thank you pages and confirmation emails
- **Analytics**: Donation tracking and reporting

## 🏗️ Technology Stack

### Frontend
- **Next.js 15.5.3**: React framework with App Router
- **React 19**: Latest React with modern features
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first styling
- **Yarn 4.10.2 (Berry)**: Package management with Node Modules

### Architecture Philosophy
- **Simplicity First**: Single-purpose donation flow
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized loading and minimal dependencies

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- Yarn 4.10.2 (Berry)

### Installation

```bash
# Clone or navigate to the repository
cd donate.ukiahseniorcenter.org

# Install dependencies
yarn install

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Build the application
yarn build

# Start production server
yarn start
```

## 🎨 Design Principles

1. **Donation-Focused**: Every element supports the giving experience
2. **Trust & Security**: Clear security messaging and professional design
3. **Minimal Friction**: Fewest steps from landing to completed donation
4. **Educational**: Helps donors understand impact and processing
5. **Accessible**: Usable by seniors and all community members

## 📋 Project Structure

```
donate.ukiahseniorcenter.org/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout (simplified)
│   │   ├── page.tsx          # Main donation page
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable React components
│   │   ├── ErrorBoundary.tsx # Error handling
│   │   ├── LoadingStates.tsx # Loading indicators  
│   │   ├── Modal.tsx         # Payment modals
│   │   └── Toast.tsx         # Notifications
│   ├── types/                # TypeScript types
│   │   └── index.ts          # Donation-specific types
│   └── hooks/                # Custom React hooks
│       └── useUtilities.ts   # Utility functions
├── public/                   # Static assets
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── next.config.ts            # Next.js config
└── README.md                 # This file
```

## 💳 Payment Integration

### Zephy Integration (Primary)
- Embedded payment widget
- Supports major credit/debit cards
- Processor tip opt-out guidance
- Secure tokenized transactions

### PayPal Integration (Fallback)
- Direct PayPal.me link
- Alternative for users preferring PayPal
- Familiar payment experience

## 🔐 Security & Compliance

- **PCI Compliance**: Payment processors handle sensitive data
- **HTTPS Only**: Secure connection required
- **No Data Storage**: Donation data not stored locally
- **Privacy Focused**: Minimal donor information collection

## 📊 Success Metrics

- **Conversion Rate**: Percentage of visitors who complete donations
- **Average Donation**: Mean donation amount
- **Payment Method Usage**: Zephy vs PayPal preferences
- **Mobile Usage**: Percentage of mobile donations
- **Abandonment Rate**: Where users drop off in the flow

## 🤝 Integration with Main Site

This donation portal is designed to eventually be integrated into the main Ukiah Senior Center website. The current standalone approach allows for:
- Rapid deployment and testing
- Independent updates and optimization
- Focused analytics and conversion tracking
- Simplified payment processor integration

## 📞 Support

For technical support or questions:
- **Email**: support@ukiahseniorcenter.org
- **Director**: Liz Dorsey (liz@ukiahseniorcenter.org)

## 📄 License

Proprietary - © 2025 Ukiah Senior Center. All rights reserved.

---

**Built with ❤️ to support our senior community**