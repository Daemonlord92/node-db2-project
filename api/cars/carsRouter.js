const express = require('express');
const router = express.Router();
const Car = require('./carsModel');

//GET ROUTES
router.get('/', (req, res) => {
    Car.find()
        .then(car => res.status(200).json({mes: 'Grabbing Data', car}))
        .catch(err => res.status(500).json({ mes: 'Server Error', err}))
})

router.get('/:id', (req, res) => {
    Car.findById(req.params.id)
        .then(car => res.status(200).json({mes: 'Grabbing Data', car}))
        .catch(err => res.status(500).json({mes: "Server error", err}))
})

router.get('/:id', (req, res) => {
    Car.findByMake(req.params.id)
        .then(car => res.status(200).json({mes: 'Grabbing Data', car}))
        .catch(err => res.status(500).json({mes: 'Server Error', err}))
})

//POST ROUTE
router.post('/', (req, res) => {
    Car.insert(req.body)
        .then(car => res.status(201).json({mes: 'Car Listed', car}))
        .catch(err => res.status(500).json({mes: 'Server Error', err}))
})

module.exports = router;