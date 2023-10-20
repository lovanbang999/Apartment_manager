import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faBriefcase,
    faCopy,
    faEnvelope,
    faIdBadge,
    faLocationDot,
    faPhoneVolume,
    faRightFromBracket,
    faUserShield,
    faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

import Button from '../../../components/Button';
import style from './AccountManagement.module.scss';
import Header from '../../../components/Header';
import images from '../../../assets/img';
import { AuthContext } from '../../../contexts/AuthContext';

const cx = classNames.bind(style);

function AccountManagement() {
    const actionsHeader = [
        {
            children: 'Khách thuê',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/admin/tenant-list',
        },
        {
            children: 'Danh sách hợp đồng',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/admin/contract-list',
        },
        {
            children: 'Thông báo',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            disabled: true,
        },
        {
            children: 'Tài khoản',
            rightIcon: <AccountCircleIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/admin/account',
            icon16: true,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <Header actionsBtn={actionsHeader} />
            <div className={cx('container')}>
                <div className={cx('content-left')}>
                    <div className={cx('menu')}>
                        <div className={cx('menu_infor')}>
                            <h2 className={cx('menu_title')}>QUẢN LÝ TÀI KHOẢN</h2>
                            <div className={cx('menu_line')}></div>
                            <div className={cx('menu_toolbar')}>
                                <div className={cx('menu_find')}>
                                    <input type="text" value={''} placeholder="Tìm Kiếm" className={cx('find')}></input>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('find_icon')} />
                                </div>
                                <div className={cx('menu_filter')}>
                                    <select className={cx('filter_box')} defaultValue="Chua_chon">
                                        <option
                                            disabled="disabled"
                                            value="Chua_chon"
                                            className={cx('filter_box_title')}
                                        >
                                            Lọc
                                        </option>
                                        <option value="Phong_1">Phòng 1</option>
                                        <option value="Phong_2">Phòng 2</option>
                                        <option value="Phong_3">Phòng 3</option>
                                        <option value="Phong_4">Phòng 4</option>
                                    </select>
                                </div>
                                <div className={cx('account_box')}>
                                    <Button className={cx('account_button')} to="/admin/create-user">
                                        Tạo Tài Khoản
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('menu_table')}>
                                <table className={cx('table_box')}>
                                    <thead>
                                        <tr>
                                            <th>Số TT</th>
                                            <th>Tên</th>
                                            <th>Mail</th>
                                            <th>Ngày Cấp</th>
                                            <th>Trạng Thái</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>4</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>5</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>6</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>8</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>9</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>10</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('content-right')}>
                    <div className={cx('right-box')}>
                        <div className={cx('infor_Block')}>
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
                                <li className={cx('infor-item')}>
                                    <span className={cx('infor-item-icon')}>
                                        <FontAwesomeIcon icon={faHouse} />
                                    </span>
                                    <span className={cx('infor-item-status')}>Đã chuyển đi</span>
                                </li>
                            </ul>
                            <Link outline="true" className={cx('logout-btn')}>
                                gỡ tài khoản
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountManagement;
