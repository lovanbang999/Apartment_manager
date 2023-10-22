import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import classNames from 'classnames/bind';

import { AuthContext } from '../../contexts/AuthContext';
import style from './Protected.module.scss';
import { LOCAL_STORAGE_TOKEN_ROLE } from '../../contexts/constants';

const cx = classNames.bind(style);

function ProtectedRoute({ component: Component, allowedRoles, ...routeProps }) {
    const roles = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_ROLE));
    const codeRoles = roles && Object.values(roles);

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
        const isValid = !!codeRoles.find((code) => allowedRoles?.includes(code));

        return isValid ? <Component {...routeProps} /> : <Navigate to="/user" />;
    }

    return <Navigate to="/login" />;
}

export default ProtectedRoute;
