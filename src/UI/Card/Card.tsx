import React from 'react';
import { CardProps } from './Card.interface';

export const Card: React.FC<CardProps> = ({
  className,
  isFeatured,
  children,
}) => {
  return (
    <div
      className={`card${isFeatured ? ' card--featured' : ''} ${
        className ? ' ' + className : ''
      }`}
    >
      {children}
    </div>
  );
};
