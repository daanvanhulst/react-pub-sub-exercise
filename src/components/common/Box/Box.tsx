import React from 'react';
import styles from './Box.module.scss';
import { cn } from '../../../helpers/cn';

type BoxProps = React.ComponentPropsWithRef<'div'> & {
  rounded?: boolean;
};

export const Box: React.FC<BoxProps> = React.forwardRef((props, ref) => {
  const { children, className, rounded = false, ...restProps } = props;

  return (
    <div
      className={cn(
        styles['o-box'],
        { [styles['o-box--rounded']]: rounded },
        className
      )}
      {...restProps}
      ref={ref}
    >
      {children}
    </div>
  );
});
