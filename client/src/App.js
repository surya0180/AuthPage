import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />}>
            <Route path="login" element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
