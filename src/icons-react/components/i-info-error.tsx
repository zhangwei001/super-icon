import { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconInfoErrorSvg } from '../../svg/icon-info-error.svg';

export function IconInfoError({
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
      <IconInfoErrorSvg />
    </div>
  );
}
