import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconBottombarHomeSvg } from '../../svg/icon-bottombar-home.svg';

export function IconBottombarHome({
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
      <IconBottombarHomeSvg />
    </div>
  );
}
