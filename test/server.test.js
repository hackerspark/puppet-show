/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import { expect } from 'chai';
import request from 'supertest';
import app from '../src/server';

describe('Test server', function() {
  it('Should work', function(done) {
    console.log('In should work');
    request(app)
      .get('/test')
      .end(function(err, res) {
        console.log('/test complete');
        expect(res.body).to.exist;
        console.log('About to be done');
        done();
      });
  });
});
