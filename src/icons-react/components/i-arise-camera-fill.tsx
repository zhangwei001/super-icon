import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseCameraFillSvg } from '../../svg/icon-arise-camera-fill.svg';


export function IconAriseCameraFill({
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
      <IconAriseCameraFillSvg />
    </div>
  );
}
