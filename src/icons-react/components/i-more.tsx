import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconMoreSvg } from '../../svg/icon-more.svg';

export function IconMore({
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
      <IconMoreSvg />
    </div>
  );
}
