import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import classNames from 'classnames/bind';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import FeedIcon from '@mui/icons-material/Feed';

import { AuthContext } from '../../contexts/AuthContext';
import style from './Landing.module.scss';
import Header from '../../components/Header';
import images from '../../assets/img';
import Footer from '../../components/Footer';

const cx = classNames.bind(style);

function Landing() {
    const actionsHeader = [
        {
            children: 'Tính năng',
            rightIcon: <ArrowDropDownIcon />,
            className: 'action-icon',
        },
        {
            children: 'Thông tin',
            rightIcon: <ArrowDropDownIcon />,
            className: 'action-icon',
        },
        {
            children: '0336715316',
            leftIcon: <PhoneIcon />,
            primary: true,
            href: 'tel:0336715316',
            br10: true,
        },
        {
            children: 'Đăng nhập',
            rightIcon: <PersonIcon />,
            primary: true,
            to: '/login',
            br10: true,
        },
    ];

    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    if (authLoading) {
        return (
            <div className={cx('spinner-wrapper')}>
                <Spinner animation="border" variant="info" />
            </div>
        );
    } else if (isAuthenticated) {
        return <Navigate to="/home" />;
    }

    return (
        <div className={cx('wrapper')}>
            <Header actionsBtn={actionsHeader} />
            <div className={cx('container')}>
                <div className={cx('intro-wrapper')}>
                    <div className={cx('intro-inner')}>
                        <div className={cx('content')}>
                            <div className={cx('intro')}>
                                <h2 className={cx('intro-header')}>Giới thiệu</h2>
                                <p className={cx('intro-paragh')}>
                                    <span>
                                        Được ra đời dựa vào nhu cầu thực tế của các cá nhân, tổ chức cho thuê chung cư.
                                        Ứng dụng quản lý thuê chung cư được phát triển giúp cho người quản lý tính toán
                                        chính xác tiền phòng, dịch vụ, tiết kiệm thời gian ghi chép, thống kê.
                                    </span>
                                    <br></br>
                                    <span>
                                        Phần mềm quản lý được chung cư nhiều phòng. Thiết lập linh động đơn giá dịch vụ,
                                        linh động về kỳ thu tiền.
                                    </span>
                                    <br></br>
                                    <span>
                                        Phần mềm được phát triển trên nền tảng web, sử dụng online, có thể truy cập bất
                                        kỳ nơi nào có internet, không phụ thuộc thiết bị, hệ điều hành.
                                    </span>
                                </p>
                            </div>
                            <div className={cx('intro')}>
                                <h2 className={cx('intro-header')}>Homemie</h2>
                                <p className={cx('intro-desc')}>Phần mềm Quản lý Nhà Trọ - TỐT NHẤT HIỆN NAY</p>
                                <p className={cx('intro-paragh')}>
                                    <span>
                                        Giải quyết 90% lo lắng của chủ chung cư trong việc quản lý và vận hành cưchung
                                        cư với chi phí tiết kiệm tối đa. Đội ngũ tư vấn khách hàng luôn sẵn sàng để hỗ
                                        trợ tận tình 24/7, đồng hành cùng việc quản lý chung cư của bạn.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className={cx('image')}>
                            <img src={images.landing.introduction} alt="About apartment" />
                        </div>
                    </div>
                </div>
                <div className={cx('advantage-wrapper')}>
                    <div className={cx('advantage-inner')}>
                        <h2 className={cx('advantage-header')}>Ưu Điểm Của Homemie</h2>
                        <p className={cx('advantage-desc')}>
                            Giao diện đơn giản, thông minh, giúp quản lý nhà trọ mọi lúc mọi nơi với dữ liệu được bảo
                            mật an toàn tuyệt đối, kiểm soát doanh số theo thời gian thực và tiết kiệm tối đa chi phí
                            vận hành.
                        </p>
                        <div className={cx('advan-list')}>
                            <div className={cx('advan-item')}>
                                <div className={cx('advan-item-img')}>
                                    <img src={images.landing.barChart} alt="Advantage" />
                                </div>
                                <h3 className={cx('advan-item-heading')}>Quản lý, mọi lúc mọi nơi</h3>
                                <p className={cx('advan-item-desc')}>
                                    Chủ chung cư có thể quản lý nhà mọi lúc mọi nơi, dữ liệu được quản lý tập trung, bảo
                                    mật, và an toàn tuyệt đối.
                                </p>
                            </div>
                            <div className={cx('advan-item')}>
                                <div className={cx('advan-item-img')}>
                                    <img src={images.landing.analysis} alt="Advantage" />
                                </div>
                                <h3 className={cx('advan-item-heading')}>Đơn giản & Dễ dùng</h3>
                                <p className={cx('advan-item-desc')}>
                                    Giao diện đơn giản, thân thiện, thông minh giúp chủ chung cư triển khai quản lý nhà
                                    trọ thật dễ dàng và nhanh chóng.
                                </p>
                            </div>
                            <div className={cx('advan-item')}>
                                <div className={cx('advan-item-img')}>
                                    <img src={images.landing.business} alt="Advantage" />
                                </div>
                                <h3 className={cx('advan-item-heading')}>Phù hợp nhiều mô hình</h3>
                                <p className={cx('advan-item-desc')}>
                                    Chúng tôi nghiên cứu thiết kế phần mềm phù hợp với nhiều mô hình nhà trọ, chung cư
                                    mini, căn hộ dịch vụ.
                                </p>
                            </div>
                            <div className={cx('advan-item')}>
                                <div className={cx('advan-item-img')}>
                                    <img src={images.landing.piggyBank} alt="Advantage" />
                                </div>
                                <h3 className={cx('advan-item-heading')}>Tiết kiệm chi phí tối đa</h3>
                                <p className={cx('advan-item-desc')}>
                                    Chỉ với 12.000 đồng/phòng, chủ chung cư đã có thể áp dụng công nghệ tiên tiến vào
                                    quản lý chung cư của mình.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('feature-admin-wrapper')}>
                    <div className={cx('feature-admin-inner')}>
                        <div className={cx('feature-admin-header')}>
                            Homemie sẵn sàng phục phụ bạn với những tính năng tuyệt vời
                        </div>
                        <div className={cx('feature-admin-desc')}>
                            Những tính năng hiện tại được homimehomime cung cấp đã đáp ứng hầu hết các nghiệp vụ quản lý
                            mà một chủ nhà mong muốn. Chúng tôi luôn lắng nghe ý kiến của bạn để có thể nâng cấp và bổ
                            sung thêm tính năng mới.
                        </div>
                        <div className={cx('feature-admin-list')}>
                            <div className={cx('feature-admin-item')}>
                                <div className={cx('feature-admin-item-inner')}>
                                    <div className={cx('feature-admin-item-img')}>
                                        <img src={images.landing.chatAdminFeature} alt="images" />
                                    </div>
                                    <div className={cx('feature-admin-item-title')}>Quản lí thông tin khách thuê</div>
                                    <div className={cx('feature-admin-item-decs')}>
                                        Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân, thông tin
                                        liên hệ.
                                    </div>
                                </div>
                                <div className={cx('feature-admin-item-inner')}>
                                    <div className={cx('feature-admin-item-img')}>
                                        <img src={images.landing.computerAdminFeature} alt="images" />
                                    </div>
                                    <div className={cx('feature-admin-item-title')}>Quản lí tài khoản</div>
                                    <div className={cx('feature-admin-item-decs')}>
                                        Chức năng quản lý quyền cấp tài khoản cho khách hàng mới và xóa tài khoản khách
                                        đã hết hạn hợp đồng
                                    </div>
                                </div>
                            </div>
                            <div className={cx('feature-admin-item')}>
                                <div className={cx('feature-admin-item-inner')}>
                                    <div className={cx('feature-admin-item-img')}>
                                        <img src={images.landing.business} alt="images" />
                                    </div>
                                    <div className={cx('feature-admin-item-title')}>Quản lý thống kê</div>
                                    <div className={cx('feature-admin-item-decs')}>
                                        Chức năng quản lý thống kê các khoản chi phí dv của từng căn hộ rồi tổng và hợp
                                        báo cáo chi chi phí tới từng căn hộ
                                    </div>
                                </div>
                                <div className={cx('feature-admin-item-inner')}>
                                    <div className={cx('feature-admin-item-img')}>
                                        <img src={images.landing.bellAdminFeature} alt="images" />
                                    </div>
                                    <div className={cx('feature-admin-item-title')}>quản lí thông tin khách thuê</div>
                                    <div className={cx('feature-admin-item-decs')}>
                                        Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân, thông tin
                                        liên hệ.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('feature-user-wrapper')}>
                    <div className={cx('feature-user-inner')}>
                        <div className={cx('feature-user-img')}>
                            <img src={images.landing.feature} alt="Feature" />
                        </div>
                        <div className={cx('feature-user-content')}>
                            <div className={cx('feature-user-item')}>
                                <div className={cx('feature-user-icon')} style={{ color: 'var(--color-1)' }}>
                                    <FeedIcon />
                                </div>
                                <div className={cx('feature-user-title')}>
                                    Thanh toán tiện lợi nhanh chóng
                                    <span
                                        className={cx('feature-user-underline')}
                                        style={{ borderColor: 'var(--color-1)' }}
                                    ></span>
                                </div>
                            </div>
                            <div className={cx('feature-user-item')}>
                                <div className={cx('feature-user-icon')} style={{ color: 'var(--color-2)' }}>
                                    <FeedIcon />
                                </div>
                                <div className={cx('feature-user-title')}>
                                    Theo dõi lịch sử thanh toán
                                    <span
                                        className={cx('feature-user-underline')}
                                        style={{ borderColor: 'var(--color-2)' }}
                                    ></span>
                                </div>
                            </div>
                            <div className={cx('feature-user-item')}>
                                <div className={cx('feature-user-icon')} style={{ color: 'var(--color-3)' }}>
                                    <FeedIcon />
                                </div>
                                <div className={cx('feature-user-title')}>
                                    Kiểm tra thông tin căn hộ
                                    <span
                                        className={cx('feature-user-underline')}
                                        style={{ borderColor: 'var(--color-3)' }}
                                    ></span>
                                </div>
                            </div>
                            <div className={cx('feature-user-item')}>
                                <div className={cx('feature-user-icon')} style={{ color: 'var(--color-4)' }}>
                                    <FeedIcon />
                                </div>
                                <div className={cx('feature-user-title')}>
                                    Báo cáo sự cố hỏng hóc
                                    <span
                                        className={cx('feature-user-underline')}
                                        style={{ borderColor: 'var(--color-4)' }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Landing;
