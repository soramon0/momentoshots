import { gql } from '@apollo/client'

import type { Query } from '../types'
import type { _ApolloClient } from '@/lib/apolloClient'

export const COLLECTIONS_QUERY = gql`
	query {
    collections {
      id
      name
      items {
        highlight
        image {
          id
          url
          alternativeText
          width
          height
        }
      }
    }
  }
`

export type CollectionsResponse = {
  collections: Query['collections']
}

export async function collectionFind(apolloClient: _ApolloClient) {
  return await apolloClient.query<CollectionsResponse>({
    query: COLLECTIONS_QUERY,
  });
}
