import React from 'react';
import classNames from 'classnames';

type TextareaProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  disabled = false,
  rows = 4,
}) => {
  // variables
  const baseStyles = 'block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300';
  const classes = classNames(baseStyles, className, {
    'bg-gray-100 cursor-not-allowed': disabled,
    'border-gray-300': !disabled,
  });

  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes}
        disabled={disabled}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;