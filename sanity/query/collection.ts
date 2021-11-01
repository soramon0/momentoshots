import type { Collection } from '../schemaTypes';
import sanityClient from '../client';

export async function getCollections() {
  return sanityClient.fetch<Collection[]>(`*[_type == 'collection']`);
}
