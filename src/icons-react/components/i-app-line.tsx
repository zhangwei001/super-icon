import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAppLineSvg } from '../../svg/icon-app-line.svg';

export function IconAppLine({
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: IconProps){
  const styles = {
    width: size,
    height: size,
    fill: color,
  };
  return (
    <div style={styles}>
      <IconAppLineSvg />
    </div>
  );
};
