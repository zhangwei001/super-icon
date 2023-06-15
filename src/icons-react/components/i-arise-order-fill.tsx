import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseOrderFillSvg } from '../../svg/icon-arise-order-fill.svg';

export function IconAriseOrderFill({
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
      <IconAriseOrderFillSvg />
    </div>
  );
}
