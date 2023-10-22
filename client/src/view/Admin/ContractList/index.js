import classNames from 'classnames/bind';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import style from './ContractList.module.scss';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import 'bootstrap/dist/css/bootstrap.css';

const cx = classNames.bind(style);

function ContractList() {
    const actionsHeader = [
        {
            children: 'Thống kê',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/admin',
        },
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
            disabled: true,
        },
        {
            children: 'Thông báo',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            disabled: true,
        },
        {
            children: 'Quản lý tài khoản',
            rightIcon: <ArrowDropDownIcon />,
            style: { color: 'var(--primary-color)' },
            to: '/admin/account-management',
            icon16: true,
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
        <div className={cx('TenantList')}>
            <div className={cx('container')}>
                <Header actionsBtn={actionsHeader} />
                <div className={cx('row')}>
                    <div className={cx('ft-1')}>
                        <h3>DANH SÁCH HỢP ĐỒNG</h3>
                        <div>
                            <div className={cx('st-1')}>
                                <select defaultValue="Chua_chon">
                                    <option disabled="disabled" value="Chua_chon" className={cx('select-title')}>
                                        Chọn Nhà
                                    </option>
                                    <option className={cx('option-select')} value="Nha_1">
                                        Nhà 1
                                    </option>
                                    <option className={cx('option-select')} value="Nha_2">
                                        Nhà 2
                                    </option>
                                    <option className={cx('option-select')} value="Nha_3">
                                        Nhà 3
                                    </option>
                                    <option className={cx('option-select')} value="Nha_4">
                                        ...
                                    </option>
                                </select>
                                <Button className={cx('action-icon')}>Xuất File</Button>
                            </div>
                        </div>
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
                            <tr>
                                <td>102</td>
                                <td>13957</td>
                                <td>05/05/2021</td>
                                <td>05/05/2025</td>
                                <td>10.000.000</td>
                                <td>5.000.000</td>
                                <td>Nguyễn Duy Hanh</td>
                            </tr>
                        </tbody>

                        <tfoot className={cx('tb-foot')}>
                            <tr>
                                <td>103</td>
                                <td>13958</td>
                                <td>07/08/2023</td>
                                <td>07/08/2026</td>
                                <td>12.000.000</td>
                                <td>6.000.000</td>
                                <td>Đào Ngọc Ánh</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ContractList;
