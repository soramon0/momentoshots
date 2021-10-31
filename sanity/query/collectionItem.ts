import type { CollectionItem } from '../schemaTypes';
import sanityClient from '../client';

export async function getFeaturedCollectionItems() {
  const items = await sanityClient.fetch<CollectionItem[]>(
    `*[_type == 'collection_item' && featured == true]`
  );

  return items;
}
