import { ICollections } from '@/types/pages/collections';

interface Props {
  collection: ICollections[0];
}

const Collection: React.VFC<Props> = ({ collection }) => {
  return (
    <article className="flex-1">
      <h2>{collection.name}</h2>
    </article>
  );
};

export default Collection;
