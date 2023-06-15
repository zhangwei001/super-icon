import React, { createElement } from 'react';
import { defaultIconProps, IconProps} from '../../utils';
import { ReactComponent as IconSaveMoreSvg } from '../../svg/icon-save-more.svg';

export function IconSaveMore({
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
            <IconSaveMoreSvg />
        </div>
    );
}
