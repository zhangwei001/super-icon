import React, { createElement } from 'react'
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconArisePackageSvg } from '../../svg/icon-arise-package.svg';

export function IconArisePackage({
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
      <IconArisePackageSvg />
    </div>
  );
}
