import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import IconMenu from '../icons/Menu';
import IconClose from '../icons/Close';
import IconIG from '../icons/IG';

const navigation = [
  { route: '/', text: 'Home' },
  { route: '/collections', text: 'Collections' },
  { route: '/contact', text: 'Contact' },
];

function Navbar() {
  const { route } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full p-8 relative z-40">
      <nav className="flex">
        <div className="w-2/5">
          <Link href="/">Logo</Link>
        </div>

        <div className="hidden md:w-3/5 md:flex md:justify-between">
          <div className="space-x-8">
            {navigation.map((item) => (
              <Link key={item.route} href={item.route}>
                <a
                  className={`text-lg font-semibold relative overflow-hidden outline-none hover:text-primary focus:text-primary focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-green-300 ${
                    route === item.route ? 'text-primary' : 'text-gray-900'
                  }`}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? -1 : 0}
                >
                  {item.text}
                </a>
              </Link>
            ))}
          </div>
          <div className="space-x-4 flex items-center">
            <Link href="https://www.instagram.com/momento_shots/">
              <a
                target="_blank"
                className="outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-primary focus:ring-primary"
                aria-label="instagram account"
              >
                <IconIG className="w-6 h-6 transition-colors duration-500 hover:text-primary" />
              </a>
            </Link>
            <span
              className="font-semibold"
              aria-label="phone number: 052615615"
            >
              052615615
            </span>
          </div>
        </div>

        <div className="ml-auto md:hidden">
          <button
            className="w-6 h-6"
            onClick={toggleMenu}
            tabIndex={isMenuOpen ? -1 : 0}
            aria-label="open side menu"
          >
            <IconMenu />
          </button>

          <div
            className={`fixed z-50 inset-0 bg-black transition-opacity md:hidden ${
              isMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
            }`}
            onClick={toggleMenu}
          />

          <div
            className={`w-4/5 p-4 fixed z-50 top-0 right-0 bottom-0 bg-gray-100 shadow-md transition-transform duration-500 transform md:max-w-lg ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <button
              className="w-6 h-6 absolute right-4"
              onClick={toggleMenu}
              tabIndex={!isMenuOpen ? -1 : 0}
              aria-label="open side menu"
            >
              <IconClose />
            </button>

            <div className="h-full flex flex-col justify-between">
              <div className="mt-8 flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link key={item.route} href={item.route}>
                    <a
                      className={`outline-none hover:text-primary focus:text-primary focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-green-300 ${
                        route === item.route ? 'text-primary' : 'text-gray-800'
                      }`}
                      onClick={closeMenu}
                      tabIndex={!isMenuOpen ? -1 : 0}
                    >
                      {item.text}
                    </a>
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <Link href="/">
                  <a onClick={closeMenu} tabIndex={!isMenuOpen ? -1 : 0}>
                    Logo
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
