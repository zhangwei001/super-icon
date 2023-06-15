import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAppAppleSvg } from '../../svg/icon-app-apple.svg';

export function IconAppApple({
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
      <IconAppAppleSvg />
    </div>
  );
};

