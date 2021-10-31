import { GetStaticProps } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { HomePageProps } from '@/types/pages/home';
import { getHomePageData } from '@/graphql/query/homepage';
import Introduction from '@/components/home/Introduction';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Highlights from '@/components/home/Highlights';
import CTA from '@/components/home/CTA';
import { getFeaturedCollectionItems } from '@/sanity/query/collectionItem';

const HomePage: HomePageProps = ({ testimonials, featuredItems }) => {
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
      <Testimonials testimonials={testimonials} />
      <CTA />
    </motion.main>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const featuredItems = await getFeaturedCollectionItems();
  const { data } = await getHomePageData();

  return {
    props: {
      testimonials: data.testimonials,
      featuredItems,
    },
    revalidate: 60,
  };
};
