import { useContext } from 'react';
import classNames from 'classnames/bind';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';

import style from './Home.module.scss';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/AuthContext';

const cx = classNames.bind(style);

function Home() {
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
            disabled: true,
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
            children: 'Đăng xuất',
            rightIcon: <LogoutIcon />,
            style: { color: 'var(--primary-color)' },
            onclick: logoutUser,
            icon16: true,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <Header actionsBtn={actionsHeader} />
            <div className={cx('container')}>Chào mừng bạn đến với HOMEMIE</div>
        </div>
    );
}

export default Home;
