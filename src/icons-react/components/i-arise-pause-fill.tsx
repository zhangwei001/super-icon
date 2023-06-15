import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils'
import { ReactComponent as IconArisePauseFillSvg } from '../../svg/icon-arise-pause-fill.svg';

export function IconArisePauseFill({
  size = defaultIconProps.size,
  color = defaultIconProps.color
}: IconProps){
  const styles = {
    width: size,
    height: size,
    fill: color
  };
  return (
    <div style={styles}>
      <IconArisePauseFillSvg />
    </div>
  );
}
