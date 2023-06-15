import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconInfoNotificationSvg } from '../../svg/icon-info-notification.svg';

export function IconInfoNotification({
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
      <IconInfoNotificationSvg />
    </div>
  );
}
