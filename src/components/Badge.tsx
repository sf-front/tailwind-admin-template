import React from 'react';
import classNames from 'classnames';
import { ComponentVariantType } from '@/types/components';

type BadgeProps = {
  text: string;
  variant?: ComponentVariantType;
  className?: string;
  isRound?: boolean;
  isOutlined?: boolean;
};

const Badge: React.FC<BadgeProps> = ({ text, variant = 'primary', className, isRound = false, isOutlined = false }) => {
  // style
  const baseStyles = 'inline-flex items-center px-2 py-1 text-sm font-medium hover:opacity-80 cursor-pointer';
  const variantStyles = {
    primary: isOutlined ? 'text-primary border' : 'bg-primary text-white',
    secondary: isOutlined ? 'text-secondary border' : 'bg-secondary text-white',
    dark: isOutlined ? 'text-boxdark border' : 'bg-boxdark text-white',
    gray: isOutlined ? 'text-form-strokedark border' : 'bg-form-strokedark text-white',
    success: isOutlined ? 'text-success border' : 'bg-success text-white',
    warning: isOutlined ? 'text-warning border' : 'bg-warning text-white',
    error: isOutlined ? 'text-error border' : 'bg-error text-white',
  };
  const roundStyles = isRound ? 'rounded-full' : 'rounded';

  const classes = classNames(baseStyles, variantStyles[variant], roundStyles, className);

  return <span className={classes}>{text}</span>;
};

export default Badge;
