import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseEditSvg } from '../../svg/icon-arise-edit.svg';


export function IconAriseEdit({
  size =  defaultIconProps.size,
  color = defaultIconProps.color
}: IconProps){
  const styles = {
    width: size,
    height: size,
    fill: color
  };
  return (
    <div style={styles}>
      <IconAriseEditSvg />
    </div>
  );
}
