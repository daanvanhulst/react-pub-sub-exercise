import React from 'react';
import styles from './Heading.module.scss';
import { cn } from '../../../helpers/cn';

type Headings = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  size: Headings;
  as?: Headings;
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  size,
  as,
  className,
  children,
}) => {
  const Tag = size;

  return (
    <Tag
      className={cn(
        styles['o-heading'],
        styles[`o-heading__${as ?? size}`],
        className
      )}
    >
      {children}
    </Tag>
  );
};
