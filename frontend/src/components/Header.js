import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <header>
            <h1>Grilli</h1>
            <nav>

                <a href="/menu">Menu</a>
                <a href="/reservations">Reservations</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </header>
    );
};

export default Header;
