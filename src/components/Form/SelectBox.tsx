import React from 'react';
import classNames from 'classnames';

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type SelectBoxProps = {
  label?: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  disabled?: boolean;
};

const SelectBox: React.FC<SelectBoxProps> = ({ label, options, value, onChange, className, disabled = false }) => {
  const baseStyles = 'block w-full px-3 py-2 border rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-300';
  const classes = classNames(baseStyles, className, {
    'bg-gray-100 cursor-not-allowed': disabled,
    'border-gray-300': !disabled,
  });

  return (
    <div className="relative mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={classes}
        disabled={disabled}
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g opacity="0.8"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#637381"></path></g></svg>')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.5rem center',
          backgroundSize: '1.5rem 1.5rem',
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled} className={classNames({ 'text-gray-400': option.disabled })}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
