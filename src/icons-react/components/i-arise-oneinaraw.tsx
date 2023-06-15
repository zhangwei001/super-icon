import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseOneinarawSvg } from '../../svg/icon-arise-oneinaraw.svg';

export function IconAriseOneinaraw({
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
      <IconAriseOneinarawSvg />
    </div>
  );
}
