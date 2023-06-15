import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils'
import { ReactComponent as IconArisePromosSvg } from '../../svg/icon-arise-promos.svg';

export function IconArisePromos({
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
      <IconArisePromosSvg />
    </div>
  );
}
