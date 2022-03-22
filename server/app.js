import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import startRoute from './router/start.js';
import { config } from './config.js';

const app = express();
const PORT = config.PORT || 4000;

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
const whiteListByCors = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteListByCors.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// To router
app.use('/', startRoute);

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} successfully!!!`);
});
