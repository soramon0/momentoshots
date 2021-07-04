import Link from 'next/link';
import Image from 'next/image';
import { useCycle } from 'framer-motion';

import IconIG from '@/components/icons/IG';
import IconPhone from '@/components/icons/Phone';
import Sidebar from '@/components/layout/Sidebar';
import NavbarItems from '@/components/layout/NavbarItems';

function Navbar() {
  const [isMenuOpen, toggleMenuOpen] = useCycle(false, true);

  return (
    <header className="w-full px-8 py-4 relative z-40">
      <nav className="flex items-center">
        <div className="w-2/5">
          <Link href="/">
            <a className="w-16 h-14 relative inline-block md:w-20 md:h-20">
              <Image src="/images/logo.svg" alt="logo" layout="fill" />
            </a>
          </Link>
        </div>

        <div className="hidden md:w-3/5 md:flex md:justify-between">
          <NavbarItems isMenuOpen={isMenuOpen} />

          <div className="space-x-4 flex items-center">
            <Link href="https://www.instagram.com/momento_shots/">
              <a
                target="_blank"
                className="outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-primary focus:ring-primary"
                aria-label="instagram account"
              >
                <IconIG className="w-6 h-6 text-gray-600 transition-colors duration-500 hover:text-primary" />
              </a>
            </Link>
            <div className="flex space-x-2">
              <IconPhone />
              <span
                className="font-semibold text-gray-600 tracking-wide"
                aria-label="phone number: 052615615"
              >
                052615615
              </span>
            </div>
          </div>
        </div>

        <Sidebar isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      </nav>
    </header>
  );
}

export default Navbar;
