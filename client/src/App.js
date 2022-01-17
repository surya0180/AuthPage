import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { user } from './components/auth-actions';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    user().then((response) => {
      if (response.status === 'success') {
        setLoading(false)
        localStorage.setItem('isAuthenticated', true)
      }
      if (response.status === 'failure') {
        setLoading(false)
        localStorage.setItem('isAuthenticated', false)
      }
    })
  }, [])

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />}>
            <Route path="login" element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
