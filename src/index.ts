import express, { Application } from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import Routes from './routes';

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    app.use(expressLayouts)
    app.set('layout', './layouts/full-width')
    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, './views'))
    app.use(express.static('./public'));
  }
}

