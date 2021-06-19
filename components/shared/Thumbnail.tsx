import Image, { ImageProps } from 'next/image';

type Props = ImageProps & {
  overlay?: boolean;
  boxPosition?: 'bl' | 'br';
};

const Thumbnail: React.VFC<Props> = ({
  overlay,
  boxPosition = 'bl',
  ...props
}) => {
  return (
    <div className="shadow-lg relative">
      <div
        className={`w-full border-2 border-gray-200 absolute -bottom-3 top-3 ${
          boxPosition === 'bl' ? '-left-3' : '-right-3'
        }`}
        aria-hidden
      />
      <Image {...props} alt={props.alt} />

      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-tl from-transparent to-gray-50 opacity-20"
          aria-hidden
        />
      )}
    </div>
  );
};

export default Thumbnail;
