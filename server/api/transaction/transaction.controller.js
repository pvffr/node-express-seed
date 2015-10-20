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
exports.create = function(req, res) {
    Transaction.create(req.body).then(function (data) {
        res.status(200).json(data);
    });
};

/**
 * List All transaction - pagination
 */
exports.create = function(req, res) {
    Transaction.create(req.body).then(function (data) {
        res.status(200).json(data);
    });
};
