const Joi=require("joi")

exports.eventValidationSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      'string.empty': 'Event name is required',
      'string.min': 'Event name must be at least 3 characters long',
      'string.max': 'Event name must be less than 100 characters',
    }),
    startDate: Joi.date().greater('now').required().messages({
      'date.greater': 'Start date must be greater than today',
      'any.required': 'Start date is required',
    }),
    endDate: Joi.date().min(Joi.ref('startDate')).required().messages({
      'date.min': 'End date must be on or after the start date',
      'any.required': 'End date is required',
    }),
    organiser: Joi.string().min(3).max(100).required().messages({
      'string.empty': 'Organiser name is required',
      'string.min': 'Organiser name must be at least 3 characters long',
      'string.max': 'Organiser name must be less than 100 characters',
    }),
    location: Joi.string().min(3).required().messages({
      'string.empty': 'Location is required',
      'string.min': 'Location must be at least 3 characters long',
    })
  })