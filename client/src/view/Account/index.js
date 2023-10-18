import { useContext } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faCopy,
    faEnvelope,
    faIdBadge,
    faLocationDot,
    faPhoneVolume,
    faRightFromBracket,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';

import { faEye } from '@fortawesome/free-regular-svg-icons';

import style from './Account.module.scss';
import Header from '../../components/Header';
import images from '../../assets/img';
import { AuthContext } from '../../contexts/AuthContext';

const cx = classNames.bind(style);

function Account() {
    const {
        authState: {
            user: { username },
        },
        logoutUser,
    } = useContext(AuthContext);

    const actionsHeader = [
        {
            children: 'Thông báo',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/home',
        },
        {
            children: 'Thống kê',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            disabled: true,
        },
        {
            children: 'Hợp đồng',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            disabled: true,
        },
        {
            children: 'Tài khoản',
            rightIcon: <AccountCircleIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/account',
            icon16: true,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <Header actionsBtn={actionsHeader} />
            <div className={cx('container')}>
                <div className={cx('container-inner')}>
                    <div className={cx('menu')}>
                        <h2 className={cx('menu-heading')}>Trung tâm tài khoản</h2>
                        <div className={cx('menu-body')}>
                            <ul className={cx('menu-list')}>
                                <li className={cx('menu-item')}>
                                    <span className={cx('menu-item-icon')}>
                                        <FontAwesomeIcon icon={faIdBadge} />
                                    </span>
                                    <span className={cx('menu-item-content')}>Thông tin cá nhân</span>
                                </li>
                                <li className={cx('menu-item')}>
                                    <span className={cx('menu-item-icon')}>
                                        <FontAwesomeIcon icon={faUserShield} />
                                    </span>
                                    <span className={cx('menu-item-content')}>Tài khoản và mặt khẩu</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('infor')}>
                        <div className={cx('infor-author')}>
                            <div className={cx('author-avatar')}>
                                <img src={images.User.avatarUser1} alt="Avatar" />
                            </div>
                            <div className={cx('author-content')}>
                                <div className={cx('author-name')}>Lò Văn Bằng</div>
                                <div className={cx('author-rule')}>Người dùng</div>
                            </div>
                        </div>
                        <div className={cx('infor-heading')}>Thông tin khách hàng</div>
                        <ul className={cx('infor-content')}>
                            <li className={cx('infor-item')}>
                                <span className={cx('infor-item-icon')}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <span className={cx('infor-item-content')}>Mường bám - Thuận Châu - Sơn La</span>
                            </li>
                            <li className={cx('infor-item')}>
                                <span className={cx('infor-item-icon')}>
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                </span>
                                <span className={cx('infor-item-content')}>0336715316</span>
                                <span className={cx('infor-item-copy')}>
                                    <FontAwesomeIcon icon={faCopy} />
                                </span>
                            </li>
                            <li className={cx('infor-item')}>
                                <span className={cx('infor-item-icon')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <span className={cx('infor-item-content')}>lovanbangbox9@gmail.com</span>
                                <span className={cx('infor-item-copy')}>
                                    <FontAwesomeIcon icon={faCopy} />
                                </span>
                            </li>
                            <li className={cx('infor-item')}>
                                <span className={cx('infor-item-icon')}>
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </span>
                                <span className={cx('infor-item-content')}>Sinh viên</span>
                            </li>
                        </ul>
                        <Link outline className={cx('logout-btn')} onClick={logoutUser}>
                            Đăng xuất
                            <span className={cx('logout-btn-icon')}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </span>
                        </Link>
                    </div>
                    <div className={cx('account')}>
                        <div className={cx('account-item')}>
                            <div className={cx('account-item-label')}>Tên tài khoản</div>
                            <div className={cx('account-item-cotent')}>Lò Văn Bằng</div>
                            <button className={cx('change-btn')}>Thay đổi</button>
                        </div>
                        <div className={cx('account-item')}>
                            <div className={cx('account-item-label')}>Mật khẩu</div>
                            <div className={cx('account-item-cotent')}>
                                <span className={cx('account-item-cotent-inner')}>*******</span>
                                <button className={cx('account-item-cotent-icon')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </div>
                            <button className={cx('change-btn')}>Thay đổi</button>
                        </div>
                        <div className={cx('account-item')}>
                            <div className={cx('account-item-label')}>Email</div>
                            <div className={cx('account-item-cotent')}>lovanbangbox9@gmail.com</div>
                            <button className={cx('change-btn')}>Thay đổi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
