import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconFullscreenSvg } from '../../svg/icon-fullscreen.svg';

export function IconFullscreen({
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
      <IconFullscreenSvg />
    </div>
  );
}
