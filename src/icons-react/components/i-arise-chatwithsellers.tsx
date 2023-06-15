import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseChatwithsellersSvg } from '../../svg/icon-arise-chatwithsellers.svg';


export function IconAriseChatwithsellers({
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
      <IconAriseChatwithsellersSvg />
    </div>
  );
}
