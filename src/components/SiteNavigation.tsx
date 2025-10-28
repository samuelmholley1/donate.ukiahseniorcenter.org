'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function SiteNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#427d78] sticky top-0 z-50 shadow-md">
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="https://ukiahseniorcenter.org" className="shrink-0">
            <Image
              src="https://ukiahseniorcenter.org/wp-content/uploads/2023/07/usc-logo-greentext.webp"
              alt="Ukiah Senior Center"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            <Link href="https://ukiahseniorcenter.org" className="text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase">
              Home
            </Link>
            <Link href="https://ukiahseniorcenter.org/calendar" className="text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase">
              Calendar
            </Link>
            <Link href="https://ukiahseniorcenter.org/category/services" className="text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase">
              Services
            </Link>
            <Link href="https://ukiahseniorcenter.org/category/activities" className="text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase">
              Activities
            </Link>
            <Link href="https://ukiahseniorcenter.org/thrift-store" className="text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase">
              Thrift Store
            </Link>
            <Link href="https://ukiahseniorcenter.org/hall-rental" className="text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase">
              Hall Rental
            </Link>
            <Link href="https://ukiahseniorcenter.org/support-us" className="text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase">
              Support Us
            </Link>
            <Link href="https://ukiahseniorcenter.org/about-us/contact-directions" className="text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase">
              About Us
            </Link>
          </nav>

          {/* Donate Button */}
          <a
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ATG4CRDN2LAKC&ssrt=1722971269133"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block bg-[#427d78] border-2 border-[#fafbff] text-[#fafbff] px-6 py-2.5 rounded-sm font-['Montserrat',sans-serif] font-semibold text-sm uppercase hover:bg-[#5eb3a1] hover:border-[#5eb3a1] transition-all duration-300"
          >
            Donate Now
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-3">
            <Link href="https://ukiahseniorcenter.org" className="block text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase py-2">
              Home
            </Link>
            <Link href="https://ukiahseniorcenter.org/calendar" className="block text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase py-2">
              Calendar
            </Link>
            <Link href="https://ukiahseniorcenter.org/category/services" className="block text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase py-2">
              Services
            </Link>
            <Link href="https://ukiahseniorcenter.org/category/activities" className="block text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase py-2">
              Activities
            </Link>
            <Link href="https://ukiahseniorcenter.org/thrift-store" className="block text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase py-2">
              Thrift Store
            </Link>
            <Link href="https://ukiahseniorcenter.org/hall-rental" className="block text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase py-2">
              Hall Rental
            </Link>
            <Link href="https://ukiahseniorcenter.org/support-us" className="block text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase py-2">
              Support Us
            </Link>
            <Link href="https://ukiahseniorcenter.org/about-us/contact-directions" className="block text-white hover:text-[#5eb3a1] transition-colors font-['Montserrat',sans-serif] font-medium text-sm uppercase py-2">
              About Us
            </Link>
            <a
              href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ATG4CRDN2LAKC&ssrt=1722971269133"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#427d78] border-2 border-[#fafbff] text-[#fafbff] px-6 py-2.5 rounded-sm font-['Montserrat',sans-serif] font-semibold text-sm uppercase hover:bg-[#5eb3a1] hover:border-[#5eb3a1] transition-all duration-300 text-center mt-4"
            >
              Donate Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
