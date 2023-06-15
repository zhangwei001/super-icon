import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseArrowrightSvg } from '../../svg/icon-arise-arrowright.svg';


export function IconAriseArrowright({
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
      <IconAriseArrowrightSvg />
    </div>
  );
}

