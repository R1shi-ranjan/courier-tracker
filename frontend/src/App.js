import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import TrackingForm from './components/TrackingForm';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/track" element={<TrackingForm />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
