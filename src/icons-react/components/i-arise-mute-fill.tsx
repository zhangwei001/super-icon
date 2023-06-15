import React, { createElement } from 'react';
import { defaultIconProps, IconProps} from '../../utils';
import { ReactComponent as IconAriseMuteFillSvg } from '../../svg/icon-arise-mute-fill.svg';

export function IconAriseMuteFill({
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
      <IconAriseMuteFillSvg />
    </div>
  );
}
