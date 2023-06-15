import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseVoucherFillSvg } from '../../svg/icon-arise-voucher-fill.svg';

export function IconAriseVoucherFill({
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
      <IconAriseVoucherFillSvg />
    </div>
  );
}
