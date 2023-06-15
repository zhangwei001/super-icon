import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconArrowlightSvg } from '../../svg/icon-arrowlight.svg';

export function IconArrowlight({
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
      <IconArrowlightSvg />
    </div>
  );
}
