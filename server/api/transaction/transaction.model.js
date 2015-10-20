'use strict';

var sequelize = require('../../sequelize');
var Sequelize = require('sequelize');

var Transaction = sequelize.define('transaction', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.ENUM,
        values: ['IN', 'OUT']
    }
}, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    tableName: 'transactions'
});

exports.create = function(transaction) {
    return Transaction.sync().then(function() {
        return Transaction.create(transaction);
    })
};

exports.findAll = function(offset, limit) {
    return Transaction.findAll({offset: offset, limit: limit});
}

exports.findById = function(id) {
    return Transaction.findOne({ id: id, deletedAt: null });
}
