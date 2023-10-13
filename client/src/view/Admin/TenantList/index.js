import classNames from 'classnames/bind';

import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from './TenantList.module.scss';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import 'bootstrap/dist/css/bootstrap.css';

const cx = classNames.bind(style);

function TenantList() {
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
            to: '/tenant-list',
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
            // to: '/login',
            icon16: true,
        },
    ];
    return (
        <>
            <div className={cx('TenantList')}>
                <div className={cx('container')}>
                    <Header actionsBtn={actionsHeader} />
                    <div className={cx('row')}>
                        <div className={cx('ft-1')}>
                            <h3>DANH SÁCH KHÁCH THUÊ</h3>
                            <div>
                                <div className={cx('st-1')}>
                                    <select className={cx('')} defaultValue="Chua_chon">
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
                                        <span className={cx('custom-arrow')}></span>
                                    </select>
                                    <Button className={cx('action-icon')}>Xuất File</Button>
                                </div>
                            </div>
                        </div>
                        <table className={cx('table')}>
                            <thead className={cx('tb-head')}>
                                <tr>
                                    <th>Phòng</th>
                                    <th>Tên</th>
                                    <th>SĐT</th>
                                    <th>SỐ CCCD</th>
                                    <th>Ngày Vào</th>
                                    <th>Quê Quán</th>
                                </tr>
                            </thead>

                            <tbody className={cx('tb-body')}>
                                <tr>
                                    <td rowSpan={'4'} className={cx('tb-data')}>
                                        101
                                    </td>
                                    <td>Thiều Bá Việt</td>
                                    <td>0392395851</td>
                                    <td>010204007586</td>
                                    <td>03/02/2021</td>
                                    <td>Giao An / Lang Chánh / Thanh Hóa</td>
                                </tr>
                                <tr>
                                    <td>Lò Văn Bằng</td>
                                    <td>0392357899</td>
                                    <td>010204010985</td>
                                    <td>03/02/2021</td>
                                    <td>Thuận Châu / Sơn La</td>
                                </tr>
                                <tr>
                                    <td>Nguyễn Thế Vinh</td>
                                    <td>0387856888</td>
                                    <td>010204008912</td>
                                    <td>03/02/2021</td>
                                    <td>Phường Duyên Hải, TP Lào Cai</td>
                                </tr>
                                <tr>
                                    <td>Vi Hồng Minh</td>
                                    <td>0344158383</td>
                                    <td>010204506587</td>
                                    <td>03/02/2021</td>
                                    <td>Lục Ngạn / Bắc Giang</td>
                                </tr>
                                <tr>
                                    <td rowSpan={'2'}>102</td>
                                    <td>Nguyễn Duy Hanh</td>
                                    <td>0356598456</td>
                                    <td>01030456586</td>
                                    <td>05/05/2021</td>
                                    <td>Mê Linh / Đông Hưng / Thái Bình</td>
                                </tr>
                                <tr>
                                    <td>Đào Việt Chung</td>
                                    <td>0876349521</td>
                                    <td>01040079867</td>
                                    <td>05/05/2021</td>
                                    <td>Phường Đằng Lâm / Quận Hải An / TP Hải Phòng</td>
                                </tr>
                            </tbody>

                            <tfoot className={cx('tb-foot')}>
                                <tr>
                                    <td>​</td>
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
        </>
    );
}

export default TenantList;
