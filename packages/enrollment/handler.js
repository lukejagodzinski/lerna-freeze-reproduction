module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "ENROLLMENT",
      input: event
    })
  };
  callback(null, response);
};
