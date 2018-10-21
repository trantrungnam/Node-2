var express = require('express')
var router = express.Router()
var {Products} = require('../models/index')

router.get('/' , (req, res) => {
    Products.find()
    .then(data => res.status(200).send(data))
})

router.post('/', (req, res) => {
    Products.create(req.body)
    .then(data => res.status(200).send(data))
})

router.delete('/:id', (req, res) => {
    Products.destroy({
        where: {
            id: req.params.id
        }
    })
})

router.put('/:id', (req, res) => {
    Products.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(data => res.status(200).send(data))
})

module.exports = router;