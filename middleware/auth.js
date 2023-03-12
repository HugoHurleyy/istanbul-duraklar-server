import AppError from '../utils/app-error.js';

const auth = (req, res, next) => {
  const { password } = req.headers;

  if (password !== process.env.PASSWORD) {
    return next(new AppError('Unauthorized', 401));
  }
  next();
};

export default auth;
