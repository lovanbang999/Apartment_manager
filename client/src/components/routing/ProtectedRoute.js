import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import classNames from 'classnames/bind';

import { AuthContext } from '../../contexts/AuthContext';
import style from './Protected.module.scss';

const cx = classNames.bind(style);

function ProtectedRoute({ component: Component, ...routeProps }) {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    if (authLoading) {
        return (
            <div className={cx('spinner-wrapper')}>
                <Spinner animation="border" variant="info" />
            </div>
        );
    }
    return <>{isAuthenticated ? <Component {...routeProps} /> : <Navigate to="/login" />}</>;
}

export default ProtectedRoute;
