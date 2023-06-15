import React ,{createElement} from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAddFillSvg } from '../../svg/icon-add-fill.svg';

export function IconAddFill({
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
      <IconAddFillSvg />
    </div>
  );
};
