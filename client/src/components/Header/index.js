import classNames from 'classnames/bind';

import style from './Header.module.scss';
import images from '../../assets/img';
import Button from '../Button';

const cx = classNames.bind(style);

function Header({ actionsBtn }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <a href="/">
                    <img src={images.logo} alt="Logo" />
                </a>
            </div>
            <div className={cx('actions')}>
                {actionsBtn &&
                    actionsBtn.map((button, index) => {
                        const { children, icon, ...properties } = button;

                        return (
                            <Button
                                key={index}
                                leftIcon={properties.leftIcon}
                                rightIcon={properties.rightIcon}
                                primary={properties.primary}
                                genus={properties.genus || 'small'}
                                disabled={properties.disabled}
                                outline={properties.outline}
                                outlinePrimary={properties.outlinePrimary}
                                href={properties.href || null}
                                to={properties.to || null}
                                br10={properties.br10 || false}
                                icon16={properties.icon16 || false}
                                style={properties.style || null}
                                className={cx(properties.className) || ''}
                            >
                                {children}
                            </Button>
                        );
                    })}
            </div>
        </header>
    );
}

export default Header;
