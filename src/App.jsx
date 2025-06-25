import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import './App.css';
import SubscriptionPlans from './SubscriptionPlans';
import SuccessSection from './SuccessSection';
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/subscription" element={<SubscriptionPlans />} />
        <Route path="/success" element={<SuccessSection />} />
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
