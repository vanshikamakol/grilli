import React, { useState } from 'react';
import './styles.css';

const Reservation = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to your backend
        setMessage(`Reservation for ${name} on ${date} at ${time} for ${guests} guest(s) has been made!`);
        // Reset form fields
        setName('');
        setDate('');
        setTime('');
        setGuests(1);
    };

    return (
        <div className="reservation">
            <h2>Make a Reservation</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                <input
                    type="number"
                    min="1"
                    max="20"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                />
                <button type="submit">Reserve Now</button>
            </form>
            {message && <p className="confirmation-message">{message}</p>}
        </div>
    );
};

export default Reservation;
