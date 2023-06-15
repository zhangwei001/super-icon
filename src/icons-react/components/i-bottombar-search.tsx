import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconBottombarSearchSvg } from '../../svg/icon-bottombar-search.svg';

export function IconBottombarSearch({
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
      <IconBottombarSearchSvg />
    </div>
  );
}
