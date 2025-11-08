export function SiteFooterContent() {
  return (
    <footer className="bg-[#fafbff] border-t border-gray-200">
      <div className="container" style={{ paddingBlock: 'var(--space-6)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--space-5)' }}>
          {/* Contact Us */}
          <div>
            <h2 className="text-xl font-['Jost',sans-serif] font-bold text-[#427d78] mb-4">Contact Us</h2>
            <address className="not-italic text-[#666] font-['Bitter',serif] text-sm leading-relaxed">
              <strong className="text-black">Ukiah Senior Center</strong><br />
              499 Leslie St<br />
              Ukiah CA 95482<br />
              Tel: <a href="tel:+17074624343" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">(707) 462-4343</a><br />
              <a href="mailto:director@ukiahseniorcenter.org" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">director@ukiahseniorcenter.org</a>
              <p className="mt-4">
                The Ukiah Senior Center is a<br />
                501(c)3 non-profit organization.<br />
                Tax ID# 23-7258082.
              </p>
            </address>
          </div>

          {/* About Us */}
          <div>
            <h2 className="text-xl font-['Jost',sans-serif] font-bold text-[#427d78] mb-4">About Us</h2>
            <p className="text-[#666] font-['Bitter',serif] text-sm leading-relaxed">
              The Ukiah Senior Center&apos;s mission is to enhance and improve the quality of life for all Ukiah seniors, their families, and their caregivers, and to enable seniors to remain as independent as possible for as long as possible.
            </p>
            <div className="mt-4">
              <a 
                href="https://www.facebook.com/UkiahSeniorCenter/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex w-10 h-10 bg-[#427d78] hover:bg-[#5eb3a1] transition-colors rounded-full items-center justify-center"
                aria-label="Visit us on Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h2 className="text-xl font-['Jost',sans-serif] font-bold text-[#427d78] mb-4">Site Links</h2>
            <ul className="space-y-2 text-[#666] font-['Bitter',serif] text-sm">
              <li><a href="https://ukiahseniorcenter.org/category/services" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">Services</a></li>
              <li><a href="https://ukiahseniorcenter.org/category/activities" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">Activities</a></li>
              <li><a href="https://ukiahseniorcenter.org/thrift-store" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">Thrift Store</a></li>
              <li><a href="https://ukiahseniorcenter.org/hall-rental" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">Hall Rental</a></li>
              <li><a href="https://ukiahseniorcenter.org/support-us" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">Support Us</a></li>
              <li><a href="https://ukiahseniorcenter.org/about-us/contact-directions" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Sponsorship */}
          <div>
            <h2 className="text-xl font-['Jost',sans-serif] font-bold text-[#427d78] mb-4">Sponsorship</h2>
            <p className="text-[#666] font-['Bitter',serif] text-sm mb-3">
              Thank you to our generous sponsors who help make our services possible.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-5)' }} className="border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#666] font-['Bitter',serif]">
            <p>Copyright © 2025 Ukiah Senior Center. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Site By <a href="https://mendowebdesign.com" target="_blank" rel="noopener noreferrer" className="text-[#427d78] hover:text-[#5eb3a1] transition-colors">Mendo Web Design</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
