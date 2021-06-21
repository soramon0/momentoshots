import { ITestimonials } from 'types/pages/home';

interface Props {
  testimonials: ITestimonials;
}
const Testimonials: React.VFC<Props> = ({ testimonials }) => {
  return (
    <div>
      <p>{testimonials[0].content}</p>
    </div>
  );
};

export default Testimonials;
