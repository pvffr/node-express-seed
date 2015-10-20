/**
 * Sequelize Database Configuration
 */

'use strict';

var config = require('./config/environment');

var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.mysql.schema, config.mysql.username, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql',
    logging: console.log,
    pool: {
        max: config.mysql.pool.max,
        min: config.mysql.pool.min,
        idle: config.mysql.pool.idle
    }
});

module.exports = sequelize;
