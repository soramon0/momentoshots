type Props = React.SVGProps<SVGSVGElement>;

const IconExternalLink: React.VFC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      className="w-7 h-7 text-primary"
      fill="none"
      {...props}
    >
      <path
        d="M21 5L11 15m0-8H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4l-8-8zm4-2h6-6zm6 0v6-6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      />
    </svg>
  );
};

export default IconExternalLink;
