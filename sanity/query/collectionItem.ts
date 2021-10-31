import type { CollectionItem } from '../schemaTypes';
import sanityClient from '../client';

export async function getFeaturedCollectionItems() {
  return sanityClient.fetch<CollectionItem[]>(
    `*[_type == 'collection_item' && featured == true]`
  );
}
