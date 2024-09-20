import React from 'react';
import './styles.css';
import Menu from './Menu';
import Reservation from './Reservation'; // Import the Reservation component

const Home = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <h1>Welcome to Grilli</h1>
                <p>Experience the finest North Indian cuisine!</p>
                <button className="cta-button">View Menu</button>
            </div>
            <Menu />
            <Reservation /> {/* Add the Reservation component */}
            <div className="footer">
                <p>Contact us: (123) 456-7890</p>
                <p>Location: 123 Main Street, City, Country</p>
            </div>
        </div>
    );
};

export default Home;
