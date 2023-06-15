import React, { createElement } from 'react'
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconArisePhotoFillSvg } from '../../svg/icon-arise-photo-fill.svg';

export function IconArisePhotoFill({
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
      <IconArisePhotoFillSvg />
    </div>
  );
}
