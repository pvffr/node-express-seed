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
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    timestamps: true,
    paranoid: true,
    underscored: true,
    tableName: 'transactions'
});

exports.create = function(transaction) {
    return Transaction.create(transaction);
};

exports.update = function(transaction) {
    return Transaction.update(transaction, { where: { id: transaction.id, deleted_at: null} });
};

exports.delete = function(id) {
    return Transaction.destroy({ where: { id: id} });
};

exports.findAll = function(offset, limit) {
    return Transaction.findAll({offset: offset, limit: limit});
}

exports.findById = function(id) {
    return Transaction.findOne( { where: { id: id} } );
}
