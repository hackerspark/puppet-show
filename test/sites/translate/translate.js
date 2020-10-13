/* eslint-disable node/no-unpublished-import */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import { expect } from 'chai';
import request from 'supertest';
import app from '../../../src/server';

describe('translate.google.com', function() {
  it('fetchTranslatedPhonotonic | Should fetch translated photonic text', function(done) {
    request(app)
      .get(
        '/sites/translate/fetchTranslatedPhonotonic?source=en&destination=hi&translateText=hello%20world!'
      )
      .end(function(err, res) {
        expect(res.body.res).to.exist;
        done();
      });
  });
});
