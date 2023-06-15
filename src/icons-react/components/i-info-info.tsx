import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconInfoInfoSvg } from '../../svg/icon-info-info.svg';

export function IconInfoInfo({
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
      <IconInfoInfoSvg />
    </div>
  );
}
