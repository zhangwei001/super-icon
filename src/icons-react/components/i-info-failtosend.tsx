import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconInfoFailtosendSvg } from '../../svg/icon-info-failtosend.svg';

export function IconInfoFailtosend({
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
      <IconInfoFailtosendSvg />
    </div>
  );
}
