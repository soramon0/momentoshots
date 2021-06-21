import ownerLandscape from '@/images/photographer-2.jpg';
import Thumbnail from '@/components/shared/Thumbnail';

function About() {
  return (
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
  );
}

export default About;
