import Image from 'next/image';
import Link from 'next/link';

import ownerImage from '@/images/photographer-3.jpg';

const CTA = () => {
  return (
    <section className="px-4 md:px-12">
      <div className="bg-gray-50 rounded-bl-[3rem] rounded-tr-[3rem] overflow-hidden md:grid md:grid-cols-2">
        <div className="py-4 px-4 h-80 flex flex-col justify-center md:px-8 md:h-96">
          <h2 className="text-3xl font-display text-secondary sm:text-4xl lg:text-5xl">
            Let’s capture your memories
          </h2>
          <Link href="/contact">
            <a className="w-64 mt-6 py-3 px-6 text-center font-display text-white bg-secondary transition-colors hover:bg-gray-800 hover:text-gray-200 rounded-md focus:outline-none focus:bg-gray-800 focus:text-gray-200">
              Book a Session
            </a>
          </Link>
        </div>
        <div className="w-full h-80 relative md:h-96">
          <Image
            src={ownerImage}
            alt="owner holding a camera"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
