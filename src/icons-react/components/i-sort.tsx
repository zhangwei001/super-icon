import React, { createElement } from 'react';
import { defaultIconProps, IconProps} from '../../utils';
import { ReactComponent as IconSortSvg } from '../../svg/icon-sort.svg';

export function IconSort({
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
      <IconSortSvg />
    </div>
  );
}
