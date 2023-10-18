import classNames from 'classnames/bind';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import style from './Report.module.scss';
import Header from '../../../components/Header';

const cx = classNames.bind(style);

function Report() {
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
                <form className={cx('container-inner')} method="POST" action="">
                    <div className={cx('select-home')}>
                        <label className={cx('title-label')}>Chọn nhà</label>
                        <select className={cx('home-select')} defaultValue="">
                            <option value="">-- Chọn Nhà --</option>
                            <option value="101">101</option>
                            <option value="102">102</option>
                            <option value="103">103</option>
                        </select>
                    </div>
                    <div className={cx('report-title')}>
                        <label className={cx('title-label')} for="report-title">
                            Tiêu đề
                        </label>
                        <input id="report-title" />
                    </div>
                    <div className={cx('report-content')}>
                        <label className={cx('title-label')} for="report-title">
                            Nội dung
                        </label>
                        <textarea id="report-title" />
                    </div>
                    <div className={cx('report-file')}>
                        <label className={cx('title-label')}>Tệp đính kèm</label>
                        <input type="file" />
                    </div>
                    <button className={cx('submit-btn')}>Báo cáo sự cố</button>
                </form>
            </div>
        </div>
    );
}

export default Report;
