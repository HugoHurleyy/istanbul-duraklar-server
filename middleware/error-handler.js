import AppError from "../utils/app-error.js";

const sendCastError = (err) => {
  return new AppError(`Geçersiz ${err.path}: ${err.value}`, 400);
};

const sendValidationError = (err) => {
  const [key] = Object.keys(err.errors);

  return new AppError(err.errors[key].message, 400);
};

const sendDuplicateError = () => new AppError("Bu hattı zaten var", 400);

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.errorCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message:
        "Ooops! Bir şeyler ters gitti 💣🤯. Lütfen daha sonra tekrar deneyin",
    });
  }
};

const sendErrorDev = (err, res) => {
  res.status(err.errorCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _, res, next) => {
  err.errorCode = err.errorCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = Object.assign(err);

    if (error.name === "CastError") {
      error = sendCastError(error);
    }
    if (error.name === "ValidationError") {
      error = sendValidationError(error);
    }

    if (error.code === 11000) {
      error = sendDuplicateError();
    }

    sendErrorProd(error, res);
  }
};
export default errorHandler;
