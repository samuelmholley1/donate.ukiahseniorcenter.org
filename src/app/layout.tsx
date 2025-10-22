import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from '@/components/Toast';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const metadata: Metadata = {
  title: "Donate - Ukiah Senior Center",
  description: "Support Ukiah Senior Center with a secure donation. Help provide meals, activities, and vital services to seniors in our community.",
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' }
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Zeffy donation form embed script */}
        <script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js" async></script>
      </head>
      <body className="antialiased">
        <ToastProvider>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </ToastProvider>
      </body>
    </html>
  );
}
