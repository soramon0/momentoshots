import { GetStaticPaths, GetStaticProps } from 'next';
import { motion } from 'framer-motion';

import { CollectionPageProps } from '@/types/pages/collection';
import { getCollection, getCollectionPaths } from '@/graphql/query/collection';
import Hero from '@/components/collections/Hero';
import Gallery from '@/components/collections/Gallery';
import CollectionPaths from '@/components/collections/CollectionPaths';

const CollectionPage: CollectionPageProps = ({
  collection,
  collectionPaths,
}) => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      key={collection.id}
    >
      <Hero
        name={collection.name}
        description={collection.description}
        url={collection.headerImage.url}
        alternativeText={collection.headerImage.alternativeText}
      />
      <Gallery collectionName={collection.name} items={collection.items} />
      <CollectionPaths collectionPaths={collectionPaths} />
    </motion.main>
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
  const { data: paths } = await getCollectionPaths();

  return {
    props: {
      collection: data,
      collectionPaths: paths,
    },
    revalidate: 60,
  };
};
