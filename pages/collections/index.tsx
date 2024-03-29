import { GetStaticProps } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { CollectionsPageProps } from '@/types/pages/collections';
import { getCollections } from '@/graphql/query/collection';
import Collections from '@/components/collections/Collections';

const CollectionsPage: CollectionsPageProps = ({ collections }) => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="px-4 py-6 space-y-12 sm:px-8 sm:py-14 md:px-12"
    >
      <Head>
        <title>Momento Shots - Collections</title>
      </Head>

      <h1 className="text-4xl font-display font-medium sm:text-5xl md:text-6xl lg:w-3/5">
        Discover our <span className="text-primary">project collections</span>
      </h1>

      <Collections collections={collections} />
    </motion.main>
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
