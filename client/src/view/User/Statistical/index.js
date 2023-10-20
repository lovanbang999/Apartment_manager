import classNames from 'classnames/bind';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import Header from '../../../components/Header';
import style from './Statistical.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(style);

function Statistical() {
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
            disabled: true,
        },
        {
            children: 'Hợp đồng',
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

    return (
        <div className={cx('wrapper')}>
            <Header actionsBtn={actionsHeader} />
            <div className={cx('container')}>
                {/* Header */}
                <div className={cx('box_header')}>
                    <div className={cx('header')}>
                        <h1 className={cx('header_text')}>HÓA ĐƠN DỊCH VỤ</h1>

                        <select className={cx('header_select')} defaultValue="Chua_chon">
                            <option disabled="disabled" value="Chua_chon" className={cx('box_select_title')}>
                                Chọn Tháng
                            </option>
                            <option value="Thang_1">Tháng 1</option>
                            <option value="Thang_2">Tháng 2</option>
                            <option value="Thang_3">Tháng 3</option>
                            <option value="Thang_4">Tháng 4</option>
                            <option value="Thang_5">Tháng 5</option>
                            <option value="Thang_6">Tháng 6</option>
                            <option value="Thang_7">Tháng 7</option>
                            <option value="Thang_8">Tháng 8</option>
                            <option value="Thang_9">Tháng 9</option>
                            <option value="Thang_10">Tháng 10</option>
                            <option value="Thang_11">Tháng 11</option>
                            <option value="Thang_12">Tháng 12</option>
                        </select>
                    </div>
                    <div className={cx('title')}>
                        <h2 className={cx('title_text')}>NHÀ SỐ 24 - PHÒNG 101 - THÁNG 11</h2>
                        <h5 className={cx('title_note')}>ĐƠN VỊ: VNĐ</h5>
                    </div>
                </div>

                {/* Body */}
                <div className={cx('box_table')}>
                    <table className={cx('table')}>
                        <thead className={cx('tb-head')}>
                            <tr>
                                <th>STT</th>
                                <th>Mã Hóa Đơn</th>
                                <th>Mục Chi</th>
                                <th>Số Điện</th>
                                <th>Thành Tiền </th>
                                <th>Chỉ số tháng trước</th>
                            </tr>
                        </thead>

                        <tbody className={cx('tb-body')}>
                            <tr>
                                <td>1</td>
                                <td rowSpan={'4'}>22204</td>
                                <td>TIỀN NHÀ</td>
                                <td></td>
                                <td>4.200.000</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>TIỀN ĐIỆN</td>
                                <td>2.570</td>
                                <td>743.000</td>
                                <td>2.400</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>TIỀN NƯỚC</td>
                                <td></td>
                                <td>300.000</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>TIỀN DỊCH VỤ</td>
                                <td></td>
                                <td>480.000</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> ​</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <tfoot className={cx('tb-foot')}>
                            <tr>
                                <td></td>
                                <td>TỔNG</td>
                                <td></td>
                                <td>5.420.000</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* footer */}
                <div className={cx('box_footer')}>
                    <h6 className={cx('footer_text')}>Lưu ý: Nộp chậm nhất vào ngày 05 hàng tháng</h6>
                    {/* <div className={cx('footer_tex2')}>
                        <p>Hà Nội, Ngày ... Tháng ... Năm...</p>
                        <p>Người Thu</p>
                        <p></p>
                    </div> */}
                    <div className={cx('footer_function')}>
                        <Button leftIcon={<FontAwesomeIcon icon={faPrint} />} className={cx('icon1')}>
                            In hóa đơn
                        </Button>
                        <Button leftIcon={<FontAwesomeIcon icon={faTrashCan} />} className={cx('icon2')}>
                            Xóa
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistical;
