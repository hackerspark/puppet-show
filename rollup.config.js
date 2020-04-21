export default [
  {
    input: 'src/server.js',
    output: {
      file: 'public/server.js',
      format: 'umd',
      sourcemap: true
    },
    external: ['puppeteer', 'cheerio']
  }
];
