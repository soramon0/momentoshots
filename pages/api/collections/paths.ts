import type { NextApiRequest, NextApiResponse } from 'next'

import { getCollectionPaths } from '@/graphql/query/collection';

async function paths(_: NextApiRequest, res: NextApiResponse) {
	const { data } = await getCollectionPaths({ variables: { limit: 5 } });

	return res.status(200).json({ paths: data })
}

export default paths
