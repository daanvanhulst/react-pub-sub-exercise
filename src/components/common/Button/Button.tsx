import React from 'react';
import styles from './Button.module.scss';
import { cn } from '../../../helpers/cn';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'danger' | 'ghost-danger';
};

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    onClick,
    type = 'button',
    variant = 'primary',
    children,
    disabled,
    ...restProps
  } = props;

  const classnames = cn(styles['o-button'], {
    [styles[`o-button--${variant}`]]: variant,
  });

  return (
    <button
      onClick={onClick}
      type={type}
      className={classnames}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
