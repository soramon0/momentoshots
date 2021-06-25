import type * as Types from '@/graphql/generated';

export type IHighlights = Types.GetHomePageDataQuery['items']
export type ITestimonials = Types.GetHomePageDataQuery['homePage']['testimonials']

export type HomePageProps = React.FC<{
	highlights: IHighlights;
	testimonials: ITestimonials
}>;
