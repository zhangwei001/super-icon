import React, { createElement } from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as IconNoticeSvg } from '../../svg/icon-notice.svg';

export function IconNotice({
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
            <IconNoticeSvg />
        </div>
    );
}
