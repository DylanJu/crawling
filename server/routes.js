import express from 'express';
import bodyParser from 'body-parser';

const routes = express.Router();

routes.get('/app', (req, res)=>{
  res.end('app page');
});

export default routes;
