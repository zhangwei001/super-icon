import React, { createElement } from 'react'
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconArisePackageFillSvg } from '../../svg/icon-arise-package-fill.svg';

export function IconArisePackageFill({
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
      <IconArisePackageFillSvg />
    </div>
  );
}
