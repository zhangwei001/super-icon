import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconFreeShippingSvg } from '../../svg/icon-free-shipping.svg';

export function IconFreeShipping({
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
      <IconFreeShippingSvg />
    </div>
  );
}
