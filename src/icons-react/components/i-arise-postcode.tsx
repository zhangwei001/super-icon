import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconArisePostcodeSvg } from '../../svg/icon-arise-postcode.svg';

export function IconArisePostcode({
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
      <IconArisePostcodeSvg />
    </div>
  );
}
