import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseFreeshippingSvg } from '../../svg/icon-arise-freeshipping.svg';

export function IconAriseFreeshipping({
  size = defaultIconProps.size,
  color = defaultIconProps.color
}: IconProps){
  const styles = {
    width: size,
    height: size,
    fill: color
  }
  return (
    <div style={styles}>
      <IconAriseFreeshippingSvg />
    </div>
  );
}
