import style from './Footer.modules.scss';
import React from 'react'
import classNames from 'classnames/bind';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1,faPhone, faEnvelopeOpen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';


import images from '../../assets/img';


const cx = classNames.bind(style);

function Footer() {
    return (
        <>
            <div className={cx('Footer')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-md-6 col-lg-5 col-12 ft-1')}>
                            <h3>
                                <a className={cx('footer-logo')} href='/'>
                                    <img src={images.logo} alt="Logo" />
                                </a>
                            </h3>
                            <p>Website quản lý chung cư  <FontAwesomeIcon icon={fa1} /> hiện nay </p>
                            <div className={cx('footer-icon')}>
                                <a href='/'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href='/'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href='/'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href='/'>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>


                        <div className={cx("col-md-6 col-lg-3 col-12 ft-2")}>
                            <h3>Liên Kết</h3>
                            <ul>
                                <li className={cx("nav-item")}>
                                    <a className="" href='/'>Trang Chủ </a>
                                </li>
                                <li className={cx("nav-item")}>
                                    <a className="" href='/'>Tin Tức</a>
                                </li>
                                <li className={cx("nav-item")}>
                                    <a className="" href='/'>Thông báo</a>
                                </li>
                                <li className={cx("nav-item")}>
                                    <a className="" href='/'>Dịch Vụ</a>
                                </li>
                                <li className={cx("nav-item")}>
                                    <a className="" href='/'>Hỗ Trợ</a>
                                </li>
                            </ul>
                        </div>

                        <div className={cx('col-md-6 col-lg-4 col-12 ft-3')}>
                            <h3>Liên Hệ</h3>
                            <div className={cx("footer-contact")}>
                                <FontAwesomeIcon icon={faPhone} />
                                <a href="tel:+84336715316">0336715316</a>
                            </div>
                            <div className={cx("footer-contact")}>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                                <a href="mailto:test@gmail.com">lovanbangbox9@gmail.com</a>
                            </div>
                            <div className={cx("footer-contact")}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <a href="https://www.google.com/maps/place/24+Ng.+165+P.+Kh%C6%B0%C6%A1ng+Th%C6%B0%E1%BB%A3ng,+Kh%C6%B0%C6%A1ng+Th%C6%B0%E1%BB%A3ng,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0031731,105.8223823,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac86c0db27d3:0xfe0aba3b43c49997!8m2!3d21.0031731!4d105.8249572?hl=vi-VN&entry=ttu" target='_blank' rel="noreferrer">
                                    Số 24, 165 Khương Thượng, Đống Đa, Hà Nội</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('footer-bottom')}>
                <div className={cx('nav-item-inner')}>
                    Copyright @ 2016
                    <a href='/' className='bottom-nav-item ft-4'> HOMIE - Phần Mềm Quản Lý Chung Cư</a>
                    . Phát Triển Bởi
                    <a href='/' className='bottom-nav-item ft-4'> HOMIE</a>
                </div>

            </div>
        </>
    )
}

export default Footer;