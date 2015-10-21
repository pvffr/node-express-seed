'use strict';

var express = require('express');
var controller = require('./transaction.controller.js');

var router = express.Router();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:offset/:limit', controller.findAll);
router.get('/:id', controller.findById);

module.exports = router;
