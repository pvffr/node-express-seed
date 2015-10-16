'use strict';

var Transaction = require('./transaction.model.js');

/**
 * Creates a new transaction
 */
exports.create = function(json, callback) {
    Transaction.create(json).then(function (data) {
        console.log(data.id);
    });
};
