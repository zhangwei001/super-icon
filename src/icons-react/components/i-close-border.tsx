import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconCloseBorderSvg } from '../../svg/icon-close-border.svg';

export function IconCloseBorder({
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
      <IconCloseBorderSvg />
    </div>
  );
}