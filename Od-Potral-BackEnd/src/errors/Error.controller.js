function DuplicatedError(err, res) {
  const regex = /dup key: ({.*})/;
  const match = err.message.match(regex);

  if (match) {
    const duplicateKeyObject = match[1];
    console.log(duplicateKeyObject);
    res
      .status(err.statusCode || 500)
      .json({ error: `document already exists for ${duplicateKeyObject}` });
  } else {
    res.status(500).json({
      status: "error",
      error: "something went wrong",
    });
  }
}

function regularError(err, res) {
  if (err.isOperational) {
    res.status(err.statusCode || 500).json({
      error: `${err.message}`,
      // error: err,
      stack: err.stack,
    });
  } else {
    res.status(500).json({
      status: "error",
      error: "something went wrong",
    });
  }
}

function sendInvalidIdError(err, res) {
  const regex =
    /Cast to ObjectId failed for value \"(.+?)\".*?at path \"(.+?)\"/;
  const match = err.message.match(regex);
  if (match) {
    const id = match[1];
    const path = match[2];
    res.status(500).json({
      status: "error",
      error: `Invalid ${path} :  ${id}`,
    });
  } else {
    res.status(500).json({
      status: "error",
      error: "something went wrong",
    });
  }
}

module.exports = (err, req, res, next) => {
  if (err.message?.includes("E11000")) return DuplicatedError(err, res);
  if (err.message?.includes("Cast to ObjectId failed"))
    return sendInvalidIdError(err, res);
  regularError(err, res);
};
