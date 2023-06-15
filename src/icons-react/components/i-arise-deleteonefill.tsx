import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseDeleteonefillSvg } from '../../svg/icon-arise-deleteonefill.svg';


export function IconAriseDeleteonefill({
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
      <IconAriseDeleteonefillSvg />
    </div>
  );
}
