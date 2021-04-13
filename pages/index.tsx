import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import type { PageGetCollectionsComp } from '@/graphql/query/collection';
import { ssrGetCollections } from '@/graphql/query/collection';

const HomePage: PageGetCollectionsComp = ({ data }) => {
  return (
    <main className='bg-gray-100'>
      <Head>
        <title>Momento Shots</title>
      </Head>

      <div className='text-center p-4'>
        <Link href='/contact'>Contact</Link>
      </div>

      <section className='flex justify-center space-x-6 px-4'>
        {data.collections?.map((collection) => (
          <div key={collection.id} className='flex-1'>
            <h3>{collection.name}</h3>
            <div>
              {collection.items?.map((item) => (
                <Image
                  key={item.id}
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
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const collectionsData = await ssrGetCollections.getServerSide();

  return {
    props: collectionsData,
    revalidate: 1,
  };
};
