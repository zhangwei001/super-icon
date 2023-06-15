import React, { createElement } from 'react'
import { createIconComponent, defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconBottombarAccountSvg } from '../../svg/icon-bottombar-account.svg';

export function IconBottombarAccount({
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
      <IconBottombarAccountSvg />
    </div>
  );
}
