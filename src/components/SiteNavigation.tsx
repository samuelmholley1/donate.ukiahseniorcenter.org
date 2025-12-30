'use client';

export function SiteNavigation() {
  return (
    <header className="bg-[#427d78] sticky top-0 z-50 shadow-md">
      <div className="container">
        <div className="flex items-center justify-between py-4 gap-3">
          {/* Logo - Links to Home */}
          <a href="https://ukiahseniorcenter.org" className="shrink-0 hover:opacity-80 transition-opacity">
            <img
              src="https://ukiahseniorcenter.org/wp-content/uploads/2023/07/usc-logo-greentext.webp"
              alt="Ukiah Senior Center"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2 md:gap-4 flex-wrap justify-end">
            {/* Become a Member Button */}
            <a
              href="https://memberships.ukiahseniorcenter.org"
              className="text-white px-4 md:px-6 py-2 md:py-3 font-['Montserrat',sans-serif] font-semibold text-xs md:text-base hover:bg-[#5eb3a1] rounded transition-all duration-300"
            >
              Become a Member
            </a>

            {/* Event Tickets Button */}
            <a
              href="https://tickets.ukiahseniorcenter.org"
              className="text-white px-4 md:px-6 py-2 md:py-3 font-['Montserrat',sans-serif] font-semibold text-xs md:text-base hover:bg-[#5eb3a1] rounded transition-all duration-300"
            >
              Event Tickets
            </a>

            {/* Back to Home Button */}
            <a
              href="https://ukiahseniorcenter.org"
              className="text-white px-4 md:px-6 py-2 md:py-3 font-['Montserrat',sans-serif] font-semibold text-xs md:text-base hover:opacity-80 transition-all duration-300"
            >
              ← Back to Home
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
