import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconSwitchlistSvg } from '../../svg/icon-switchlist.svg';

export function IconSwitchlist({
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
      <IconSwitchlistSvg />
    </div>
  );
}
