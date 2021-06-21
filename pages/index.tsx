import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { HomePageProps } from 'types/pages/home';
import ownerPortrait from '@/images/photographer-1.jpg';
import ownerLandscape from '@/images/photographer-2.jpg';
import { getHighlights } from '@/graphql/query/collectionItems';
import split from '@/utils/split';
import Thumbnail from '@/components/shared/Thumbnail';
import Link from 'next/link';

const HomePage: HomePageProps = ({ highlights }) => {
  return (
    <main className="space-y-36 sm:space-y-52 md:space-y-64">
      <Head>
        <title>Momento Shots</title>
      </Head>

      <section className="mt-8 space-y-8 md:-mt-24 md:space-y-0 md:flex">
        <div className="md:flex-1 md:flex md:flex-col md:justify-center">
          <div className="px-4 md:px-12">
            <h1 className="text-3xl font-display sm:text-4xl sm:leading-normal md:text-5xl xl:leading-loose">
              Oumaima Hoummir
            </h1>
            <p className="mt-4 text-xl font-body text-gray-500 xl:mt-0 md:text-2xl">
              Outdoor Photographer based out of Marrakech, Morocco.
            </p>
            <button className="mt-6 py-3 px-6 font-display text-gray-50 bg-primary transition-colors hover:bg-green-300 hover:text-green-800 rounded-md focus:outline-none focus:bg-green-300 focus:text-gray-50">
              Book a Session
            </button>
          </div>
        </div>
        <div className="md:flex-1">
          <Thumbnail
            src={ownerPortrait}
            alt="Oumaima Hoummir"
            layout="responsive"
            width="1920"
            height="2560"
            placeholder="blur"
            overlay
          />
        </div>
      </section>

      <section className="space-y-8 md:space-y-0 md:flex">
        <div className="px-4 md:px-0 md:order-2 md:w-2/5 md:-ml-24 md:mt-10 md:z-10 lg:mt-20">
          <h2 className="inline-block px-6 py-4 text-3xl font-display text-white bg-secondary sm:text-4xl lg:text-5xl">
            Who are we
          </h2>
          <p className="px-6 py-4 text-gray-200 bg-secondary lg:text-xl">
            Outdoor Photographer based out of Marrakech, Morocco. Outdoor
            Photographer based out of Marrakech, Morocco. Outdoor Photographer
            based out of Marrakech, Morocco.
          </p>
        </div>
        <div className="overflow-hidden md:w-3/5">
          <Thumbnail
            src={ownerLandscape}
            alt="Oumaima Hoummir"
            layout="responsive"
            width="1920"
            height="1080"
            placeholder="blur"
            objectFit="cover"
            boxPosition="br"
          />
        </div>
      </section>

      <section className="py-24 px-4 space-y-14 text-center bg-secondary sm:space-y-24 md:px-8">
        <h2 className="text-gray-200 text-3xl font-display sm:text-4xl sm:leading-normal md:text-5xl xl:leading-loose">
          Work we are proud of
        </h2>

        <div className="sm:flex sm:justify-evenly sm:space-x-4 lg:space-x-0">
          {highlights.map((highlight, i) => (
            <div
              className={`sm:w-96 space-y-8 sm:space-y-16 md:space-y-28 lg:space-y-36 ${
                i === 1 ? 'sm:mt-16 md:mt-48' : 'mb-8 sm:mb-0'
              }`}
              key={i}
            >
              {highlight.map((item) => {
                const { url, alternativeText } = item.image;
                return (
                  <div className="" key={item.id}>
                    <Image
                      src={url}
                      alt={alternativeText}
                      width="1080"
                      height="1620"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <Link href="/collections">
          <a className="inline-block py-3 px-6 font-display rounded-md bg-gray-50 transition-colors hover:bg-green-300 hover:text-gray-100 focus:outline-none focus:bg-green-300 focus:text-gray-100">
            View Collections
          </a>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getHighlights();

  return {
    props: {
      highlights: split(data),
    },
    revalidate: 60,
  };
};
