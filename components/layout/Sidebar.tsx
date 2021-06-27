import { useRef } from 'react';
import { useRouter } from 'next/router';
import { motion, Variants } from 'framer-motion';

import useDimensions from '@/lib/useDimensions';
import SidebarItems from '@/components/layout/SidebarItems';
import SidebarToggle from '@/components/layout/SidebarToggle';

interface Props {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
}

const Sidebar: React.VFC<Props> = ({ isMenuOpen, toggleMenuOpen }) => {
  const { route } = useRouter();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      className="absolute top-0 right-0 bottom-0 w-80 md:hidden"
      initial={false}
      animate={isMenuOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-80 bg-primary"
        variants={sidebar}
      />
      <SidebarItems
        isMenuOpen={isMenuOpen}
        toggleMenuOpen={toggleMenuOpen}
        route={route}
      />
      <SidebarToggle toggle={toggleMenuOpen} />
    </motion.div>
  );
};

export default Sidebar;

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: (width = 285) => ({
    clipPath: `circle(30px at ${width}px 40px)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
};
