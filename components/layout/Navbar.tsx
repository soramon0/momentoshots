import { useState } from 'react';
import Link from 'next/link';

import IconMenu from '../icons/Menu';
import IconClose from '../icons/Close';

const navigation = [
  { link: '/', text: 'Home' },
  { link: '#', text: 'Collections' },
  { link: '/contact', text: 'Contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='w-full p-8'>
      <nav className='max-w-screen-xl mx-auto flex'>
        <div className='w-2/5'>
          <Link href='/'>Logo</Link>
        </div>

        <div className='hidden md:w-3/5 md:flex md:justify-between'>
          <div className='space-x-8'>
            {navigation.map((item) => (
              <Link key={item.link} href={item.link}>
                <a onClick={closeMenu} tabIndex={!isMenuOpen ? -1 : 0}>
                  {item.text}
                </a>
              </Link>
            ))}
          </div>
          <div className='space-x-4'>
            <Link href='#'>
              <a>IG</a>
            </Link>
            <Link href='#'>
              <a>052615615</a>
            </Link>
          </div>
        </div>

        <div className='ml-auto md:hidden'>
          <button
            className='w-6 h-6'
            onClick={toggleMenu}
            tabIndex={isMenuOpen ? -1 : 0}
            aria-label='open side menu'
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
              className='w-6 h-6 absolute right-4'
              onClick={toggleMenu}
              tabIndex={!isMenuOpen ? -1 : 0}
              aria-label='open side menu'
            >
              <IconClose />
            </button>

            <div className='h-full flex flex-col justify-between'>
              <div className='mt-8 flex flex-col space-y-4'>
                {navigation.map((item) => (
                  <Link key={item.link} href={item.link}>
                    <a onClick={closeMenu} tabIndex={!isMenuOpen ? -1 : 0}>
                      {item.text}
                    </a>
                  </Link>
                ))}
              </div>

              <div className='mt-auto'>
                <Link href='/'>
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
