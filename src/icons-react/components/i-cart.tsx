import React, {createElement} from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconCartSvg } from '../../svg/icon-cart.svg';

export function IconCart({
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
            <IconCartSvg />
        </div>
    );
}
