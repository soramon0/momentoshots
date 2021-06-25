import Link from 'next/link';
import Image from 'next/image';

import { IHighlights } from 'types/pages/home';

interface Props {
  highlights: IHighlights;
}

const Highlights: React.VFC<Props> = ({ highlights }) => {
  return (
    <section className="py-24 px-4 space-y-14 text-center bg-secondary sm:space-y-24 md:px-8">
      <h2 className="text-gray-200 text-3xl font-display sm:text-4xl sm:leading-normal md:text-5xl xl:leading-loose">
        Work we are proud of
      </h2>

      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:justify-items-center sm:pt-16 md:gap-y-16 md:pt-48">
        {highlights.map((item, i) => (
          <div
            className={`relative w-full h-[600px] lg:w-[400px] ${
              i % 2 == 0 ? 'sm:-mt-16 md:-mt-48' : ''
            }`}
            key={item.id}
          >
            <Image
              src={item.image.url}
              alt={item.image.alternativeText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      <Link href="/collections">
        <a className="inline-block py-3 px-6 font-display rounded-md bg-gray-50 transition-colors hover:bg-green-300 hover:text-gray-100 focus:outline-none focus:bg-green-300 focus:text-gray-100">
          View Collections
        </a>
      </Link>
    </section>
  );
};

export default Highlights;
