import express from 'express';
import errorHandler from './middleware/error-handler.js';
import lineRouter from './routes/line-routes.js';
import AppError from './utils/app-error.js';

const app = express();

app.use(express.json());
app.use('/api/v1/lines', lineRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Cant ' find (${req.originalUrl}) on this server`, 404));
});
app.use(errorHandler);

export default app;
