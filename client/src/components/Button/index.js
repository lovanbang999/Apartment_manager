import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Button.module.scss';

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
    small = false,
    large = false,
    br2 = false,
    br4 = false,
    br8 = false,
    br10 = false,
    round = false,
    children,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    removeEventWhenDisabled(disabled, passProps);
    let Component = buttonFactory(passProps);

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        outlinePrimary,
        disabled,
        small,
        large,
        br2,
        br4,
        br8,
        br10,
        round,
    });

    return (
        <Component className={classes} {...passProps}>
            {leftIcon &&
                (typeof leftIcon === 'string' ? (
                    <img src={leftIcon} alt="left-icon" className={cx('icon')} />
                ) : (
                    <span className={cx('icon')}>{leftIcon}</span>
                ))}
            <span className={cx('title')}>{children}</span>
            {rightIcon &&
                (typeof rightIcon === 'string' ? (
                    <img src={rightIcon} alt="right-icon" className={cx('icon')} />
                ) : (
                    <span className={cx('icon')}>{rightIcon}</span>
                ))}
        </Component>
    );
}

export default Button;
