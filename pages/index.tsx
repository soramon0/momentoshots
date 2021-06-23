import { GetStaticProps } from 'next';
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { HomePageProps } from 'types/pages/home';
import { getHomePageData } from '@/graphql/query/homepage';
import { split } from '@/utils/index';
import Introduction from '@/components/home/Introduction';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Highlights from '@/components/home/Highlights';

const HomePage: HomePageProps = ({ highlights, testimonials }) => {
  return (
    <main className="space-y-36 sm:space-y-48 md:space-y-52">
      <Head>
        <title>Momento Shots - Home</title>
      </Head>

      <Introduction />
      <About />
      <Highlights highlights={highlights} />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getHomePageData();

  return {
    props: {
      highlights: split(data.highlights),
      testimonials: data.testimonials,
    },
    revalidate: 60,
  };
};
