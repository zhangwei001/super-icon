import { FC, ReactElement } from 'react';

export type IconProps = {
  name?: string;
  size?: number | string;
  color?: string;
};

export function createIconComponent(svg: ReactElement) {
  return svg;
}

export const defaultIconProps: IconProps = {
  size: 40,
  color: '#555',
};
