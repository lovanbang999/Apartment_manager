import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Landing from './view/Landing';
import Auth from './view/Auth';
import AuthContextProvider from './contexts/AuthContext';
import Home from './view/User/Home';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Admin from './view/Admin';
import TenantList from './view/Admin/TenantList';
import ContractList from './view/Admin/ContractList';
import Report from './view/User/Report';
import AccountAdmin from './view/Admin/AccountAdmin';
import StatisticalUser from './view/User/Statistical';
import Contract from './view/User/Contract';
import AccountManagement from './view/Admin/AccountManagement';
import AccountUser from './view/User/AccountUser';
import Register from './components/Auth/RegisterForm';

function App() {
    const ROLES = {
        Admin: 2004,
        User: 2000,
    };

    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                    {/* Public router */}
                    <Route exact path="/" Component={Landing} />
                    <Route exact path="/login" element={<Auth />} />

                    {/* User router */}
                    <Route
                        exact
                        path="/user"
                        element={<ProtectedRoute component={Home} allowedRoles={[ROLES.User]} />}
                    />
                    <Route
                        exact
                        path="/user/statistical"
                        element={<ProtectedRoute component={StatisticalUser} allowedRoles={[ROLES.User]} />}
                    />
                    <Route
                        exact
                        path="/user/report"
                        element={<ProtectedRoute component={Report} allowedRoles={[ROLES.User]} />}
                    />
                    <Route
                        exact
                        path="/user/statistical"
                        element={<ProtectedRoute component={StatisticalUser} allowedRoles={[ROLES.User]} />}
                    />
                    <Route
                        exact
                        path="/user/contract"
                        element={<ProtectedRoute component={Contract} allowedRoles={[ROLES.User]} />}
                    />
                    <Route
                        exact
                        path="/account"
                        element={<ProtectedRoute component={AccountUser} allowedRoles={[ROLES.User]} />}
                    />
                    <Route
                        exact
                        path="tenantlist"
                        element={<ProtectedRoute component={TenantList} allowedRoles={[ROLES.User]} />}
                    />

                    {/* Admin router */}
                    <Route path="/admin" element={<ProtectedRoute component={Admin} allowedRoles={[ROLES.Admin]} />} />
                    <Route
                        path="/admin/account-management"
                        element={<ProtectedRoute component={AccountManagement} allowedRoles={[ROLES.Admin]} />}
                    />
                    <Route
                        path="/admin/create-user"
                        element={<ProtectedRoute component={Register} allowedRoles={[ROLES.Admin]} />}
                    />
                    <Route
                        path="/admin/account"
                        element={<ProtectedRoute component={AccountAdmin} allowedRoles={[ROLES.Admin]} />}
                    />
                    <Route
                        path="/admin/tenant-list"
                        element={<ProtectedRoute component={TenantList} allowedRoles={[ROLES.Admin]} />}
                    />
                    <Route
                        path="/admin/contract-list"
                        element={<ProtectedRoute component={ContractList} allowedRoles={[ROLES.Admin]} />}
                    />
                </Routes>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
