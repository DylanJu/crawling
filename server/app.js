import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes.js';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('*', routes);

app.set('port', 8002);

const server = app.listen(app.get('port'), ()=> {
  console.log('Express listening on port', app.get('port'));
})
