// frontend/src/components/Reservations.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Ensure this path is correct

const Reservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('/api/reservations');
                setReservations(response.data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };
        fetchReservations();
    }, []);

    return (
        <div className="container">
            <h2>Your Reservations</h2>
            {reservations.length > 0 ? (
                <ul>
                    {reservations.map(reservation => (
                        <li key={reservation._id}>
                            {new Date(reservation.date).toLocaleDateString()} at {reservation.time} for {reservation.guests} guests
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reservations found.</p>
            )}
        </div>
    );
};

export default Reservations;
