import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconMinusSvg } from '../../svg/icon-minus.svg';

export function IconMinus({
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
            <IconMinusSvg />
        </div>
    );
}
