var express = require('express')
var router = express.Router()
var { OrderItems } = require('../models/orderItem')

router.get('/', (req, res) => {
    OrderItems.find()
    .then(data => {
        res.status(200).send(JSON.stringify(data, null, 2 ))
    })
})

router.post('/', (req, res) => {
    OrderItems.create(req.body)
    .then(data => res.send(data))
})

router.delete('/:id', (req, res) => {
    OrderItems.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => res.status(200).send(data))
})

router.put('/', (req, res) => {
    OrderItems.update(req.body, {
        where: {
        }
    }).then(data => res.status(200).send(data))
})

module.exports = router;