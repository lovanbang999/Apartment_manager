import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

import { AuthContext } from '../../contexts/AuthContext';

function ProtectedRoute({ component: Component, ...routeProps }) {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    if (authLoading) {
        return (
            <div>
                <Spinner animation="border" variant="info" />
            </div>
        );
    }
    return <>{isAuthenticated ? <Component {...routeProps} /> : <Navigate to="/login" />}</>;
}

export default ProtectedRoute;
