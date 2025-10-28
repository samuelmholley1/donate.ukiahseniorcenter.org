import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="bg-[#2C7A7B] text-white h-18 flex items-center border-b border-[#256c6f]">
      <div className="max-w-[1200px] mx-auto px-5 py-4 flex w-full items-center justify-between">
        {/* Left: Logo */}
        <Link href="https://ukiahseniorcenter.org" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Ukiah Senior Center Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-base font-semibold hidden sm:inline">
            Ukiah Senior Center
          </span>
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="https://ukiahseniorcenter.org" className="hover:text-gray-100 transition-colors">
            Home
          </Link>
          <Link href="https://ukiahseniorcenter.org/calendar" className="hover:text-gray-100 transition-colors">
            Calendar
          </Link>
          <Link href="https://ukiahseniorcenter.org/services" className="hover:text-gray-100 transition-colors">
            Services
          </Link>
          <Link href="https://ukiahseniorcenter.org/activities" className="hover:text-gray-100 transition-colors">
            Activities
          </Link>
          <Link href="https://ukiahseniorcenter.org/thrift-store" className="hover:text-gray-100 transition-colors">
            Thrift Store
          </Link>
          <Link href="https://ukiahseniorcenter.org/hall-rental" className="hover:text-gray-100 transition-colors">
            Hall Rental
          </Link>
          <Link href="https://ukiahseniorcenter.org/support-us" className="hover:text-gray-100 transition-colors">
            Support Us
          </Link>
          <Link href="https://ukiahseniorcenter.org/about-us" className="hover:text-gray-100 transition-colors">
            About Us
          </Link>
        </nav>

        {/* Right: Donate button */}
        <Link
          href="/"
          className="bg-white font-semibold px-6 py-2 rounded text-sm transition-colors shadow-md"
          style={{ color: 'var(--teal)' }}
        >
          Donate Now
        </Link>
      </div>
    </header>
  );
}
