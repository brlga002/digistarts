const leftPad = require('../utils/leftPad');

module.exports = {
  soma(request, response) {
    const { fistNumber, secondNumber } = request.body;
    const sum = parseInt(fistNumber, 2) + parseInt(secondNumber, 2);
    const result = leftPad(sum.toString(2), 8);
    return response.json(result);
  },

  subtracao(request, response) {
    const { fistNumber, secondNumber } = request.body;
    const sum = parseInt(fistNumber, 2) - parseInt(secondNumber, 2);
    const result = leftPad(sum.toString(2), 8);
    return response.json(result);
  },

  multiplicacao(request, response) {
    const { fistNumber, secondNumber } = request.body;
    const sum = parseInt(fistNumber, 2) * parseInt(secondNumber, 2);
    const result = leftPad(sum.toString(2), 8);
    return response.json(result);
  },

  divisao(request, response) {
    const { fistNumber, secondNumber } = request.body;
    const sum = parseInt(fistNumber, 2) / parseInt(secondNumber, 2);
    const result = leftPad(sum.toString(2), 8);
    return response.json(result);
  },

  resto(request, response) {
    const { fistNumber, secondNumber } = request.body;
    const sum = parseInt(fistNumber, 2) % parseInt(secondNumber, 2);
    const result = leftPad(sum.toString(2), 8);
    return response.json(result);
  },
};
