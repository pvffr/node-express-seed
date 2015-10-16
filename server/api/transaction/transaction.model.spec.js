'use strict';

var should = require('should');
var Transaction = require('./transaction.model.js');

var transaction = {
    value: '100',
    type: 'IN'
};

describe('Transaction Model', function() {
    //before(function(done) {
        // Clear users before testing
        //User.remove().exec().then(function() {
        //    done();
        //});
    //});

    //afterEach(function(done) {
        //User.remove().exec().then(function() {
        //    done();
        //});
    //});

    it('should create new transaction', function(done) {
        Transaction.create(transaction).then(function (data) {
            console.log(data.id);
            data.id.should.be.above(0);
            done();
        });
    });

});
