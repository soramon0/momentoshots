import { ICollections } from '@/types/pages/collections';
import Collection from './Collection';

interface Props {
  collections: ICollections;
}
const Collections: React.VFC<Props> = ({ collections }) => {
  return (
    <div className="space-y-8 md:space-y-0 md:flex md:flex-wrap md:justify-between">
      {collections.map((colection, i) => (
        <Collection collection={colection} index={i + 1} key={colection.id} />
      ))}
    </div>
  );
};

export default Collections;
