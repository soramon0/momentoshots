import Image from 'next/image';

import { pad } from '@/utils/index';
import { ICollections } from '@/types/pages/collections';
import Link from 'next/link';

interface Props {
  collection: ICollections[0];
  index: number;
}

const Collection: React.VFC<Props> = ({ collection, index }) => {
  const description =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, fugit sunt blanditiis eveniet ullam reiciendis tenetur? Culpa tempore architecto cupiditate sunt aspernatur velit nemo hic dicta nulla quos. Odio, beatae?';

  return (
    <article className="overflow-hidden rounded-md shadow-md md:w-[48%] md:mr-[2%]">
      <Link href="/">
        <a className="flex">
          <div className="w-1/2 h-60">
            <Image
              src={collection.headerImage.url}
              alt={collection.headerImage.alternativeText}
              width="400"
              height="380"
              layout="responsive"
              objectFit="fill"
            />
          </div>
          <div className="w-1/2 h-60 p-4">
            <span className="text-7xl text-gray-200 lg:text-8xl">
              #{pad(index, 2)}
            </span>
            <h2 className="-mt-5 text-2xl font-medium font-display text-gray-500 lg:text-3xl">
              {collection.name}
            </h2>
            <p className="text-sm text-gray-400 lg:text-base">
              {description.substring(0, 100)}...
            </p>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default Collection;
