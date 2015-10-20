'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://192.168.99.100/vendafacil-dev'
    },

    seedDB: true,

    //MySQL Connection Options
    mysql: {
        schema: 'vendafacil-dev',
        username: 'root',
        password: 'root',
        host: '192.168.99.100',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
};
