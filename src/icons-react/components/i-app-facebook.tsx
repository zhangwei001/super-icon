import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAppFacebookSvg } from '../../svg/icon-app-facebook.svg';

export function IconAppFacebook({
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
      <IconAppFacebookSvg />
    </div>
  );
};
