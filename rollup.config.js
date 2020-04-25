/* eslint-disable node/no-unpublished-import */
import multi from '@rollup/plugin-multi-entry';

const external = [
  'express',
  'cors',
  'body-parser',
  'cookie-parser',
  'puppeteer',
  'cheerio',
  'chai',
  'supertest'
];

const globals = {
  express: 'express',
  cors: 'cors',
  'body-parser': 'bodyParser',
  'cookie-parser': 'cookieParser',
  puppeteer: 'puppeteer',
  cheerio: 'cheerio',
  chai: 'chai',
  supertest: 'supertest'
};

const format = 'umd';

const sourcemap = true;

export default [
  {
    input: 'src/server.js',
    output: {
      file: 'dist/server.js',
      format,
      sourcemap,
      name: 'server',
      globals
    },
    external
  },
  {
    input: 'test/**/*.js',
    output: {
      file: 'dist/test/test.js',
      format,
      sourcemap,
      name: 'test',
      globals
    },
    external,
    plugins: [multi()]
  }
];
