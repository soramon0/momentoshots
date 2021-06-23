import Image from 'next/image';
import { ITestimonials } from 'types/pages/home';

interface Props {
  testimonial: ITestimonials[0];
}

const Testimonial: React.VFC<Props> = ({ testimonial: t }) => {
  const keywords = t.keywords.trim().split(',');

  return (
    <article className="my-4 mr-4 min-h-[13rem] p-4 rounded-lg shadow-md">
      <header className="flex space-x-4">
        <div className="w-[65px] h-[65px] p-0.5 rounded-md border border-gray-200">
          <Image
            className="rounded-md max-w-full"
            src={t.picture.url}
            alt={t.picture.alternativeText}
            width="65"
            height="65"
            objectFit="cover"
            layout="responsive"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-medium font-display">{t.fullname}</h3>
          <div className="space-x-2">
            {keywords.map((keyword) => (
              <span
                className="px-4 py-1 text-sm capitalize rounded-md text-white bg-primary"
                key={keyword}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </header>
      <q className="inline-block px-4 mt-4 text-gray-500">{t.content}</q>
    </article>
  );
};

export default Testimonial;
