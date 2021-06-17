import { NextRouter, useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import type { FC } from 'react';
import type {
  QueryOptions,
  QueryHookOptions,
  ApolloError,
} from '@apollo/client';

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
    data: data?.data,
    error: data?.error ?? data?.errors ?? null,
  });
}

type OptionsFunc = (
  router: NextRouter
) => QueryHookOptions<
  Types.GetCollectionsQuery,
  Types.GetCollectionsQueryVariables
>;

export const useGetCollections = (optionsFunc?: OptionsFunc) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(GetCollectionsDocument, options);
};

export const ssrGetCollections = {
  getServerSide: getCollections,
  usePage: useGetCollections,
};

export type PageGetCollectionsComp = FC<{
  data?: Types.GetCollectionsQuery;
  error?: ApolloError;
}>;
