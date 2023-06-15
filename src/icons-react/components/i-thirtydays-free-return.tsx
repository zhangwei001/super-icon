import React ,{createElement} from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconThirtydaysFreeReturnSvg } from '../../svg/icon-thirtydays-free-return.svg';

export function IconThirtydaysFreeReturn({
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
      <IconThirtydaysFreeReturnSvg />
    </div>
  );
};

IconThirtydaysFreeReturn.displayName = 'IconThirtydaysFreeReturn';