import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconChatSvg } from '../../svg/icon-chat.svg';

export function IconChat({
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
            <IconChatSvg />
        </div>
    );
}
