// src/App.js

import React from 'react';
import './App.css'; // Global CSS
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importing Components
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Reservations from './components/Reservations';
import Reservation from './components/Reservation';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} /> {/* Landing Page Route */}
                    <Route path="/home" element={<Home />} /> {/* Home after Landing */}
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/reservation" component={Reservation} />
                    {/* Redirect any unknown routes to Landing Page or Home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
