import React from 'react';
import { StackProps } from './Stack.interface';

export const Stack: React.FC<StackProps> = ({
  contentPosition,
  children,
  ...props
}) => {
  return (
    <div
      className='stack'
      style={{ justifyContent: contentPosition }}
      {...props}
    >
      {children}
    </div>
  );
};
