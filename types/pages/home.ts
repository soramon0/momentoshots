import { FC } from 'react';

import { CollectionItem, Review } from '@/sanity/schemaTypes';

type HomePageProps = FC<{
  reviews: Review[];
  featuredItems: CollectionItem[];
}>;

export default HomePageProps;
