// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateDr from './pages/CreateDr';
import CreateQualification from './pages/CreateQualification';
import ListOfDr from './pages/ListOfDr';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
 
const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);
 
  const handleLogin = (authToken: string) => {
    setToken(authToken);
    setIsLoggedIn(true);
  };
 
  const handleLogout = () => {
    setToken(null);
    setIsLoggedIn(false);
  };
 
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/welcome"
          element={isLoggedIn ? <WelcomePage token={token} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route path="/list" element={isLoggedIn ? <ListOfDr token={token} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route path="/createDr" element={isLoggedIn ? <CreateDr token={token}/> : <Navigate to="/login" />}
        />
        <Route path="/createQua" element={isLoggedIn ? <CreateQualification token={token}  /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};
 
export default App;