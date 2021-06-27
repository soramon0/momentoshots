import type * as Types from '@/graphql/generated';

export type ICollection = Types.GetCollectionQuery['collections'][0];
export type ICollectionPaths = Types.GetCollectionPathsQuery['collections'];

export type CollectionPageProps = React.FC<{
  collection: ICollection;
  collectionPaths: ICollectionPaths;
}>;
