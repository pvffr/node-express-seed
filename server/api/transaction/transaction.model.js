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
    description: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.ENUM,
        values: ['IN', 'OUT']
    }
}, {
    timestamps: true,
    paranoid: true,
    underscored: false,
    tableName: 'transactions'
});

Transaction.sync();

exports.create = function(transaction) {
    return Transaction.create(transaction);
};

exports.update = function(transaction) {
    return Transaction.update(transaction, {
        where: {
            id: transaction.id,
            deletedAt: null
        }
    });
};

exports.delete = function(id) {
    return Transaction.destroy({ where: { id: id} });
};

exports.findAll = function() {
    return Transaction.findAll({
        where: {
            deletedAt: null
        }
    });
}

exports.findById = function(id) {
    return Transaction.findOne({
        where: {
            id: id,
            deletedAt: null
        }
    });
}
