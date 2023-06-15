import React,{createElement} from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconArrowSvg } from '../../svg/icon-arrow.svg';

export function IconArrow({
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
          <IconArrowSvg />
        </div>
    );
}
