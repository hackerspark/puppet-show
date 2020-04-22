/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import { expect } from 'chai';
import request from 'supertest';
import app from '../src/server';

describe('Test server', function() {
  it('Should work', function(done) {
    request(app)
      .get('/test')
      .end(function(err, res) {
        expect(res.body).to.exist;
        done();
      });
  });
});
