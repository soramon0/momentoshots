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

const HomePage: HomePageProps = ({ highlights, testimonials }) => {
  return (
    <motion.main
      className="mb-12 space-y-36 sm:space-y-48 md:space-y-52"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Momento Shots - Home</title>
      </Head>

      <Introduction />
      <About />
      <Highlights highlights={highlights} />
      <Testimonials testimonials={testimonials} />
    </motion.main>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getHomePageData();

  return {
    props: {
      highlights: data.highlights,
      testimonials: data.testimonials,
    },
    revalidate: 60,
  };
};
