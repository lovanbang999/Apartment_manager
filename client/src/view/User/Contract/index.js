import classNames from 'classnames/bind';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import style from './Contract.module.scss';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import 'bootstrap/dist/css/bootstrap.css';

const cx = classNames.bind(style);

function Contract() {
    const actionsHeader = [
        {
            children: 'Thông báo',
            style: { color: 'var(--primary-color)' },
            to: '/home',
        },
        {
            children: 'Thống kê',
            style: { color: 'var(--primary-color)' },
            to: '/user/statistical',
        },
        {
            children: 'Hợp đồng',
            style: { color: 'var(--primary-color)' },
            to: '/user/contract',
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
        <div className={cx('TenantList')}>
            <div className={cx('container')}>
                <Header actionsBtn={actionsHeader} />
                <div className={cx('row')}>
                    <div className={cx('ft-1')}>
                        <h3>HỢP ĐỒNG</h3>
                        <Button className={cx('action-icon')}>Xuất File</Button>
                    </div>
                    <table className={cx('table')}>
                        <thead className={cx('tb-head')}>
                            <tr>
                                <th>Phòng</th>
                                <th>Mã HĐ</th>
                                <th>Ngày Ký</th>
                                <th>Thời Hạn</th>
                                <th>Giá Thuê</th>
                                <th>Tiền Cọc</th>
                                <th>Người Ký HĐ</th>
                            </tr>
                        </thead>

                        <tbody className={cx('tb-body')}>
                            <tr>
                                <td className={cx('tb-data')}>101</td>
                                <td>13956</td>
                                <td>03/02/2021</td>
                                <td>03/02/2024</td>
                                <td>9.500.000</td>
                                <td>4.500.000</td>
                                <td>Lò Văn Bằng</td>
                            </tr>
                        </tbody>

                        <tfoot className={cx('tb-foot')}>
                            <tr>
                                <td>
                                    ​
                                    <br />​
                                    <br />​
                                    <br />​
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Contract;
