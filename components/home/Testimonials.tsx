import { ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';

import { ITestimonials } from '@/types/pages/home';
import Testimonial from './Testimonial';

interface Props {
  testimonials: ITestimonials;
}

function appendDots(dots: ReactNode) {
  const Dots = () => (
    <div className="text-left mt-2 ml-2">
      <ul className="flex space-x-4">{dots}</ul>
    </div>
  );

  return <Dots />;
}

function customPaging(index: number) {
  const Paging = () => (
    <div className="w-8 h-8 rounded-full bg-red-400">
      <button>{index + 1}</button>
    </div>
  );

  return <Paging />;
}

const Testimonials: React.VFC<Props> = ({ testimonials }) => {
  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    className: 'mt-16',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots,
    customPaging,
  };

  return (
    <section className="px-4 sm:pl-8 md:pl-12 overflow-hidden">
      <h2 className="py-4 text-3xl font-display sm:text-4xl lg:text-5xl">
        What people say about us
      </h2>

      <Slider {...settings}>
        {testimonials.map((t) => (
          <Testimonial testimonial={t} key={t.id} />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
