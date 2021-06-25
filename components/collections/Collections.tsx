import { ICollections } from '@/types/pages/collections';
import Collection from './Collection';

interface Props {
  collections: ICollections;
}
const Collections: React.VFC<Props> = ({ collections }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
      {collections.map((colection, i) => (
        <Collection collection={colection} index={i + 1} key={colection.id} />
      ))}
    </div>
  );
};

export default Collections;
