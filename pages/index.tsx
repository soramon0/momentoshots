import { GetStaticProps } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Props from '@/types/pages/home';
import { getFeaturedCollectionItems } from '@/sanity/query/collectionItem';
import { getReviews } from '@/sanity/query/reviews';
import Introduction from '@/components/home/Introduction';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Highlights from '@/components/home/Highlights';
import CTA from '@/components/home/CTA';

const HomePage: Props = ({ featuredItems, reviews }) => {
  return (
    <motion.main
      className="mb-12 space-y-36 sm:space-y-48"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Momento Shots - Home</title>
      </Head>

      <Introduction />
      <About />
      <Highlights featuredItems={featuredItems} />
      <Testimonials reviews={reviews} />
      <CTA />
    </motion.main>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const featuredItems = await getFeaturedCollectionItems();
  const reviews = await getReviews();

  return {
    props: {
      reviews,
      featuredItems,
    },
    revalidate: 60,
  };
};
