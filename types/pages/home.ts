import type { FC } from 'react';

import type { CollectionItem, Review } from '@/sanity/schemaTypes';

type HomePageProps = FC<{
  reviews: Review[];
  featuredItems: CollectionItem[];
}>;

export default HomePageProps;
