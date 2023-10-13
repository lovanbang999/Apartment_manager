import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import classNames from 'classnames/bind';

import LoginForm from '../../components/Auth/LoginForm';
import RegisterForm from '../../components/Auth/RegisterForm';
import { AuthContext } from '../../contexts/AuthContext';
import style from './Auth.module.scss';

const cx = classNames.bind(style);

function Auth({ authRoute }) {
    let body;
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    if (authLoading) {
        body = (
            <div className={cx('spinner-wrapper')}>
                <Spinner animation="border" variant="info" />
            </div>
        );
    } else if (isAuthenticated) {
        return <Navigate to="/home" />;
    } else {
        body = (
            <>
                {authRoute === 'login' && <LoginForm />}
                {authRoute === 'register' && <RegisterForm />}
            </>
        );
    }

    return <div className="Langing">{body}</div>;
}

export default Auth;
