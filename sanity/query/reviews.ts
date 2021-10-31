import type { Review } from '../schemaTypes';
import sanityClient from '../client';

export async function getReviews() {
  return sanityClient.fetch<Review[]>(`*[_type == 'review']`);
}
