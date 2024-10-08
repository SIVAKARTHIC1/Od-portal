module.exports = (fn) => {
    return async (req, res, next) => {
      try {
        return await fn(req, res, next);
      } catch (err) {
        console.log(err)
        next(err);
      }
    };
  };