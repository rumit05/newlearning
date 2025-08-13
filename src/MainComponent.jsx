// MainComponent.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './header/Header';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Events from './pages/Events';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';


export default function MainComponent() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
