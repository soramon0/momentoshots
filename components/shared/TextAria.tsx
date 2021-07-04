import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import DisplayError from '@/components/shared/DisplayError';

type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

interface Props extends TextAreaProps {
  name: string;
  label: string;
  error?: string[];
}
const TextAria: React.VFC<Props> = ({ name, label, error, ...props }) => {
  return (
    <label htmlFor={name} className="w-full h-full inline-block">
      {label}
      <textarea
        id={name}
        name={name}
        className="w-full h-full p-2 border border-gray-100 rounded-md"
        {...props}
      />
      <DisplayError error={error} />
    </label>
  );
};

export default TextAria;
