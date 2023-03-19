import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(500).send({ error: err.message });
};

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', routes);
app.use(errorHandler);

export default app;
