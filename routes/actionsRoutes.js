const express = require('express');

const router = express.Router();

// router.use(express.json());

router.get('/', (req, res) => {
    res.status(200).json({message: "GET request to '/actions' working!"})
})

module.exports = router;