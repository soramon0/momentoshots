import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { isRoute } from '@/utils/index';

interface Props {
  isMenuOpen: boolean;
}

export const navigation: NavItem[] = [
  { route: '/home', text: 'Home' },
  { route: '/collections', text: 'Collections' },
  { route: '/contact', text: 'Contact' },
];

const NavbarItems: React.VFC<Props> = ({ isMenuOpen }) => {
  const { route } = useRouter();

  return (
    <AnimateSharedLayout>
      <div className="space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.route}
            href={item.route === '/home' ? '/' : item.route}
          >
            <a
              className={`text-lg font-semibold relative focus:outline-none hover:text-primary focus:text-primary focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-green-300 ${
                isRoute(item.route, route) ? 'text-primary' : 'text-gray-900'
              }`}
              tabIndex={isMenuOpen ? -1 : 0}
            >
              {isRoute(item.route, route) && (
                <motion.div
                  className="w-full h-1 rounded-md left-0 absolute -bottom-2 bg-primary"
                  layoutId="underline"
                  key={item.route}
                />
              )}
              {item.text}
            </a>
          </Link>
        ))}
      </div>
    </AnimateSharedLayout>
  );
};

export default NavbarItems;

export type NavItem = {
  route: string;
  text: string;
};
