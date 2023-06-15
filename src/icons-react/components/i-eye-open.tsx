import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconEyeOpenSvg } from '../../svg/icon-eye-open.svg';

export function IconEyeOpen({
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
      <IconEyeOpenSvg />
    </div>
  );
}
