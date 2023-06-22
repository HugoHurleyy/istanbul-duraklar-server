export const limitResult = (req, res, next) => {
  const searchParams = new URLSearchParams();
  if (req.query.page || req.query.limit) {
    next();
  } else {
    searchParams.set("page", 1);
    searchParams.set("limit", 50);
    if (req._parsedUrl.query) {
      res.redirect(`${req.originalUrl}&${searchParams.toString()}`);
    } else {
      res.redirect(`${req.originalUrl}?${searchParams.toString()}`);
    }
  }
  next();
};
