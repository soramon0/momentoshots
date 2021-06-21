import type * as Types from '@/graphql/generated';

export type HomePageProps = React.FC<{
	highlights: [Types.GetHighlightsQuery['items'], Types.GetHighlightsQuery['items']];
}>;
