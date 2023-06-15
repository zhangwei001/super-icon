import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseVolumeFillSvg } from '../../svg/icon-arise-volume-fill.svg';

export function IconAriseVolumeFill({
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
      <IconAriseVolumeFillSvg />
    </div>
  );
}
