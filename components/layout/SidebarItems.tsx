import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

import { navigation } from '@/components/layout/Navbar';
import MenuItem, { menuItem } from '@/components/layout/SidebarItem';

const SidebarItems = ({ isMenuOpen, toggleMenuOpen, route }) => (
  <motion.ul variants={items} className="px-6 pt-16 absolute w-full h-screen">
    {navigation.map((item, i) => (
      <MenuItem
        toggleMenuOpen={toggleMenuOpen}
        isMenuOpen={isMenuOpen}
        key={i}
        item={item}
        route={route}
      />
    ))}
    <motion.li
      className="absolute left-0 right-0 bottom-0 px-8 py-4"
      variants={menuItem}
    >
      <Link href="/">
        <a
          className="w-16 h-16 relative inline-block"
          onClick={toggleMenuOpen}
          tabIndex={!isMenuOpen ? -1 : 0}
        >
          <Image src="/images/logo.svg" alt="logo" layout="fill" />
        </a>
      </Link>
    </motion.li>
  </motion.ul>
);

export default SidebarItems;

const items: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
