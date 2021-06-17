import Image, { ImageProps } from 'next/image';

type Props = ImageProps & {
  overlay?: boolean;
};

const Thumbnail: React.VFC<Props> = ({ overlay, ...props }) => {
  return (
    <div className="h-full shadow-md relative">
      <div
        className="w-full absolute -left-3 top-3 -bottom-3 right-0 border-2 border-gray-200"
        aria-hidden
      />
      <Image {...props} alt={props.alt} />

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-gray-50 opacity-20" />
      )}
    </div>
  );
};

export default Thumbnail;
