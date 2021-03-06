module.exports = (request, response, next) => {
  const { fistNumber, secondNumber } = request.body;

  const fistNumberCheck = fistNumber.toString();
  const secondNumberCheck = secondNumber.toString();

  if (fistNumberCheck.search(/[^0-1]/g) !== -1) {
    return response
      .status(400)
      .json({ message: 'the fistNumber must be a binary' });
  }

  if (secondNumberCheck.search(/[^0-1]/g) !== -1) {
    return response
      .status(400)
      .json({ message: 'the secondNumber must be a binary' });
  }

  const fistNumberDecimal = parseInt(fistNumber, 2);
  const secondNumberDecimal = parseInt(secondNumber, 2);

  const routePath = request.route.path;
  const allowedSecondNumberBiggerFistNumber = ['/soma', '/multiplicacao'];

  if (
    secondNumberDecimal > fistNumberDecimal &&
    !allowedSecondNumberBiggerFistNumber.includes(routePath)
  ) {
    return response.status(400).json({
      message:
        'the second number cannot be greater than the first in this operation',
    });
  }

  if (fistNumberDecimal > 255) {
    return response
      .status(400)
      .json({ message: 'the fistNumber must be 0 to 255' });
  }

  if (secondNumberDecimal > 255) {
    return response
      .status(400)
      .json({ message: 'the secondNumber must be 0 to 255' });
  }

  return next();
};
