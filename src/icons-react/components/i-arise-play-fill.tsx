import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconArisePlayFillSvg } from '../../svg/icon-arise-play-fill.svg';

export function IconArisePlayFill({
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
      <IconArisePlayFillSvg />
    </div>
  );
}
