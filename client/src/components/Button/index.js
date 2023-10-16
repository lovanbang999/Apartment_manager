import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Button.module.scss';
import { Stack } from '@mui/material';

const cx = classNames.bind(style);

const buttonTypes = Object.freeze({
    href: 'a',
    to: Link,
});

function buttonFactory(props) {
    for (const [key, value] of Object.entries(props)) {
        if (Object.keys(props).includes(key) && value && value.length > 0) return buttonTypes[key];
    }

    return 'button';
}

function removeEventWhenDisabled(disabled, args) {
    if (disabled) {
        Object.keys(args).forEach((key) => {
            if (key.startsWith('on') && typeof args[key] === 'function') delete args[key];
        });
    }
}

function Button({
    primary = false,
    outline = false,
    outlinePrimary = false,
    disabled = false,
    genus = 'small',
    br10 = false,
    icon16 = false,
    style = {},
    children,
    className,
    leftIcon,
    rightIcon,
    onclick,
    ...passProps
}) {
    removeEventWhenDisabled(disabled, passProps);
    let Component = buttonFactory(passProps);

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        outlinePrimary,
        br10,
        icon16,
        disabled,
    });
    return (
        <Component className={classes} {...passProps} style={style} onClick={onclick}>
            <Stack direction="row" gap={1} alignItems="center">
                {leftIcon &&
                    (typeof leftIcon === 'string' ? (
                        <img src={leftIcon} alt="left-icon" className={cx('icon')} />
                    ) : (
                        leftIcon
                    ))}
                <span className={cx('title')}>{children}</span>
                {rightIcon &&
                    (typeof rightIcon === 'string' ? (
                        <img src={rightIcon} alt="right-icon" className={cx('icon')} />
                    ) : (
                        rightIcon
                    ))}
            </Stack>
        </Component>
    );
}

export default Button;
