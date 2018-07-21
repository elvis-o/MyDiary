var assert = require('assert');
var should = require('should');
var request = require('request');
var expect = require("chai").expect;
var chai = require('chai');
var util = require("util");
var controller = require("../controller");
var server = require('../app').server;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);


describe('/GET entries', () => {
      it('it should GET all the diary Entries', (done) => {
        chai.request(server)
            .get('/api/v1/entries')
            .end((err, res) => {
                assert.equal(res.body[0].id,1);
              done();
            });
      });
  });

describe('/GET entries', () => {
      it('it should GET an Endty by its ID', (done) => {
        chai.request(server)
            .get('/api/v1/entries/3')
            .end((err, res) => {
                assert.equal(res.body.entry.id,3);
              done();
            });
      });
  });

  describe('/POST new  entry', () => {
        it('it should create a new entry', (done) => {
          chai.request(server)
              .post('/api/v1/entries')
              .end((err, res) => {
                  assert.equal(res.body[0].id,1);
                done();
              });
        });
    });

describe('/PUT update entry', () => {
      it('it should GET an entry and update its properties', (done) => {
        chai.request(server)
            .put('/api/v1/entries/abcd')
            .end((err, res) => {
                assert.equal(res.body.status, "failed");
              done();
            });
      });
  });
