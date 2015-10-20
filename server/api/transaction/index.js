'use strict';

var express = require('express');
var controller = require('./transaction.controller.js');

var router = express.Router();

//router.get('/', auth.hasRole('admin'), controller.index);
//router.delete('/:id', auth.hasRole('admin'), controller.destroy);
//router.get('/me', auth.isAuthenticated(), controller.me);
//router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:offset/:limit', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);

module.exports = router;
