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
import Account from './view/Account';
import AccountAdmin from './view/Admin/AccountAdmin';
import StatisticalUser from './view/User/Statistical';
import StatisticalAdmin from './view/Admin/Statistical';
import Contract from './view/User/Contract';

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                    <Route exact path="/" Component={Landing} />
                    <Route exact path="/login" element={<Auth authRoute="login" />} />
                    <Route exact path="/register" element={<Auth authRoute="register" />} />
                    <Route exact path="/admin" element={<ProtectedRoute component={Admin} />} />
                    <Route exact path="/home" element={<ProtectedRoute component={Home} />} />
                    <Route exact path="/account" element={<ProtectedRoute component={Account} />} />
                    <Route exact path="/admin/account" element={<ProtectedRoute component={AccountAdmin} />} />
                    <Route exact path="/admin/tenant-list" element={<ProtectedRoute component={TenantList} />} />
                    <Route exact path="/admin/contract-list" element={<ProtectedRoute component={ContractList} />} />
                    <Route exact path="/admin/statistical" element={<ProtectedRoute component={StatisticalAdmin} />} />
                    <Route exact path="/user/statistical" element={<ProtectedRoute component={StatisticalUser} />} />
                    <Route exact path="/user/contract" element={<ProtectedRoute component={Contract} />} />
                    <Route exact path="/report" element={<ProtectedRoute component={Report} />} />
                </Routes>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
