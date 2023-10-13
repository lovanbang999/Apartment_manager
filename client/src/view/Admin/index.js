import classNames from 'classnames';
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
        </div>
    );
}

export default Admin;
