const { body } = require('express-validator');

const addMatchValidation = () => {
  return [
    body('matchName')
      .notEmpty().withMessage('Please, create a match')
      .isLength({ min: 8, max: 255 }).withMessage('Match name must be between 8 and 255 characters long'),
    body('matchDateTime')
      .notEmpty().withMessage('Match date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('stadium')
      .notEmpty().withMessage('Please indicate where the match will be held'),
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),
    body('additionalInfo')
      .notEmpty().withMessage('Please add extra info'),      
  ];
};

module.exports = {
    addMatchValidation
};
