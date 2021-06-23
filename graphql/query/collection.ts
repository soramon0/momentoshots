import type { QueryOptions } from '@apollo/client';

import type * as Types from '../generated';
import { GetCollectionsDocument } from '../generated';
import { addApolloState, initializeApollo } from '../../lib/apolloClient';

type GetCollectionsOptions = Omit<
  QueryOptions<Types.GetCollectionsQueryVariables>,
  'query'
>;

export async function getCollections(options: GetCollectionsOptions = {}) {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query<Types.GetCollectionsQuery>({
    ...options,
    query: GetCollectionsDocument,
  });

  return addApolloState(apolloClient, {
    data: data?.data.collections,
    error: data?.error ?? data?.errors ?? null,
  });
}
