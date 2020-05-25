import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('index');
});

export default routes;
