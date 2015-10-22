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

    var transactionId = req.params.id;
    var transaction = req.body;

    transaction.id = transactionId;

    Transaction.update(transaction).then(function () {
        Transaction.findById(transactionId).then(function (data) {
            res.status(200).json(data);
        });
    });
};

/**
 * Delete a transaction
 */
exports.delete = function(req, res) {

    var transactionId = req.params.id;

    Transaction.delete(transactionId).then(function (data) {
        res.status(200).json(data);
    });
};

/**
 * Find All transaction - pagination
 */
exports.findAll = function(req, res) {
    Transaction.findAll().then(function (data) {
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
