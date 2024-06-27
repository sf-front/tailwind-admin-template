import React from 'react';
import classNames from 'classnames';
import { ComponentVariantType } from '@/types/components';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: ComponentVariantType;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  isOutlined = false,
  className,
}) => {
  // variables
  const baseStyles = 'focus:outline-none rounded';

  const variantStyles = {
    primary: isOutlined ? 'text-primary border' : 'bg-primary text-white',
    secondary: isOutlined ? 'text-secondary border' : 'bg-secondary text-white',
    dark: isOutlined ? 'text-boxdark border' : 'bg-boxdark text-white',
    gray: isOutlined ? 'text-form-strokedark border' : 'bg-form-strokedark text-white',
    success: isOutlined ? 'text-success border' : 'bg-success text-white',
    warning: isOutlined ? 'text-warning border' : 'bg-warning text-white',
    error: isOutlined ? 'text-error border' : 'bg-error text-white',
  };

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-md',
    large: 'px-6 py-3 text-lg',
  };

  const classes = classNames(baseStyles, variantStyles[variant], sizeStyles[size], { 'opacity-50 cursor-not-allowed': disabled }, className);

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
