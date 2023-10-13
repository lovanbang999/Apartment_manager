import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFileContract, faHouse } from '@fortawesome/free-solid-svg-icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import style from './Admin.module.scss';
import Header from '../../components/Header';

const cx = classNames.bind(style);

function Admin() {
    const actionsHeader = [
        {
            children: 'Thống kê',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
        },
        {
            children: 'Khách thuê',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
        },
        {
            children: 'Thông báo',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
        },
        {
            children: 'Tài khoản',
            rightIcon: <AccountCircleIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/login',
            icon16: true,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <Header actionsBtn={actionsHeader} />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {/* Bang o ben trai */}
                    <div className={cx('content_left')}>
                        {/* O theo doi khach thue */}
                        <div className={cx('box_1')}>
                            <h3 className={cx('box_title')}>
                                <span className={cx('box_title_text')}>THEO DÕI KHÁCH THUÊ</span>
                                <FontAwesomeIcon className={cx('box_icon')} icon={faUser} />
                            </h3>

                            <table className={cx('box_table_left')}>
                                <thead className={cx('box_thead')}>
                                    <tr>
                                        <th className={cx('box_text_1')}>Nội Dung</th>
                                        <th className={cx('box_data')}>Số Khách</th>
                                    </tr>
                                </thead>

                                <tbody className={cx('box_tbody')}>
                                    <tr>
                                        <td className={cx('box_text_1')}>Tổng Số Khách Đăng Nhập Trên Hệ Thống </td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('box_text_1')}>
                                            Số Khách Thuê Chưa Khai Báo Tạm Trú Tạm Vắng
                                        </td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('box_text_1')}>
                                            Yêu Cầu Gia Hạn Tạm Trú Tạm Vắng Trong 30 ngày
                                        </td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* O theo doi hop dong */}
                        <div className={cx('box_2')}>
                            <h3 className={cx('box_title')}>
                                <span className={cx('box_title_text')}>THEO DÕI HỢP ĐỒNG</span>
                                <FontAwesomeIcon className={cx('box_icon')} icon={faFileContract} />
                            </h3>
                            <table className={cx('box_table_left')}>
                                <thead className={cx('box_thead')}>
                                    <tr>
                                        <th className={cx('box_text_2')}>Nội Dung</th>
                                        <th className={cx('box_data')}>Số Khách</th>
                                    </tr>
                                </thead>

                                <tbody className={cx('box_tbody')}>
                                    <tr>
                                        <td className={cx('box_text_2')}>Số Hợp Đồng Hết Hạn Trong Vòng 30 Ngày</td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('box_text_2')}>Số Hợp Đồng Hết Hạn Trong Vòng 60 Ngày</td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('box_text_2')}>Số Hợp Đồng Hết Hạn Trong Vòng 90 Ngày</td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bang o o ben phai */}
                    <div className={cx('content_right')}>
                        {/* O theo doi thanh toan */}
                        <div className={cx('box_3')}>
                            <h3 className={cx('box_title')}>
                                <span className={cx('box_title_text')}>THEO DÕI THANH TOÁN</span>
                                <FontAwesomeIcon className={cx('box_icon')} icon={faUser} />
                            </h3>
                            <select className={cx('box_select')} defaultValue="Chua_chon">
                                <option disabled="disabled" value="Chua_chon" className={cx('box_select_title')}>
                                    -- Chọn Phòng --
                                </option>
                                <option value="Phong_1">Phòng 1</option>
                                <option value="Phong_2">Phòng 2</option>
                                <option value="Phong_3">Phòng 3</option>
                                <option value="Phong_4">Phòng 4</option>
                            </select>

                            <table className={cx('box_table_right')}>
                                <thead className={cx('box_thead')}>
                                    <tr>
                                        <th className={cx('box_text_3')}>Nội Dung</th>
                                        <th className={cx('box_data')}>Số Hóa Đơn</th>
                                        <th className={cx('box_data')}>Số Tiền</th>
                                    </tr>
                                </thead>

                                <tbody className={cx('box_tbody')}>
                                    <tr>
                                        <td className={cx('box_text_3')}>Tổng Số Hóa Đơn Đã Thanh Toán </td>
                                        <td className={cx('box_data')}>0</td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('box_text_3')}>Tổng Số Hóa Đơn Chưa Thanh Toán Hết</td>
                                        <td className={cx('box_data')}>0</td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* O theo doi su co */}
                        <div className={cx('box_4')}>
                            <h3 className={cx('box_title')}>
                                <span className={cx('box_title_text')}>THEO DÕI SỰ CỐ</span>
                                <FontAwesomeIcon className={cx('box_icon')} icon={faHouse} />
                            </h3>
                            <table className={cx('box_table_right')}>
                                <thead className={cx('box_thead')}>
                                    <tr>
                                        <th className={cx('box_text_4')}>Nội Dung</th>
                                        <th className={cx('box_data')}>Số Sự Cố</th>
                                    </tr>
                                </thead>

                                <tbody className={cx('box_tbody')}>
                                    <tr>
                                        <td className={cx('box_text_4')}>Số Sự Cố Mới</td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('box_text_4')}>Số Sự Cố Đã Xử Lý</td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('box_text_4')}>Số Sự Cố Đang Xử Lý</td>
                                        <td className={cx('box_data')}>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
