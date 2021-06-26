import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { CollectionPageProps } from '@/types/pages/collection';
import { getCollection, getCollectionPaths } from '@/graphql/query/collection';
import IconChevronDown from '@/components/icons/ChevronDown';

const CollectionPage: CollectionPageProps = ({
  collection,
  collectionPaths,
}) => {
  return (
    <main>
      <section className="h-screen">
        <div className="h-2/5 relative flex flex-col justify-center">
          <h1
            id="collection-name"
            className="text-3xl capitalize text-center font-display font-medium sm:text-5xl md:text-6xl"
          >
            {collection.name}
          </h1>
          <p className="px-4 mx-auto mt-4 text-xl text-gray-500 text-center sm:w-2/3">
            {collection.description}
          </p>
          <div className="absolute -translate-x-1/2 left-1/2 bottom-4 animate-pulse">
            <IconChevronDown />
          </div>
        </div>

        <div className="h-3/5 relative w-full">
          <Image
            src={collection.headerImage.url}
            alt={collection.headerImage.alternativeText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section
        className="grid grid-cols-1 gap-x-4 gap-y-8 justify-items-center sm:grid-cols-2 md:grid-cols-3"
        aria-label={`collection shots from: ${collection.name}`}
      >
        {collection.items.map((item, i) => (
          <div
            key={item.id}
            className={`relative w-full min-h-full h-[600px] md:h-[450px] ${
              i % 2 !== 0 ? 'row-span-3' : 'row-span-2'
            }`}
          >
            <Image
              src={item.image.url}
              alt={item.image.alternativeText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </section>

      <section className="px-4 my-16 space-y-12 sm:space-y-24 md:my-36">
        <h2 className="text-2xl capitalize text-center font-display font-medium sm:text-4xl md:text-6xl">
          Explore other collections
        </h2>

        <ul className="flex flex-wrap justify-evenly space-x-4">
          {collectionPaths.map((path) => (
            <li key={path.name + collection.slug} className="mb-4">
              <Link href={`/collections/${path.slug}`}>
                <a className="inline-block px-8 py-4 text-xs font-display focus:outline-none border border-primary rounded-full transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                  {path.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default CollectionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getCollectionPaths();
  const paths = data.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const { data } = await getCollection({ variables: { slug } });
  const res = await getCollectionPaths();

  return {
    props: {
      collection: data,
      collectionPaths: res.data,
    },
    revalidate: 60,
  };
};
