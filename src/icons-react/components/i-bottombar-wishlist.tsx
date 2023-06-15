import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconBottombarWishlistSvg } from '../../svg/icon-bottombar-wishlist.svg';

export function IconBottombarWishlist({
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
      <IconBottombarWishlistSvg />
    </div>
  );
}
