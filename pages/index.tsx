import Thumbnail from '@/components/shared/Thumbnail';
import Head from 'next/head';

import ownerPortrait from '@/images/photographer-1.jpg';

const HomePage = () => {
  return (
    <main>
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
            <button className="mt-6 font-display text-gray-50 bg-primary transition-colors hover:bg-green-300 hover:text-green-800 py-3 px-6 rounded-md">
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
            overlay
            placeholder="blur"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
