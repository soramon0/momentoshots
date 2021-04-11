import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import type { Collection } from '@/graphql/types';
import { collectionFind } from '@/graphql/queries/collection';
import { addApolloState, initializeApollo } from '@/lib/apolloClient';

type Props = {
  collections: Collection[];
};

export default function HomePage({ collections }: Props) {
  return (
    <main className='bg-gray-100'>
      <Head>
        <title>Momento Shots</title>
      </Head>

      <div className='text-center p-4'>
        <Link href='/contact'>Contact</Link>
      </div>

      <section className='flex justify-center space-x-6 px-4'>
        {collections.map((collection) => (
          <div key={collection.id} className='flex-1'>
            <h3>{collection.name}</h3>
            <div>
              {collection.items?.map((item) => (
                <Image
                  src={item.image!.url}
                  alt={item.image?.alternativeText}
                  width={item.image!.width}
                  height={item.image!.height}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await collectionFind(apolloClient);

  return addApolloState(apolloClient, {
    props: {
      collections: data.collections,
    },
    revalidate: 1,
  });
};
