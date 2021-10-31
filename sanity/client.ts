import { createClient } from 'next-sanity';

import { getSanityDataset, getSanityProjectId } from '@/utils/env';

const sanityClient = createClient({
  projectId: getSanityProjectId(),
  dataset: getSanityDataset(),
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-10-29',
});

export default sanityClient;
