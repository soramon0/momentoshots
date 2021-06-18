type Props = React.SVGProps<SVGSVGElement>;

const IconIG: React.VFC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 26 26"
      stroke="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M19.361 5.976h1.686M8.405.833h10.114c3.723 0 6.742 3.07 6.742 6.857v10.286c0 3.787-3.019 6.857-6.742 6.857H8.405c-3.724 0-6.743-3.07-6.743-6.857V7.69c0-3.787 3.019-6.857 6.743-6.857zm5.057 17.143c-2.793 0-5.057-2.302-5.057-5.143 0-2.84 2.264-5.143 5.057-5.143 2.793 0 5.057 2.303 5.057 5.143s-2.264 5.143-5.057 5.143z" />
    </svg>
  );
};

export default IconIG;
