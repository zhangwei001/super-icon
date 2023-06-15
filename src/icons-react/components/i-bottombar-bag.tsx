import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconBottombarBagSvg } from '../../svg/icon-bottombar-bag.svg';

export function IconBottombarBag({
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
      <IconBottombarBagSvg />
    </div>
  );
}

