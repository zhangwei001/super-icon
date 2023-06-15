import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconDeleteSvg } from '../../svg/icon-delete.svg';

export function IconDelete({
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
      <IconDeleteSvg />
    </div>
  );
}
