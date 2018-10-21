var express = require('express')
var {Admin} = require('../models')
var router = express.Router();

router.get('/', (req, res) => {
    Admin.find()
    .then(data => res.status(200).send(data))
})

module.exports = router;