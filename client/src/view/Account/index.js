import { useContext, useState } from 'react';
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
            to: '/user/statistical',
        },
        {
            children: 'Hợp đồng',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/user/contract',
        },
        {
            children: 'Tài khoản',
            rightIcon: <AccountCircleIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/account',
            icon16: true,
        },
    ];

    const [activebtn, setActiveBtn] = useState({
        personalInfor: true,
        accountAndPassword: false,
    });

    const { personalInfor, accountAndPassword } = activebtn;

    const chnageActiveBtn = (e) => {
        const btn = e.target.closest(`.${cx('menu-item-btn')}`);

        const namebtn = btn.name;

        // const newActivebtn = activebtn.forEach((element) => {
        //     console.log(element);
        // });
        // console.log(newActivebtn);

        if (namebtn === 'personalInfor') {
            setActiveBtn({
                personalInfor: true,
                accountAndPassword: false,
            });
        } else if (namebtn === 'accountAndPassword') {
            setActiveBtn({
                personalInfor: false,
                accountAndPassword: true,
            });
        }
    };

    const personalInforClass = cx('menu-item', {
        active: personalInfor,
    });

    const inforBlock = cx('infor', {
        active: personalInfor,
    });

    const accountAndPasswordClass = cx('menu-item', {
        active: accountAndPassword,
    });

    const accountBlock = cx('account', {
        active: accountAndPassword,
    });

    return (
        <div className={cx('wrapper')}>
            <Header actionsBtn={actionsHeader} />
            <div className={cx('container')}>
                <div className={cx('container-inner')}>
                    <div className={cx('menu')}>
                        <h2 className={cx('menu-heading')}>Trung tâm tài khoản</h2>
                        <div className={cx('menu-body')}>
                            <ul className={cx('menu-list')}>
                                <li className={personalInforClass}>
                                    <button
                                        name="personalInfor"
                                        className={cx('menu-item-btn')}
                                        onClick={chnageActiveBtn}
                                    >
                                        <span className={cx('menu-item-icon')}>
                                            <FontAwesomeIcon icon={faIdBadge} />
                                        </span>
                                        <span className={cx('menu-item-content')}>Thông tin cá nhân</span>
                                    </button>
                                </li>
                                <li className={accountAndPasswordClass}>
                                    <button
                                        name="accountAndPassword"
                                        className={cx('menu-item-btn')}
                                        onClick={chnageActiveBtn}
                                    >
                                        <span className={cx('menu-item-icon')}>
                                            <FontAwesomeIcon icon={faUserShield} />
                                        </span>
                                        <span className={cx('menu-item-content')}>Tài khoản và mặt khẩu</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={inforBlock}>
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
                        <Link outline="true" className={cx('logout-btn')} onClick={logoutUser}>
                            Đăng xuất
                            <span className={cx('logout-btn-icon')}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </span>
                        </Link>
                    </div>
                    <div className={accountBlock}>
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
