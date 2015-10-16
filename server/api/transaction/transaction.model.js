'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('vendafacil-dev', 'root', 'root', {
    host: '192.168.99.100',
    dialect: 'mysql',
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

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
        type: Sequelize.STRING
    }
}, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    tableName: 'transactions'
});

exports.create = function(transaction) {
    return Transaction.sync().then(function(transaction) {
        return Transaction.create(transaction);
    })
};
