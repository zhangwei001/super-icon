import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseVideoSvg } from '../../svg/icon-arise-video.svg';

export function IconAriseVideo({
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
      <IconAriseVideoSvg />
    </div>
  );
}
