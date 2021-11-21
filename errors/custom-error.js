class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  console.log(msg, statusCode);
  return new CustomAPIError(msg, statusCode);
};

module.exports = { createCustomError, CustomAPIError };
