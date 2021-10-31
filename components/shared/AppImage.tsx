import { VFC } from 'react';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import { CollectionImage } from '@/sanity/schemaTypes';
import sanityClient from '@/sanity/client';

type Props = {
  image: CollectionImage;
};

const AppImage: VFC<Props> = ({ image }) => {
  const imageProps = useNextSanityImage(sanityClient, image);

  return (
    <Image
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
      alt={image.alt}
    />
  );
};

export default AppImage;
