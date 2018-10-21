var express = require('express')
var router = express.Router()
var {Categories} = require('../models/index')

router.get('/', (req, res) => {
    Categories.find()
    .then(data => res.status(200).send(data));
})

router.post('/', (req, res) => {
    Categories.create(req.body)
    .then(data => res.send(data))
})

router.delete('/:id', (req, res) => {
    Categories.destroy({
        where: {
            id: req.params.id
        }
    }).addProduct(req.body)
    .then(data => res.status(200).send(data))
})

router.get('/:id/product', (req, res) => {
    Categories.find({where: {id: req.params.id}})
    .then(category => category.getProducts()
    .then(result => res.send(result))
    )
})

router.post('/:id/product', (req, res) => {
    Categories.find({where: {id: req.params.id}})
    .then(category => category.createProduct(req.body)
    .then(result => res.status(201).send(result))
    )
})

router.put('/', (req, res) => {
    Categories.update(req.body, {
        where: {
        }
    }).then(data => res.status(200).send(data))
})

module.exports = router;