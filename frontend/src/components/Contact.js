import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/contact', { message });
        setMessage('');
        alert('Message sent!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Your message..." 
                required 
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default Contact;
