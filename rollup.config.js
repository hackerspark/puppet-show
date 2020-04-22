export default [
  {
    input: 'src/entry.js',
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      sourcemap: true
    }
    // external: ['puppeteer', 'cheerio']
  },
  {
    input: 'test/server.test.js',
    output: {
      file: 'dist/test/server.test.js',
      format: 'umd',
      sourcemap: true
    }
    // external: ['puppeteer', 'cheerio']
  }
];
