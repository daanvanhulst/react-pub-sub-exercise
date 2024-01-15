import { icons } from 'lucide-react';
import styles from './Icon.module.scss';
import { cn } from '../../../helpers/cn';

export type IconNames = keyof typeof icons;

type IconProps = {
  name: IconNames;
  size?: 16 | 20 | 24 | 32 | 40 | 48 | 64 | 128;
  className?: string;
} & React.ComponentPropsWithRef<'svg'>;

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  ...restProps
}) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      {...restProps}
      size={size}
      className={cn(className, styles['o-icon'])}
    />
  );
};
