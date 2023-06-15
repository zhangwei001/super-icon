import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseTwoinrawSvg } from '../../svg/icon-arise-twoinraw.svg';

export function IconAriseTwoinraw({
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
      <IconAriseTwoinrawSvg />
    </div>
  );
}
