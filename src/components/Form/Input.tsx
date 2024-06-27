import React from 'react';
import classNames from 'classnames';

type InputProps = {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  disabled = false,
}) => {
  // variables
  const baseStyles = 'block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300';
  const classes = classNames(baseStyles, className, {
    'bg-gray-100 cursor-not-allowed': disabled,
    'border-gray-300': !disabled,
  });

  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;