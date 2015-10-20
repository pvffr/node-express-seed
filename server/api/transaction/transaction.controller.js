'use strict';

var Transaction = require('./transaction.model.js');

/**
 * Creates a new transaction
 */
exports.create = function(req, res) {
    Transaction.create(req.body).then(function (data) {
        res.status(200).json(data);
    });
};

/**
 * Update a transaction
 */
exports.update = function(req, res) {
    Transaction.create(req.body).then(function (data) {
        res.status(200).json(data);
    });
};

/**
 * Find All transaction - pagination
 */
exports.findAll = function(req, res) {
    var offset = req.params.offset || 0;
    var limit = req.params.limit || 100;

    Transaction.findAll(offset, limit).then(function (data) {
        res.status(200).json(data);
    });
};

/**
 * Find transaction by id
 */
exports.findById = function(req, res) {
    var id = req.params.id;

    Transaction.findById(id).then(function (data) {
        res.status(200).json(data);
    });
};
