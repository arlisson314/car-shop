import express from 'express';
import 'express-async-errors';
import errorHandler from './errors/errorHandler';
import route from './routes/routes';

const app = express();
app.use(express.json());
app.use(route);
app.use(errorHandler);

export default app;
