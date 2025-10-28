import Image from 'next/image';

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white text-sm mt-20 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Contact Us */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Contact Us</h3>
          <p className="text-gray-400">
            Ukiah Senior Center<br/>
            499 Leslie St<br/>
            Ukiah, CA 95482
          </p>
          <p className="mt-2 text-gray-400">
            Tel: <a href="tel:+17074624343" className="hover:text-white transition-colors">(707) 462-4343</a>
            <br/>
            <a href="mailto:director@ukiahseniorcenter.org" className="hover:text-white transition-colors underline">
              director@ukiahseniorcenter.org
            </a>
          </p>
          <p className="mt-2 text-gray-400">
            501(c)(3) nonprofit<br/>
            Tax ID 23-7258082
          </p>
        </div>

        {/* Column 2: About Us */}
        <div>
          <h3 className="font-semibold mb-3 text-white">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Our mission is to enhance and improve the quality of life for all Ukiah seniors,
            their families, and caregivers — enabling independence as long as possible.
          </p>
        </div>

        {/* Column 3: Site Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Site Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="https://ukiahseniorcenter.org/services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="https://ukiahseniorcenter.org/thrift-store" className="hover:text-white transition-colors">
                Thrift Store
              </a>
            </li>
            <li>
              <a href="https://ukiahseniorcenter.org/hall-rental" className="hover:text-white transition-colors">
                Hall Rental
              </a>
            </li>
            <li>
              <a href="https://ukiahseniorcenter.org/support-us" className="hover:text-white transition-colors">
                Support Us
              </a>
            </li>
            <li>
              <a href="https://ukiahseniorcenter.org/contact" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Sponsorship */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Sponsorship</h3>
          <Image 
            src="https://ukiahseniorcenter.org/wp-content/uploads/2025/04/Helen-and-Company-Ukiah-Seniors.jpg" 
            alt="Sponsor: Helen and Company" 
            width={200}
            height={100}
            className="max-w-full h-auto"
            unoptimized
          />
        </div>

      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ukiah Senior Center. All rights reserved.
      </div>
    </footer>
  );
}
