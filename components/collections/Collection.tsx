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
    <article className="rounded-md shadow-md lg:flex">
      <div className="h-56 overflow-hidden relative sm:h-60 lg:w-1/2">
        <Link href={link}>
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
        <span className="inline-block -mt-6 text-8xl text-gray-200 sm:-mt-4">
          #{pad(index, 2)}
        </span>
        <h2
          className="-mt-5 text-4xl font-medium font-display text-gray-500 truncate md:-mt-6 lg:text-4xl"
          title={collection.name}
        >
          {collection.name}
        </h2>
        <p className="mt-2 text-sm line-clamp-4 text-gray-400 sm:line-clamp-3 lg:text-base">
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
    </article>
  );
};

export default Collection;
