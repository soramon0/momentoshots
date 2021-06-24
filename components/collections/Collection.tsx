import Image from 'next/image';
import Link from 'next/link';

import { pad } from '@/utils/index';
import { ICollections } from '@/types/pages/collections';
import IconExternalLink from '@/components/icons/ExternalLink';

interface Props {
  collection: ICollections[0];
  index: number;
}

const Collection: React.VFC<Props> = ({ collection, index }) => {
  const link = `/collections/${collection.slug}`;
  const linkLabel = `${collection.name} collection`;

  return (
    <article className="p-4 md:py-6 md:w-1/2">
      <div className="overflow-hidden flex rounded-md shadow-md">
        <div className="w-1/2 h-60">
          <Link href={link}>
            <a aria-label={linkLabel}>
              <Image
                src={collection.headerImage.url}
                alt={collection.headerImage.alternativeText}
                width="400"
                height="380"
                layout="responsive"
              />
            </a>
          </Link>
        </div>
        <div className="w-1/2 h-60 p-4 relative">
          <span className="inline-block -mt-4 text-8xl text-gray-200">
            #{pad(index, 2)}
          </span>
          <h2
            className="-mt-5 text-2xl font-medium font-display text-gray-500 truncate md:-mt-6 md:text-3xl lg:text-4xl"
            title={collection.name}
          >
            {collection.name}
          </h2>
          <p className="mt-2 text-sm line-clamp-4 text-gray-400 lg:text-base lg:line-clamp-3">
            {collection.description}
          </p>
          <Link href={link}>
            <a
              target="_blank"
              className="absolute right-4 bottom-4"
              aria-label={linkLabel}
            >
              <IconExternalLink />
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Collection;
