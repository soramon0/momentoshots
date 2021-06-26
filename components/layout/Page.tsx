import { AnimatePresence } from 'framer-motion';

import Navbar from './Navbar';

const Page: React.FC = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default Page;
