import classname from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState, useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AlertMessage from '../../Layout/AlertMessage';

import style from './RegisterForm.module.scss';

const cx = classname.bind(style);

function RegisterFrom() {
    // Context
    const { registerUser } = useContext(AuthContext);

    // Local state
    const [registerForm, setRegisterForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });

    const [alert, setAlert] = useState(null);

    const { username, email, password, confirmPassword } = registerForm;

    const onChangeRegisterForm = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value,
        });
    };

    const register = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setAlert({
                type: 'danger',
                message: 'Mật khẩu không khớp',
            });
            setTimeout(() => {
                setAlert(null);
            }, 3000);
            return;
        }

        try {
            const registerData = await registerUser(registerForm);

            if (!registerData.success) {
                setAlert({
                    type: 'danger',
                    message: 'Người dùng đã tồn tại',
                });
                setTimeout(() => {
                    setAlert(null);
                }, 3000);
                setRegisterForm({ username: '', email: '', password: '', confirmPassword: '' });
                return;
            }

            setAlert({
                type: 'success',
                message: 'Tạo tài khoản người dùng thành công',
            });
            setTimeout(() => {
                setAlert(null);
            }, 3000);
            setRegisterForm({ username: '', email: '', password: '', confirmPassword: '' });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Form className={cx('form')} onSubmit={register}>
                <h3 className={cx('heading')}>TẠO TÀI KHOẢN</h3>
                <AlertMessage info={alert} />
                <Form.Group className={cx('form-group')}>
                    <Form.Label className={cx('form-label')} htmlFor="username">
                        Tên đăng nhập
                    </Form.Label>
                    <Form.Control
                        id="username"
                        className={cx('form-control')}
                        type="text"
                        placeholder="VD: Nguyễn Văn A"
                        name="username"
                        value={username}
                        onChange={onChangeRegisterForm}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className={cx('form-group')}>
                    <Form.Label className={cx('form-label')} htmlFor="email">
                        Email
                    </Form.Label>
                    <Form.Control
                        id="email"
                        className={cx('form-control')}
                        type="email"
                        placeholder="VD: nguyenvana1234@gmail.com"
                        name="email"
                        value={email}
                        onChange={onChangeRegisterForm}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className={cx('form-group')}>
                    <Form.Label className={cx('form-label')} htmlFor="password">
                        Mật khẩu
                    </Form.Label>
                    <Form.Control
                        id="password"
                        className={cx('form-control')}
                        type="password"
                        placeholder="Nhập mật khẩu"
                        name="password"
                        value={password}
                        onChange={onChangeRegisterForm}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className={cx('form-group')}>
                    <Form.Label className={cx('form-label')} htmlFor="confirm-password">
                        Nhập lại mật khẩu
                    </Form.Label>
                    <Form.Control
                        id="confirm-password"
                        className={cx('form-control')}
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={onChangeRegisterForm}
                        required
                    ></Form.Control>
                </Form.Group>
                <Button className={cx('submit-btn')} variant="success" type="submit">
                    Tạo tài khoản
                </Button>
            </Form>
        </div>
    );
}

export default RegisterFrom;
