import Link from 'next/link';

import { ICollectionPaths } from '@/types/pages/collection';

interface Props {
  collectionPaths: ICollectionPaths;
}

const CollectionPaths: React.VFC<Props> = ({ collectionPaths }) => {
  return (
    <section className="px-4 my-16 space-y-12 sm:space-y-24 md:my-36">
      <h2 className="text-2xl capitalize text-center font-display font-medium sm:text-4xl md:text-6xl">
        Explore other collections
      </h2>

      <ul className="flex flex-wrap justify-evenly space-x-4">
        {collectionPaths.map((path) => (
          <li key={path.name + path.slug} className="mb-4">
            <Link href={`/collections/${path.slug}`}>
              <a className="inline-block px-8 py-4 text-xs font-display focus:outline-none border border-primary rounded-full transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                {path.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CollectionPaths;
