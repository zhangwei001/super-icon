import React, { createElement } from 'react';
import { defaultIconProps, IconProps} from '../../utils';
import { ReactComponent as IconAriseReviewStarSvg } from '../../svg/icon-arise-review-star.svg';

export function IconAriseReviewStar({
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
      <IconAriseReviewStarSvg />
    </div>
  );
}
