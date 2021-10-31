import Slider, { Settings } from 'react-slick';

import { Review } from '@/sanity/schemaTypes';
import Testimonial from '@/components/home/Testimonial';

interface Props {
  reviews: Review[];
}

const Testimonials: React.VFC<Props> = ({ reviews }) => {
  return (
    <section className="px-4 sm:pl-8 md:pl-12">
      <h2 className="py-4 text-3xl font-display sm:text-4xl lg:text-5xl">
        What people say about us
      </h2>

      <Slider {...settings}>
        {reviews.map((review) => (
          <Testimonial review={review} key={review._id} />
        ))}
      </Slider>
    </section>
  );
};

const settings: Settings = {
  dots: true,
  arrows: false,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  className: 'mt-16 h-72',
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
  appendDots: function Dots(dots) {
    return (
      <div className="text-left -mt-2 ml-2">
        <ul className="-mt-16 flex space-x-4">{dots}</ul>
      </div>
    );
  },
  customPaging: function Paging(index) {
    return (
      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gray-100">
        <button>{index + 1}</button>
      </div>
    );
  },
};

export default Testimonials;
