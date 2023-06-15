import React, { createElement } from 'react';
import { defaultIconProps, IconProps} from '../../utils';
import { ReactComponent as IconPlaceholderSvg } from '../../svg/icon-placeholder.svg';

export function IconPlaceholder({
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
      <IconPlaceholderSvg />
    </div>
  );
}
