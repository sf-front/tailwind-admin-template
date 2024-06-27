import React from 'react';
import classNames from 'classnames';

type CardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, description, children, className }) => {
  // variables
  const baseStyles = 'rounded-lg shadow-lg overflow-hidden bg-white  p-8';
  const classes = classNames(baseStyles, className);

  return (
    <div className={classes}>
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
