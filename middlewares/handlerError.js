function handlerError(req, res, next, err) {
  res.status(500).json({
    error: err.message,
  });
}

module.exports = handlerError;
