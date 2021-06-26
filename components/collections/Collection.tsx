import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { pad } from '@/utils/index';
import { ICollections } from '@/types/pages/collections';
import { fadeInUp } from '@/lib/animate';
import IconExternalLink from '@/components/icons/ExternalLink';

interface Props {
  collection: ICollections[0];
  index: number;
}

const Collection: React.VFC<Props> = ({ collection, index }) => {
  const link = `/collections/${collection.slug}`;
  const linkLabel = `${collection.name} collection`;

  return (
    <motion.article
      className="overflow-hidden rounded-md shadow-md lg:flex"
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="h-56 overflow-hidden relative sm:h-60 lg:w-1/2">
        <Link href={link} passHref>
          <a aria-label={linkLabel}>
            <Image
              src={collection.headerImage.url}
              alt={collection.headerImage.alternativeText}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className="h-60 p-4 relative lg:w-1/2">
        <motion.span
          className="inline-block -mt-6 text-8xl text-gray-200 sm:-mt-4"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          #{pad(index, 2)}
        </motion.span>
        <h2
          className="-mt-5 text-4xl font-medium font-display text-gray-500 truncate md:-mt-6 lg:text-4xl"
          title={collection.name}
        >
          {collection.name}
        </h2>
        <p className="mt-2 text-sm line-clamp-4 text-gray-400 sm:line-clamp-3 lg:text-base">
          {collection.description}
        </p>
        <Link href={link} passHref>
          <motion.a
            target="_blank"
            className="absolute right-4 bottom-4"
            aria-label={linkLabel}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <IconExternalLink />
          </motion.a>
        </Link>
      </div>
    </motion.article>
  );
};

export default Collection;
