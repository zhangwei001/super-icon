import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseChathistorySvg } from '../../svg/icon-arise-chat-history.svg';

export function IconAriseChathistory({
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
      <IconAriseChathistorySvg />
    </div>
  );
}

