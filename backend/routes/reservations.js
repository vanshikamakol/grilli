// backend/routes/reservations.js

const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// GET all reservations (optional, for admin use)
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new reservation
router.post('/', async (req, res) => {
    const reservation = new Reservation({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time,
        guests: req.body.guests,
        specialRequests: req.body.specialRequests,
    });

    try {
        const newReservation = await reservation.save();
        res.status(201).json(newReservation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
