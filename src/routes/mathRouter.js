const express = require('express');
const routes = express.Router();
const { celebrate, Joi, Segments } = require('celebrate');
const mathController = require('../controllers/mathController');
const allowDigits = require('../middleware/allowDigits');

routes.post(
  '/soma',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      fistNumber: Joi.string().required(),
      secondNumber: Joi.string().required(),
    }),
  }),
  allowDigits,
  mathController.soma
);

routes.post(
  '/subtracao',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      fistNumber: Joi.string().required(),
      secondNumber: Joi.string().required(),
    }),
  }),
  allowDigits,
  mathController.subtracao
);

routes.post(
  '/multiplicacao',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      fistNumber: Joi.string().required(),
      secondNumber: Joi.string().required(),
    }),
  }),
  allowDigits,
  mathController.multiplicacao
);

routes.post(
  '/divisao',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      fistNumber: Joi.string().required(),
      secondNumber: Joi.string().required(),
    }),
  }),
  allowDigits,
  mathController.divisao
);

routes.post(
  '/resto',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      fistNumber: Joi.string().required(),
      secondNumber: Joi.string().required(),
    }),
  }),
  allowDigits,
  mathController.resto
);

module.exports = routes;
