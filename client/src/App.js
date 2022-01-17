import { AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { user } from './components/authActions';
import AuthContext from './components/authContext';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

function App() {
  const location = useLocation();
  const ctx = useContext(AuthContext)
  useEffect(() => {
    user().then((response) => {
      if(response.status === 'success') {
        ctx.setData({ isAuthenticated: true, loading: false, user: response.payload })
      } else {
        ctx.setData({ isAuthenticated: false, loading: false, user: null })
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
