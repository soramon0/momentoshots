import { ICollection } from '@/types/pages/collection';
import Image from 'next/image';

interface Props {
  items: ICollection['items'];
  collectionName: string;
}

const Gallery: React.VFC<Props> = ({ items, collectionName }) => {
  return (
    <section
      className="grid grid-cols-1 gap-x-4 gap-y-8 justify-items-center sm:grid-cols-2 md:grid-cols-3"
      aria-label={`collection shots from: ${collectionName}`}
    >
      {items.map((item, i) => (
        <div
          className={`relative w-full min-h-full h-[600px] md:h-[450px] ${
            i % 2 !== 0 ? 'row-span-3' : 'row-span-2'
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
    </section>
  );
};

export default Gallery;
