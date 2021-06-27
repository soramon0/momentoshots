import type { QueryOptions } from '@apollo/client';

import type * as Types from '../generated';
import {
  GetCollectionsDocument,
  GetCollectionDocument,
  GetCollectionPathsDocument,
} from '../generated';
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

type GetCollectionOptions = Omit<
  QueryOptions<Types.GetCollectionQueryVariables>,
  'query'
>;

export async function getCollection(options: GetCollectionOptions = {}) {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query<Types.GetCollectionQuery>({
    ...options,
    query: GetCollectionDocument,
  });

  return addApolloState(apolloClient, {
    data: data?.data.collections[0],
    error: data?.error ?? data?.errors ?? null,
  });
}

type GetCollectionPathsOptions = Omit<
  QueryOptions<Types.GetCollectionPathsQueryVariables>,
  'query'
>;

export async function getCollectionPaths(
  options: GetCollectionPathsOptions = {}
) {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query<Types.GetCollectionPathsQuery>({
    ...options,
    query: GetCollectionPathsDocument,
  });

  return addApolloState(apolloClient, {
    data: data?.data.collections,
    error: data?.error ?? data?.errors ?? null,
  });
}
