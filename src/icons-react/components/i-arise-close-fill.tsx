import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseCloseFillSvg } from '../../svg/icon-arise-close-fill.svg';


export function IconAriseCloseFill({
  size = defaultIconProps.size,
  color = defaultIconProps.color
}: IconProps){
  const styles = {
    width: size,
    height: size,
    fill: color,
    stroke: color
  };
  return (
    <div style={styles}>
      <IconAriseCloseFillSvg />
    </div>
  );
}
