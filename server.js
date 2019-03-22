const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({message: "GET request to '/' working!"})
})

module.exports = server;