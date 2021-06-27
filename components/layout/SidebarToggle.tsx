import { motion, SVGMotionProps } from 'framer-motion';

interface Props {
  toggle: () => void;
}

const SidebarToggle: React.VFC<Props> = ({ toggle }) => (
  <button
    onClick={toggle}
    className="fixed top-4 right-3 w-12 h-12 flex items-center justify-center rounded-full bg-transparent focus:outline-none"
  >
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      className="fill-current text-primary"
      stroke="currentColor"
    >
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export default SidebarToggle;
