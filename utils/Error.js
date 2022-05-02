class UnauthorizeError extends Error {
  constructor(message = 'Unauthorize') {
    super();
    this.code = 401;
    this.message = message;
  }
}

const Unauthorize = (error) => {
  throw new UnauthorizeError(error);
};

module.exports = Unauthorize;
