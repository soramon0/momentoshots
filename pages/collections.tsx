import { GetStaticProps } from 'next';
import Head from 'next/head';

import { CollectionsPageProps } from '@/types/pages/collections';
import { getCollections } from '@/graphql/query/collection';
import Collections from '@/components/collections/Collections';

const CollectionsPage: CollectionsPageProps = ({ collections }) => {
  return (
    <main className="px-4 space-y-8 sm:px-8 sm:space-y-10 md:px-12 md:space-y-16">
      <Head>
        <title>Momento Shots - Collections</title>
      </Head>

      <h1 className="mt-16 text-4xl font-display font-medium sm:mt-24 sm:text-5xl md:text-6xl lg:w-3/5">
        Discover our <span className="text-primary">project collections</span>
      </h1>

      <Collections collections={collections} />
    </main>
  );
};

export default CollectionsPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getCollections();

  return {
    props: {
      collections: data,
    },
    revalidate: 60,
  };
};
