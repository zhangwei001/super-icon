import React, { createElement } from 'react';
import { defaultIconProps, IconProps} from '../../utils';
import { ReactComponent as IconAriseReviewLikeSvg } from '../../svg/icon-arise-review-like.svg';

export function IconAriseReviewLike({
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
      <IconAriseReviewLikeSvg />
    </div>
  );
}
