import React, { createElement } from 'react'
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseFilterSvg } from '../../svg/icon-arise-filter.svg';


export function IconAriseFilter({
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
      <IconAriseFilterSvg />
    </div>
  );
}
