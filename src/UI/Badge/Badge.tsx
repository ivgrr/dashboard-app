import React from 'react';
import { BadgeProps } from './Badge.interface';
import { ReactComponent as RemoveIcon } from '../../assets/images/icon-remove.svg';

export const Badge: React.FC<BadgeProps> = ({
  type = 'basic',
  color = 'light',
  onBadgeClick,
  onClear,
  children,
  ...props
}) => {
  return (
    <div
      className={`badge badge--${type} badge--${color}`}
      onClick={onBadgeClick}
      {...props}
    >
      <span>{children}</span>
      {type === 'clearable' && (
        <div className='badge-remover' onClick={onClear}>
          <RemoveIcon />
        </div>
      )}
    </div>
  );
};
