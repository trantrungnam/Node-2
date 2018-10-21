var express = require('express')
var router = express.Router()
var {Customers} = require('../models/index')

router.get('/', (req, res) => {
    Customers.findAll()
    .then(data => res.status(200).send(data))
})

router.post('/', (req, res) => {    
    Customers.create(req.body)
    .then(data => res.status(200).send(data))
})

router.delete('/:id', (req, res) => {
    Customers.destroy({
        where:{ 
            id: req.params.id
        }
    })
    .then(data => {
        res.status(200).send(data)
    })
})

module.exports = router;