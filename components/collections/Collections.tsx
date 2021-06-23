import { ICollections } from '@/types/pages/collections';
import Collection from './Collection';

interface Props {
  collections: ICollections;
}
const Collections: React.VFC<Props> = ({ collections }) => {
  console.log(collections);

  return (
    <div className="flex">
      {collections.map((colection) => (
        <Collection collection={colection} key={colection.id} />
      ))}
    </div>
  );
};

export default Collections;
