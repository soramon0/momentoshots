import { Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  message: string;
  show: boolean;
  toggller: Dispatch<SetStateAction<boolean>>;
}

const Notifier: React.VFC<Props> = ({ message, show, toggller }) => {
  const hideNotifier = () => {
    toggller(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="px-4 py-3 fixed left-4 right-4 bottom-4 text-center rounded-md shadow-md bg-secondary sm:px-8 sm:py-6 sm:left-auto sm:right-8 sm:bottom-8"
        >
          <p className="text-white font-display text-sm md:text-lg">
            {message}
          </p>

          <button
            className="w-8 h-8 rounded-full absolute -right-4 -top-4 bg-gray-100 hover:bg-gray-300 hover:scale-125"
            onClick={hideNotifier}
            aria-label="Close popup"
          >
            x
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notifier;
