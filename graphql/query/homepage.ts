import type { QueryOptions } from '@apollo/client';

import type * as Types from '../generated';
import { GetHomePageDataDocument } from '../generated';
import { addApolloState, initializeApollo } from '../../lib/apolloClient';

type HomePageOptions = Omit<
	QueryOptions<Types.GetHomePageDataQueryVariables>,
	'query'
>;

export async function getHomePageData(options: HomePageOptions = {}) {
	const apolloClient = initializeApollo();

	const res = await apolloClient.query<Types.GetHomePageDataQuery>({
		...options,
		query: GetHomePageDataDocument,
	});

	return addApolloState(apolloClient, {
		data: {
			testimonials: res?.data?.homePage.testimonials,
			highlights: res?.data?.items
		},
		error: res?.error ?? res?.errors ?? null,
	});
}
