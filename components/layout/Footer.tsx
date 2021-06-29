import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { classNames, isRoute } from '@/utils/index';
import { useCollectionPaths } from '@/lib/http';
import IconIG from '@/components/icons/IG';
import { navigation } from '@/components/layout/NavbarItems';

function Footer() {
  const { paths } = useCollectionPaths();
  const { route } = useRouter();
  const color = (path: string) =>
    isRoute(path, route) ? 'font-semibold text-primary' : 'text-gray-700';

  return (
    <footer className="px-8 py-8 border-t border-gray-100 md:px-16">
      <div className="space-y-10 md:space-y-0 md:space-x-28 md:flex">
        <div className="space-y-8 md:w-2/5">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <a className="w-16 h-14 relative inline-block md:w-20 md:h-16">
                <Image src="/images/logo.svg" alt="logo" layout="fill" />
              </a>
            </Link>
            <span className="text-lg font-display">MomentoShots</span>
          </div>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            possimus consectetur! Laboriosam illum quasi sit quos quo ipsam
            architecto possimus atque mollitia vitae.
          </p>
          <div className="flex space-x-8">
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
              className="selection:bg-primary selection:text-white"
              aria-label="phone number: 052615615"
            >
              052615615
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-between md:justify-start md:w-3/5 md:space-x-32">
          <ul className="space-y-4">
            <li>
              <span className="text-sm font-display font-medium">
                Navigation
              </span>
            </li>
            {navigation.map((item) => (
              <li key={item.route}>
                <Link href={item.route === '/home' ? '/' : item.route}>
                  <a
                    className={classNames(
                      'hover:text-primary focus:text-primary',
                      color(item.route)
                    )}
                  >
                    {item.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-4">
            <li>
              <span className="text-sm font-display font-medium">
                Latest Work
              </span>
            </li>
            {!paths.length ? (
              <li>
                <span>Fetching work...</span>
              </li>
            ) : (
              paths.map((path) => (
                <li key={path.slug}>
                  <Link href={`/collections/${path.slug}`}>
                    <a className="hover:text-primary">{path.name}</a>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <p className="text-center mt-8 pt-8 text-gray-500 border-t border-gray-200">
        &copy; MomentoShots. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
