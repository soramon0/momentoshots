import type { FC } from 'react';

import type { Collection } from '@/sanity/schemaTypes';

export type CollectionsPageProps = FC<{
  collections: Collection[];
}>;
