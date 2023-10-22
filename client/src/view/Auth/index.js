import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import classNames from 'classnames/bind';

import LoginForm from '../../components/Auth/LoginForm';
import { AuthContext } from '../../contexts/AuthContext';
import style from './Auth.module.scss';
import { LOCAL_STORAGE_TOKEN_ROLE } from '../../contexts/constants';

const cx = classNames.bind(style);

function Auth() {
    let body;

    const roles = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_ROLE));

    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    if (authLoading) {
        body = (
            <div className={cx('spinner-wrapper')}>
                <Spinner animation="border" variant="info" />
            </div>
        );
    } else if (isAuthenticated && roles.Admin && roles.Admin === 2004) {
        return <Navigate to="/admin" />;
    } else if (isAuthenticated && roles.User && roles.User === 2000) {
        return <Navigate to="/user" />;
    } else {
        body = <>{<LoginForm />}</>;
    }
    console.log(roles);

    return <div className="Langing">{body}</div>;
}

export default Auth;
