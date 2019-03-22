const express = require('express');

const router = express.Router();

const Db = require('../data/helpers/actionModel')

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const actions = await Db.get()
        res.status(200).json(actions)
    }
    catch {
        res.status(500).json({ "error": "error in retrieving actions"})
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params; 
    try {
        const item = await Db.get(id)
        if (!item) {
            res.status(404).json({ "error" : "Item does not exist" })
        }
        else {
            res.status(200).json(item)
        }
    }
    catch {
        res.status(500).json({ "error" : "error in retrieving that item" })
    }
})

router

module.exports = router;