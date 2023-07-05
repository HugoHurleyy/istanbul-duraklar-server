import Line from "../models/line-model.js";
import APIFeatures from "../utils/search-feature.js";
import tryCatch from "../utils/try-catch.js";

export const getAllLines = tryCatch(async (req, res) => {
  const features = new APIFeatures(Line.find(), req.query)
    .filter()
    .limitFields()
    .sort()
    .paginate();

  const lines = await features.query;

  res.status(200).json({
    status: "success",
    result: lines.length,
    ok: true,
    data: { lines },
  });
});

export const getLine = tryCatch(async (req, res) => {
  const { id } = req.params;
  const line = await Line.findById(id);

  res.status(200).json({
    status: "success",
    data: {
      line,
    },
  });
});

export const postLine = tryCatch(async (req, res) => {
  const { body } = req;

  const line = await Line.create(body);

  res.status(200).json({
    status: "success",
    data: line || [],
  });
});

export const getStops = tryCatch(async (req, res) => {
  const data = await Line.aggregate([
    {
      $unwind: "$stops",
    },
  ]);

  res.status(200).json({
    status: "success",
    data,
  });
});
