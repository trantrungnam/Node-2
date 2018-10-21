var express = require('express')
var router = express.Router()
var { Orders } = require('../models/index')

router.get('/', (req, res) => {
    Orders.find()
    .then(data => {
        res.status(200).send(JSON.stringify(data, null, 2 ))
    })
})

router.post('/', (req, res) => {
    Orders.create(req.body)
    .then(data => res.send(data))
})

router.delete('/:id', (req, res) => {
    Orders.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => res.status(200).send(data))
})

router.get('/:id/orderItem', (req, res) => {
    Orders.find({where: {id: req.params.id}})
    .then(category => category.getProducts()
    .then(result => res.send(result))
    )
})

router.put('/', (req, res) => {
    Orders.update(req.body, {
        where: {
        }
    }).then(data => res.status(200).send(data))
})

module.exports = router;