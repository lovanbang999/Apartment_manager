import classname from 'classnames/bind';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import style from './LoginForm.module.scss';
import { AuthContext } from '../../../contexts/AuthContext';
import AlertMessage from '../../Layout/AlertMessage';

const cx = classname.bind(style);

function Login() {
    // Context
    const { loginUser } = useContext(AuthContext);

    // Local state
    const [loginForm, setLoginForm] = useState({ username: '', email: '', password: '' });

    const [alert, setAlert] = useState(null);

    const { username, email, password } = loginForm;

    const onChangeLoginForm = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        });
    };

    const login = async (e) => {
        e.preventDefault();

        try {
            const loginData = await loginUser(loginForm);

            if (!loginData.success) {
                setAlert({
                    type: 'danger',
                    message: loginData.message,
                });
                setTimeout(() => {
                    setAlert(null);
                }, 3000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Form className={cx('form')} onSubmit={login}>
                <h3 className={cx('heading')}>Đăng nhập</h3>
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
                        onChange={onChangeLoginForm}
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
                        onChange={onChangeLoginForm}
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
                        onChange={onChangeLoginForm}
                        required
                    ></Form.Control>
                </Form.Group>
                <Button className={cx('submit-btn')} variant="success" type="submit">
                    Đăng nhập
                </Button>
            </Form>
        </div>
    );
}

export default Login;
