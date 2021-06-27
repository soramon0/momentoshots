import type * as Types from '@/graphql/generated';

export type ICollections = Types.GetCollectionsQuery['collections'];

export type CollectionsPageProps = React.FC<{
  collections: ICollections;
}>;
