const errorHandler = (err, req, res, next) => {
  // Checing if status code is sent by response if not the setting to 500
  const statusCode = res.statusCode < 400 ? 500 : res.statusCode;
  //   Sending status code
  res.status(statusCode);
  //   Sending JSON
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorHandler;
