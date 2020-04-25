import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
// Cheerio works only with data thats retured by a request; thus puppeteer's evaluate is much more proficient

const BROWSER_OPTS = {
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu',
    '--window-size=1920x1080'
  ]
};

export {
  express,
  cors,
  bodyParser,
  cookieParser,
  puppeteer,
  cheerio,
  BROWSER_OPTS
};
