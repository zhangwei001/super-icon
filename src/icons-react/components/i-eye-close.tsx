import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconEyeCloseSvg } from '../../svg/icon-eye-close.svg';

export function IconEyeClose({
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: IconProps){
  const styles = {
    width: size,
    height: size,
    fill: color,
    stroke: color
  };
  return (
    <div style={styles}>
      <IconEyeCloseSvg />
    </div>
  );
}
