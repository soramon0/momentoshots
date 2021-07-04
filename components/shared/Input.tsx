import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import DisplayError from '@/components/shared/DisplayError';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  name: string;
  label: string;
  error?: string[];
}

const Input: React.VFC<Props> = ({ name, label, error, ...props }) => {
  return (
    <label htmlFor={name} className="block">
      {label}
      <input
        id={name}
        name={name}
        type="text"
        placeholder="Your Full Name"
        className="w-full p-2 border border-gray-100 rounded-md"
        {...props}
      />
      <DisplayError error={error} />
    </label>
  );
};

export default Input;
