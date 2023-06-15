import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconAriseFeedbackSvg } from '../../svg/icon-arise-feedback.svg';


export function IconAriseFeedback({
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
      <IconAriseFeedbackSvg />
    </div>
  );
}
