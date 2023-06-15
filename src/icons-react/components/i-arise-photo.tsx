import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconArisePhotoSvg } from '../../svg/icon-arise-photo.svg';

export function IconArisePhoto({
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
      <IconArisePhotoSvg />
    </div>
  );
}
