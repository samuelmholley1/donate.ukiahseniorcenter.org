'use client';

import Image from 'next/image';
import Link from 'next/link';

export function SiteNavigation() {
  return (
    <header className="bg-[#427d78] sticky top-0 z-50 shadow-md">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          {/* Logo - Links to Home */}
          <Link href="https://ukiahseniorcenter.org" className="shrink-0 hover:opacity-80 transition-opacity">
            <Image
              src="https://ukiahseniorcenter.org/wp-content/uploads/2023/07/usc-logo-greentext.webp"
              alt="Ukiah Senior Center - Back to Home"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
              priority
            />
          </Link>

          {/* Back to Home Button */}
          <a
            href="https://ukiahseniorcenter.org"
            className="bg-white text-[#427d78] px-6 py-2.5 rounded-sm font-['Montserrat',sans-serif] font-bold text-sm md:text-base uppercase hover:bg-gray-100 transition-all duration-300 shadow-sm"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </header>
  );
}
