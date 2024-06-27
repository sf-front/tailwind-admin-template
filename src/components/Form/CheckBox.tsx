import React from 'react';
import classNames from 'classnames';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  className,
  disabled = false,
}) => {
  // variables
  const baseStyles =
    'form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out';
  const classes = classNames(baseStyles, className, {
    'cursor-not-allowed opacity-50': disabled,
  });

  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={classes}
        disabled={disabled}
      />
      <label className="ml-2 text-sm font-medium text-gray-700">{label}</label>
    </div>
  );
};

export default Checkbox;