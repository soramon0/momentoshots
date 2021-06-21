import type { QueryOptions } from '@apollo/client';

import type * as Types from '../generated';
import { GetHighlightsDocument } from '../generated';
import { addApolloState, initializeApollo } from '../../lib/apolloClient';

type GetHighlightsOptions = Omit<
	QueryOptions<Types.GetHighlightsQueryVariables>,
	'query'
>;

export async function getHighlights(options: GetHighlightsOptions = {}) {
	const apolloClient = initializeApollo();

	const data = await apolloClient.query<Types.GetHighlightsQuery>({
		...options,
		query: GetHighlightsDocument,
	});

	return addApolloState(apolloClient, {
		data: data?.data.items,
		error: data?.error ?? data?.errors ?? null,
	});
}
