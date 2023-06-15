import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseHelpcenterSvg } from '../../svg/icon-arise-helpcenter.svg';


export function IconAriseHelpcenter({
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
      <IconAriseHelpcenterSvg />
    </div>
  );
}
