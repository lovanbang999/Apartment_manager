import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import style from './Home.module.scss';
import images from '../../../assets/img';
import Header from '../../../components/Header';

const cx = classNames.bind(style);

function Home() {
    const actionsHeader = [
        {
            children: 'Thông báo',
            style: { color: 'var(--primary-color)' },
            to: '/user',
            disabled: true,
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
                <div className={cx('notification')}>
                    <div className={cx('notification-inner')}>
                        <div className={cx('notifiaction-header')}>
                            <h2 className={cx('notifiaction-header-title')}>Thông báo sự cố</h2>
                            <Link className={cx('notifiaction-add-infor')} to="/user/report">
                                <span>Thêm sự cố</span>
                                <AddIcon />
                            </Link>
                        </div>
                        <div className={cx('notification-body')}>
                            <div className={cx('notification-message')}>
                                <div className={cx('author')}>
                                    <div className={cx('author-avatar')}>
                                        <img src={images.Auth.background} alt="Avatar" />
                                    </div>
                                    <div className={cx('author-content')}>
                                        <div className={cx('author-name')}>Vi Minh</div>
                                        <div className={cx('author-role')}>Thành viên</div>
                                    </div>
                                </div>
                                <div className={cx('notification-message-content')}>
                                    <div className={cx('notification-content')}>
                                        iettel TB: Phan anh cua Quy khach ve thue bao h004_gftth_thuannm49 da duoc
                                        Viettel tiep nhan, Nhan vien ky thuat: Nguyen Van Trach, So dien thoai:
                                        0979994192 se lien he ho tro va xu ly trong thoi gian som nhat. Tran trong!
                                        <span className={cx('notification-content-icon')}>
                                            <ThumbUpIcon />
                                        </span>
                                    </div>
                                    <div className={cx('notification-ceatedAt')}>
                                        <span>Đã đăng</span>
                                        <span>15:35-30/11/2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('notification-message')}>
                                <div className={cx('author')}>
                                    <div className={cx('author-avatar')}>
                                        <img src={images.Auth.background} alt="Avatar" />
                                    </div>
                                    <div className={cx('author-content')}>
                                        <div className={cx('author-name')}>Trung Kiên</div>
                                        <div className={cx('author-role')}>Thành viên</div>
                                    </div>
                                </div>
                                <div className={cx('notification-message-content')}>
                                    <div className={cx('notification-content')}>
                                        Viettel TB: Phan anh cua Quy khach ve thue bao h004_gftth_thuannm49 da duoc
                                        Viettel tiep nhan, Nhan vien ky thuat: Nguyen Van Trach, So dien thoai:
                                        0979994192 se lien he ho tro va xu ly trong thoi gian som nhat. Tran trong!
                                        <span className={cx('notification-content-icon')}>
                                            <ThumbUpIcon />
                                        </span>
                                    </div>
                                    <div className={cx('notification-ceatedAt')}>
                                        <span>Đã đăng</span>
                                        <span>15:35-30/11/2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('notification-message')}>
                                <div className={cx('author')}>
                                    <div className={cx('author-avatar')}>
                                        <img src={images.Auth.background} alt="Avatar" />
                                    </div>
                                    <div className={cx('author-content')}>
                                        <div className={cx('author-name')}>Bằng Lò</div>
                                        <div className={cx('author-role')}>Quản trị viên</div>
                                    </div>
                                </div>
                                <div className={cx('notification-message-content')}>
                                    <div className={cx('notification-content')}>
                                        tất cả mọi người cảnh giác với những trường hợp người lạ đi theo vào nhà hoặc là
                                        những trường hợp lợi dụng người đi ra vào để đóng cửa hộ, tìm cách sơ hở để ăn
                                        cắp đồ
                                        <span className={cx('notification-content-icon')}>
                                            <ThumbUpIcon />
                                        </span>
                                    </div>
                                    <div className={cx('notification-ceatedAt')}>
                                        <span>Đã đăng</span>
                                        <span>15:30-30/11/2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('notification')}>
                    <div className={cx('notification-inner')}>
                        <div className={cx('notifiaction-header')}>
                            <h2 className={cx('notifiaction-header-title')}>Thông báo</h2>
                        </div>
                        <div className={cx('notification-body')}>
                            <div className={cx('notification-message')}>
                                <div className={cx('author')}>
                                    <div className={cx('author-avatar')}>
                                        <img src={images.Auth.background} alt="Avatar" />
                                    </div>
                                    <div className={cx('author-content')}>
                                        <div className={cx('author-name')}>Bằng Lò</div>
                                        <div className={cx('author-role')}>Quản trị viên</div>
                                    </div>
                                </div>
                                <div className={cx('notification-message-content')}>
                                    <div className={cx('notification-content')}>
                                        tất cả mọi người cảnh giác với những trường hợp người lạ đi theo vào nhà hoặc là
                                        những trường hợp lợi dụng người đi ra vào để đóng cửa hộ, tìm cách sơ hở để ăn
                                        cắp đồ
                                        <span className={cx('notification-content-icon')}>
                                            <ThumbUpIcon />
                                        </span>
                                    </div>
                                    <div className={cx('notification-ceatedAt')}>
                                        <span>Đã đăng</span>
                                        <span>15:30-30/11/2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
