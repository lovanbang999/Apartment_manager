import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Landing from './view/Landing';
import Auth from './view/Auth';
import AuthContextProvider from './contexts/AuthContext';
import Home from './view/Home';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Admin from './view/Admin';

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                    <Route exact path="/" Component={Landing} />
                    <Route exact path="/login" element={<Auth authRoute="login" />} />
                    <Route exact path="/register" element={<Auth authRoute="register" />} />
                    <Route exact path="/home" element={<ProtectedRoute component={Home} />} />
                    <Route exact path="/admin" element={<ProtectedRoute component={Admin} />} />
                </Routes>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
