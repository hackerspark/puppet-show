/* eslint-disable node/no-unpublished-import */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import { expect } from 'chai';
import request from 'supertest';
import app from '../../../src/server';

describe('Example.com', function() {
  it('fetchBody | Should fetch site body', function(done) {
    request(app)
      .get('/sites/example/fetchBody')
      .end(function(err, res) {
        expect(res.body.res).to.exist;
        done();
      });
  });
});
