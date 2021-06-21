import Link from 'next/link';
import Image from 'next/image';

import { ISplitHighlights } from 'types/pages/home';

interface Props {
  highlights: ISplitHighlights;
}
const Highlights: React.VFC<Props> = ({ highlights }) => {
  return (
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
                <div key={item.id}>
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
  );
};

export default Highlights;
