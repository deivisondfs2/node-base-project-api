import './config/config';

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './routes';
import './database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(bodyParser.json());
  }

  routes() {
    this.app.use(routes);
    this.app.use(this.routerNotFound);
    this.app.use(this.errorHandler);
  }

  routerNotFound(req, res, next) {
    const err = new Error('Not found');
    err.status = 404;
    err.code = 'not_found';
    next(err);
  }

  // eslint-disable-next-line no-unused-vars
  errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      error_description: err.message,
      status_code: err.status,
      error: err.code
    });
  }
}

export default new App().app;
