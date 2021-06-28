import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeInDown, staggerLonger } from '@/lib/animate';
import IconChevronDown from '@/components/icons/ChevronDown';

interface Props {
  name: string;
  description: string;
  url: string;
  alternativeText: string;
}

const Hero: React.VFC<Props> = (props) => {
  return (
    <motion.section variants={staggerLonger} className="h-screen">
      <div className="h-2/5 relative flex flex-col justify-center">
        <motion.h1
          id="collection-name"
          className="text-3xl capitalize text-center font-display font-medium sm:text-5xl md:text-6xl"
          variants={fadeInDown}
        >
          {props.name}
        </motion.h1>
        <motion.p
          className="px-4 mx-auto my-4 text-gray-500 text-center sm:text-xl sm:w-2/3"
          variants={fadeInDown}
        >
          {props.description}
        </motion.p>
        <motion.div
          className="absolute -translate-x-1/2 left-1/2 bottom-4 animate-pulse"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <IconChevronDown />
        </motion.div>
      </div>

      <motion.div
        className="h-3/5 relative w-full"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src={props.url}
          alt={props.alternativeText}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
