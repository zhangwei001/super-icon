import React, { createElement } from 'react';
import { defaultIconProps, IconProps} from '../../utils';
import { ReactComponent as IconAriseReturnSvg } from '../../svg/icon-arise-return.svg';

export function IconAriseReturn({
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
      <IconAriseReturnSvg />
    </div>
  );
}
