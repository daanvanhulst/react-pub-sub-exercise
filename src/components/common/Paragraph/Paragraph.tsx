import React from 'react';
import styles from './Paragraph.module.scss';
import { cn } from '../../../helpers/cn';

interface ParagraphProps {
  bold?: boolean;
  small?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  small,
  bold,
  className,
}) => {
  const paragraphStyles = cn(
    styles['o-paragraph'],
    {
      [styles['o-paragraph--small']]: small,
      [styles['o-paragraph--bold']]: bold,
    },
    className
  );

  return <p className={paragraphStyles}>{children}</p>;
};
