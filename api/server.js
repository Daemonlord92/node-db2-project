const express = require('express');
const carsRouter = require('./cars/carsRouter');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({mes: "HI, from the backend"});
});

server.use('/apiV1/cars', carsRouter);



module.exports = server;