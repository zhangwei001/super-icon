import React, { createElement } from 'react';
import { defaultIconProps, IconProps} from '../../utils';
import { ReactComponent as IconPauseSvg } from '../../svg/icon-pause.svg';

export function IconPause({
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
      <IconPauseSvg />
    </div>
  );
}
