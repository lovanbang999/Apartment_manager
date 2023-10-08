import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import images from '../../assets/img';
import Button from '../Button';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <a href="/">
                    <img src={images.logo} alt="Logo" />
                </a>
            </div>
            <div className={cx('actions')}>
                <Button rightIcon={<FontAwesomeIcon icon={faCaretDown} />} className={cx('action-icon')}>
                    Tính năng
                </Button>
                <Button rightIcon={<FontAwesomeIcon icon={faCaretDown} />} className={cx('action-icon')}>
                    Thông tin
                </Button>
                <Button primary br10 href="tel:0336715316" leftIcon={<FontAwesomeIcon icon={faPhone} />}>
                    0336715316
                </Button>
                <Button primary br10 to="/login" leftIcon={<FontAwesomeIcon icon={faUser} />}>
                    Dăng nhập
                </Button>
            </div>
        </header>
    );
}

export default Header;
