import type * as Stitches from '@stitches/react';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  css?: Stitches.CSS;
} & React.HTMLAttributes<HTMLButtonElement>;