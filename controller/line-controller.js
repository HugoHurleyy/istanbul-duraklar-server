import Line from '../models/line-model.js';
import AppError from '../utils/app-error.js';
import APIFeatures from '../utils/search-feature.js';
import tryCatch from '../utils/try-catch.js';

export const getAllLines = tryCatch(async (req, res) => {
  const features = new APIFeatures(Line.find(), req.query)
    .filter()
    .limitFields()
    .sort();

  const lines = await features.query;

  res.status(200).json({
    status: 'success',
    result: lines.length,
    ok: true,
    data: { lines },
  });
});
export const createLine = tryCatch(async (req, res) => {
  const line = await Line.create(req.body);

  res.status(201).json({
    status: 'success',
    ok: true,
    data: {
      line,
    },
  });
});

export const getLine = tryCatch(async (req, res) => {
  const { id } = req.params;
  const line = await Line.findById(id);

  res.status(200).json({
    status: 'success',
    data: {
      line,
    },
  });
});

export const deleteLine = tryCatch(async (req, res, next) => {
  const { id } = req.params;

  const line = await Line.findByIdAndDelete(id);

  if (!line) {
    return next(new AppError('Girilen _id ye ait hat bulunamadı', 404));
  }
  res.status(204).json({
    status: 'success',
    data: {
      line,
    },
  });
});
