import React, { createElement } from 'react';
import { defaultIconProps, IconProps} from '../../utils';
import { ReactComponent as IconSmallscreenSvg } from '../../svg/icon-smallscreen.svg';

export function IconSmallscreen({
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
      <IconSmallscreenSvg />
    </div>
  );
}
