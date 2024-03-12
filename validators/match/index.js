const { body, param } = require('express-validator');
const match_service = require('../../services/match')

const addMatchValidation = () => {
  return [
    body('matchName')
      .notEmpty().withMessage('Match name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Match name must be between 8 and 255 characters long'),
    body('matchDateTime')
      .notEmpty().withMessage('Match date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('stadium')
      .notEmpty().withMessage('Match stadium must not be empty'),
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),
    body('additionalInfo')
      .notEmpty().withMessage('additionalInfo must not be empty'),      
  ];
};

const deleteMatchValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await match_service.getById(id);
      if (!exists) {
        throw new Error('Match not found');
      }
    })
  ];
};

const editMatchValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await match_service.getById(id);
      if (!exists) {
        throw new Error('Match not found');
      }
    }),
    body('matchName')
      .notEmpty().withMessage('Match name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Match name must be between 8 and 255 characters long'),
    body('matchDateTime')
      .notEmpty().withMessage('Match date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('stadium')
      .notEmpty().withMessage('Match stadium must not be empty'),
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),
    body('additionalInfo')
      .notEmpty().withMessage('Please, provide details'),      
  ];
};

module.exports = {
    addMatchValidation,
    editMatchValidation,
    deleteMatchValidation
};
